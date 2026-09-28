const { expect } = require('@playwright/test');

const { test } = require('../../fixtures/testFixture');
const { ProductPage } = require('../../pages/ProductPage');
const { CartPage } = require('../../pages/CartPage');

test.describe('Shopping Cart Tests', () => {

    test('Authenticated user should be able to add product to cart', async ({ authenticatedPage }) => {

        // Product page
        const productPage = new ProductPage(authenticatedPage);

        await expect(productPage.productsTitle)
            .toHaveText('Products');

        // Add product
        await productPage.addBackpackToCart();

        await expect(productPage.cartBadge)
            .toHaveText('1');

        // Open cart
        await productPage.openCart();

        const cartPage = new CartPage(authenticatedPage);

        await expect(cartPage.cartTitle)
            .toHaveText('Your Cart');

        // Verify product
        expect(await cartPage.verifyBackpackIsDisplayed())
            .toBeTruthy();
    });

});