const { test, expect } = require('@playwright/test');

const { ApiClient } = require('../../utils/apiClient');
const { apiConfig } = require('../../config/apiConfig');

const {
    createOrdersTable,
    insertOrder,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../../database/testDatabase');

const apiProducts = require('../../test-data/apiProducts.json');

test.describe('API and Database Integration Tests', () => {

    test.beforeAll(() => {
        createOrdersTable();
    });

    test('API product data should be stored and validated in database', async ({ request }) => {

        // 1. Get product from API
        const apiClient = new ApiClient(request);

        const response = await apiClient.get(
            `${apiConfig.baseURL}/products/${apiProducts.productId}`
        );

        expect(response.status()).toBe(200);

        const product = await response.json();

        console.log('API Product:', product);

        expect(product).toHaveProperty('id');
        expect(product.id).toBe(apiProducts.productId);

        expect(product).toHaveProperty('title');
        expect(product.title).toEqual(expect.any(String));

        expect(product).toHaveProperty('price');
        expect(product.price).toEqual(expect.any(Number));


        // 2. Store API product as database order
        const quantity = 2;

        const totalPrice = product.price * quantity;

        const insertResult = insertOrder(
            product.title,
            quantity,
            totalPrice,
            'Pending'
        );

        const orderId = Number(insertResult.lastInsertRowid);

        console.log('Created Database Order ID:', orderId);


        // 3. Validate database record
        const order = getOrder(orderId);

        console.log('Database Order:', order);

        expect(order).toBeDefined();

        expect(order.id).toBe(orderId);

        expect(order.product_name)
            .toBe(product.title);

        expect(order.quantity)
            .toBe(quantity);

        expect(order.total_price)
            .toBe(totalPrice);

        expect(order.status)
            .toBe('Pending');


        // 4. Update order status
        const updateResult = updateOrderStatus(
            orderId,
            'Completed'
        );

        expect(updateResult.changes).toBe(1);


        // 5. Validate updated order
        const updatedOrder = getOrder(orderId);

        console.log(
            'Updated Database Order:',
            updatedOrder
        );

        expect(updatedOrder.status)
            .toBe('Completed');


        // 6. Delete test data
        const deleteResult = deleteOrder(orderId);

        expect(deleteResult.changes).toBe(1);

        const deletedOrder = getOrder(orderId);

        expect(deletedOrder).toBeUndefined();

        console.log(
            'Integration test data cleaned up successfully'
        );
    });
});