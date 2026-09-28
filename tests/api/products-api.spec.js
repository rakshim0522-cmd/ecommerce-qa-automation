const { test, expect } = require('@playwright/test');

const { ApiClient } = require('../../utils/apiClient');

const {
    validateProduct,
    validateProductsResponse
} = require('../../utils/apiSchemaValidator');

const { apiConfig } = require('../../config/apiConfig');

const apiProducts = require('../../test-data/apiProducts.json');


test.describe('Products API Tests', () => {

    test('@regression GET products should return successful response', async ({ request }) => {

        const apiClient = new ApiClient(request);

        const response = await apiClient.get(
            `${apiConfig.baseURL}/products`
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        validateProductsResponse(responseBody);

        console.log(
            'Products returned:',
            responseBody.products.length
        );
    });


    test('@regression GET invalid product should return error response', async ({ request }) => {

        const apiClient = new ApiClient(request);

        const response = await apiClient.get(
            `${apiConfig.baseURL}/products/${apiProducts.invalidProductId}`
        );

        expect(response.status()).toBe(404);

        const responseBody = await response.json();

        expect(responseBody)
            .toHaveProperty('message');

        expect(responseBody.message)
            .toEqual(expect.any(String));

        console.log(
            'API Error:',
            responseBody.message
        );
    });


    test('@regression POST product should create a product successfully', async ({ request }) => {

        const apiClient = new ApiClient(request);

        const response = await apiClient.post(
            `${apiConfig.baseURL}/products/add`,
            apiProducts.newProduct
        );

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        validateProduct(responseBody);

        expect(responseBody.title)
            .toBe(apiProducts.newProduct.title);

        expect(responseBody.price)
            .toBe(apiProducts.newProduct.price);

        expect(responseBody.description)
            .toBe(apiProducts.newProduct.description);

        expect(responseBody.category)
            .toBe(apiProducts.newProduct.category);

        console.log(
            'Created Product ID:',
            responseBody.id
        );

        console.log(
            'Created Product:',
            responseBody.title
        );
    });


    test('@regression PUT product should update product successfully', async ({ request }) => {

        const apiClient = new ApiClient(request);

        const response = await apiClient.put(
            `${apiConfig.baseURL}/products/${apiProducts.productId}`,
            apiProducts.updatedProduct
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        validateProduct(responseBody);

        expect(responseBody.id)
            .toBe(apiProducts.productId);

        expect(responseBody.title)
            .toBe(apiProducts.updatedProduct.title);

        expect(responseBody.price)
            .toBe(apiProducts.updatedProduct.price);

        console.log(
            'Updated Product ID:',
            responseBody.id
        );

        console.log(
            'Updated Product:',
            responseBody.title
        );
    });


    test('@regression DELETE product should delete product successfully', async ({ request }) => {

        const apiClient = new ApiClient(request);

        const response = await apiClient.delete(
            `${apiConfig.baseURL}/products/${apiProducts.productId}`
        );

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody)
            .toHaveProperty('id');

        expect(responseBody.id)
            .toEqual(expect.any(Number));

        expect(responseBody.id)
            .toBe(apiProducts.productId);

        console.log(
            'Deleted Product ID:',
            responseBody.id
        );

        console.log(
            'Deleted Product:',
            responseBody.title
        );
    });

});