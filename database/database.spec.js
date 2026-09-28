const { test, expect } = require('@playwright/test');

const {
    createOrdersTable,
    insertOrder,
    getOrder,
    getAllOrders,
    updateOrderStatus
} = require('../../database/testDatabase');

test.describe('Database Testing - Orders', () => {

    test.beforeAll(() => {
        createOrdersTable();
    });

    test('INSERT order into database', () => {

        const result = insertOrder(
            'Playwright Laptop',
            2,
            150000,
            'Pending'
        );

        console.log('Inserted Order ID:', result.lastInsertRowid);

        expect(result.changes).toBe(1);
    });


    test('SELECT order from database', () => {

        const orders = getAllOrders();

        console.log('Orders in database:', orders);

        expect(orders.length).toBeGreaterThan(0);

        const latestOrder = orders[orders.length - 1];

        expect(latestOrder.product_name)
            .toBe('Playwright Laptop');

        expect(latestOrder.quantity)
            .toBe(2);

        expect(latestOrder.total_price)
            .toBe(150000);

        expect(latestOrder.status)
            .toBe('Pending');
    });


    test('UPDATE order status in database', () => {

        const orders = getAllOrders();

        const latestOrder = orders[orders.length - 1];

        const result = updateOrderStatus(
            latestOrder.id,
            'Completed'
        );

        console.log(
            'Updated Order ID:',
            latestOrder.id
        );

        expect(result.changes).toBe(1);

        const updatedOrder = getOrder(latestOrder.id);

        console.log(
            'Updated Order:',
            updatedOrder
        );

        expect(updatedOrder.status)
            .toBe('Completed');
    });

});