const { expect } = require('@playwright/test');

function validateProduct(product) {

    expect(product).toHaveProperty('id');
    expect(product.id).toEqual(expect.any(Number));

    expect(product).toHaveProperty('title');
    expect(product.title).toEqual(expect.any(String));

    expect(product).toHaveProperty('price');
    expect(product.price).toEqual(expect.any(Number));

    expect(product).toHaveProperty('category');
    expect(product.category).toEqual(expect.any(String));
}

function validateProductsResponse(responseBody) {

    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody.products)).toBeTruthy();

    expect(responseBody.products.length).toBeGreaterThan(0);

    responseBody.products.forEach((product) => {
        validateProduct(product);
    });
}

module.exports = {
    validateProduct,
    validateProductsResponse
};