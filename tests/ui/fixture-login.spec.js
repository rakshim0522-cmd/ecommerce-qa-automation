const { expect } = require('@playwright/test');

const { test } = require('../../fixtures/testFixture');

test.describe('Authentication Fixture Test', () => {

    test('Authenticated user should access products page', async ({ authenticatedPage }) => {

        await expect(authenticatedPage).toHaveURL(/inventory/);

        await expect(
            authenticatedPage.locator('.title')
        ).toHaveText('Products');

    });

});