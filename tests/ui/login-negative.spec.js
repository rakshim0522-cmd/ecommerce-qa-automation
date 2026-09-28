const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

const users = require('../../test-data/users.json');

test.describe('Negative Login Tests', () => {

    test('User should not login with invalid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        const errorMessage = await loginPage.getErrorMessage();

        expect(errorMessage).toContain(
            'Username and password do not match'
        );
    });

});