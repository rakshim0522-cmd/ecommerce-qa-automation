class CartPage {
    constructor(page) {
        this.page = page;

        this.cartTitle = page.locator('.title');
        this.backpackItem = page.locator('[data-test="inventory-item"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async verifyBackpackIsDisplayed() {
        return await this.backpackItem
            .filter({ hasText: 'Sauce Labs Backpack' })
            .isVisible();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };