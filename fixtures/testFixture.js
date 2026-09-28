const { test: base } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

const users = require('../test-data/users.json');

const test = base.extend({

    authenticatedPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await use(page);
    }

});

module.exports = { test };