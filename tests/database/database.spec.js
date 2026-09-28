const { test, expect } = require('@playwright/test');

const {
    createOrdersTable,
    insertOrder,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../../database/testDatabase');


test.describe('Database Testing - Orders', () => {

    test.beforeAll(() => {
        createOrdersTable();
    });


    test('@regression INSERT order into database', () => {

        const result = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        const orderId = Number(result.lastInsertRowid);

        console.log('Inserted Order ID:', orderId);

        expect(result.changes).toBe(1);

        const order = getOrder(orderId);

        expect(order).toBeDefined();
        expect(order.product_name).toBe('Playwright Laptop');
        expect(order.quantity).toBe(2);
        expect(order.total_price).toBe(150000);
        expect(order.status).toBe('Pending');

        // Cleanup
        deleteOrder(orderId);
    });


    test('@regression SELECT order from database', () => {

        const insertResult = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        const orderId = Number(insertResult.lastInsertRowid);

        const order = getOrder(orderId);

        console.log('Order from database:', order);

        expect(order).toBeDefined();
        expect(order.id).toBe(orderId);
        expect(order.product_name).toBe('Playwright Laptop');
        expect(order.quantity).toBe(2);
        expect(order.total_price).toBe(150000);
        expect(order.status).toBe('Pending');

        // Cleanup
        deleteOrder(orderId);
    });


    test('@regression UPDATE order status in database', () => {

        const insertResult = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        const orderId = Number(insertResult.lastInsertRowid);

        const updateResult = updateOrderStatus(
            orderId,
            'Completed'
        );

        console.log('Updated Order ID:', orderId);

        expect(updateResult.changes).toBe(1);

        const updatedOrder = getOrder(orderId);

        console.log(
            'Updated Order:',
            updatedOrder
        );

        expect(updatedOrder).toBeDefined();
        expect(updatedOrder.status).toBe('Completed');

        // Cleanup
        deleteOrder(orderId);
    });


    test('@regression DELETE order from database', () => {

        const insertResult = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        const orderId = Number(insertResult.lastInsertRowid);

        const deleteResult = deleteOrder(orderId);

        console.log('Deleted Order ID:', orderId);

        expect(deleteResult.changes).toBe(1);

        const deletedOrder = getOrder(orderId);

        expect(deletedOrder).toBeUndefined();
    });


    test('@regression VERIFY order is deleted from database', () => {

        const insertResult = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        const orderId = Number(insertResult.lastInsertRowid);

        deleteOrder(orderId);

        const deletedOrder = getOrder(orderId);

        expect(deletedOrder).toBeUndefined();

        console.log(
            'Order successfully deleted from database'
        );
    });

});