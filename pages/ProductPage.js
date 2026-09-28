class ProductPage {
    constructor(page) {
        this.page = page;

        this.productsTitle = page.locator('.title');
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }
}

module.exports = { ProductPage };