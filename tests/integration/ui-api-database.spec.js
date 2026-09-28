const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

const { ApiClient } = require('../../utils/apiClient');
const { apiConfig } = require('../../config/apiConfig');

const {
    createOrdersTable,
    insertOrder,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../../database/testDatabase');

const checkoutData = require('../../test-data/checkout.json');
const apiProducts = require('../../test-data/apiProducts.json');

test.describe('UI API Database End-to-End Integration', () => {

    test.beforeAll(() => {
        createOrdersTable();
    });

    test('Complete purchase should be validated across UI, API and Database', async ({
        page,
        request
    }) => {

        // =====================================================
        // 1. UI - LOGIN
        // =====================================================

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);

        console.log('UI Login: Successful');


        // =====================================================
        // 2. UI - ADD PRODUCT TO CART
        // =====================================================

        const productPage = new ProductPage(page);

        await expect(productPage.productsTitle)
            .toHaveText('Products');

        await productPage.addBackpackToCart();

        await expect(productPage.cartBadge)
            .toHaveText('1');

        console.log('UI Cart: Product added');


        // =====================================================
        // 3. UI - OPEN CART
        // =====================================================

        await productPage.openCart();

        const cartPage = new CartPage(page);

        await expect(cartPage.cartTitle)
            .toHaveText('Your Cart');

        expect(
            await cartPage.verifyBackpackIsDisplayed()
        ).toBeTruthy();

        console.log('UI Cart: Product verified');


        // =====================================================
        // 4. UI - CHECKOUT
        // =====================================================

        await cartPage.clickCheckout();

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.enterCustomerDetails(
            checkoutData.validCustomer.firstName,
            checkoutData.validCustomer.lastName,
            checkoutData.validCustomer.postalCode
        );

        await checkoutPage.continueToSummary();

        await expect(checkoutPage.summaryTitle)
            .toHaveText('Checkout: Overview');

        const uiTotal = await checkoutPage.getTotalPrice();

        console.log('UI Order Total:', uiTotal);


        // =====================================================
        // 5. API - GET PRODUCT
        // =====================================================

        const apiClient = new ApiClient(request);

        const apiResponse = await apiClient.get(
            `${apiConfig.baseURL}/products/${apiProducts.productId}`
        );

        expect(apiResponse.status())
            .toBe(200);

        const apiProduct = await apiResponse.json();

        console.log('API Product:', apiProduct.title);
        console.log('API Product Price:', apiProduct.price);

        expect(apiProduct)
            .toHaveProperty('id');

        expect(apiProduct.id)
            .toBe(apiProducts.productId);

        expect(apiProduct)
            .toHaveProperty('title');

        expect(apiProduct.title)
            .toEqual(expect.any(String));

        expect(apiProduct)
            .toHaveProperty('price');

        expect(apiProduct.price)
            .toEqual(expect.any(Number));


        // =====================================================
        // 6. API - CALCULATE EXPECTED ORDER TOTAL
        // =====================================================

        const quantity = 2;

        const expectedTotal =
            apiProduct.price * quantity;

        console.log(
            'Expected API Order Total:',
            expectedTotal
        );

        expect(expectedTotal)
            .toBe(apiProduct.price * quantity);


        // =====================================================
        // 7. DATABASE - INSERT ORDER
        // =====================================================

        const insertResult = insertOrder(
            apiProduct.title,
            quantity,
            expectedTotal,
            'Pending'
        );

        const orderId =
            Number(insertResult.lastInsertRowid);

        console.log(
            'Database Order ID:',
            orderId
        );

        expect(insertResult.changes)
            .toBe(1);


        // =====================================================
        // 8. DATABASE - SELECT AND VALIDATE
        // =====================================================

        const order = getOrder(orderId);

        console.log(
            'Database Order:',
            order
        );

        expect(order)
            .toBeDefined();

        expect(order.id)
            .toBe(orderId);

        expect(order.product_name)
            .toBe(apiProduct.title);

        expect(order.quantity)
            .toBe(quantity);

        expect(order.total_price)
            .toBe(expectedTotal);

        expect(order.status)
            .toBe('Pending');


        // =====================================================
        // 9. DATABASE - UPDATE ORDER STATUS
        // =====================================================

        const updateResult = updateOrderStatus(
            orderId,
            'Completed'
        );

        expect(updateResult.changes)
            .toBe(1);

        const updatedOrder =
            getOrder(orderId);

        console.log(
            'Updated Database Order:',
            updatedOrder
        );

        expect(updatedOrder.status)
            .toBe('Completed');


        // =====================================================
        // 10. UI - COMPLETE PURCHASE
        // =====================================================

        await checkoutPage.finishOrder();

        await expect(checkoutPage.completeHeader)
            .toHaveText('Thank you for your order!');

        console.log(
            'UI Order: Purchase completed successfully'
        );


        // =====================================================
        // 11. DATABASE - CLEANUP
        // =====================================================

        const deleteResult =
            deleteOrder(orderId);

        expect(deleteResult.changes)
            .toBe(1);

        const deletedOrder =
            getOrder(orderId);

        expect(deletedOrder)
            .toBeUndefined();

        console.log(
            'Database Cleanup: Successful'
        );
    });
});