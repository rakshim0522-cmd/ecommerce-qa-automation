class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');

        this.summaryTitle = page.locator('.title');
        this.completeHeader = page.locator('.complete-header');
        this.totalPrice = page.locator('.summary_total_label');

        // Error message
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToSummary() {

        await this.continueButton.click();
    }

    async finishOrder() {

        await this.finishButton.click();
    }

    async getTotalPrice() {

        return await this.totalPrice.textContent();
    }

    // Get checkout validation error
    async getErrorMessage() {

        return await this.errorMessage.textContent();
    }
}

module.exports = { CheckoutPage };