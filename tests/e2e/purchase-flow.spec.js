const { expect } = require('@playwright/test');

const { test } = require('../../fixtures/testFixture');

const { ProductPage } = require('../../pages/ProductPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

const checkoutData = require('../../test-data/checkout.json');

test.describe('Complete Purchase Flow', () => {

   test('@smoke @regression Authenticated user should be able to complete a purchase successfully', async ({ authenticatedPage }) => {
        // 1. Product
        const productPage = new ProductPage(authenticatedPage);

        await expect(productPage.productsTitle)
            .toHaveText('Products');

        await productPage.addBackpackToCart();

        await expect(productPage.cartBadge)
            .toHaveText('1');

        // 2. Cart
        await productPage.openCart();

        const cartPage = new CartPage(authenticatedPage);

        await expect(cartPage.cartTitle)
            .toHaveText('Your Cart');

        expect(await cartPage.verifyBackpackIsDisplayed())
            .toBeTruthy();

        // 3. Checkout
        await cartPage.clickCheckout();

        const checkoutPage = new CheckoutPage(authenticatedPage);

        await checkoutPage.enterCustomerDetails(
            checkoutData.validCustomer.firstName,
            checkoutData.validCustomer.lastName,
            checkoutData.validCustomer.postalCode
        );

        // 4. Order summary
        await checkoutPage.continueToSummary();

        await expect(checkoutPage.summaryTitle)
            .toHaveText('Checkout: Overview');

        // 5. Validate order total
        const total = await checkoutPage.getTotalPrice();

        expect(total).toContain('Total:');

        console.log('Order Total:', total);

        // 6. Complete order
        await checkoutPage.finishOrder();

        // 7. Verify order confirmation
        await expect(checkoutPage.completeHeader)
            .toHaveText('Thank you for your order!');

    });

});