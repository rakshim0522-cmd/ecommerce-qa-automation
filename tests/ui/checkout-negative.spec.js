const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Negative Checkout Tests', () => {

    test('User should not continue checkout without first name', async ({ page }) => {

        // 1. Login
        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // 2. Add product
        const productPage = new ProductPage(page);

        await productPage.addBackpackToCart();

        // 3. Open cart
        await productPage.openCart();

        const cartPage = new CartPage(page);

        await cartPage.clickCheckout();

        // 4. Checkout
        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.enterCustomerDetails(
            '',
            'QA',
            '560001'
        );

        await checkoutPage.continueToSummary();

        // 5. Validate error
        const errorMessage = await checkoutPage.getErrorMessage();

        expect(errorMessage).toContain(
            'First Name is required'
        );
    });

});