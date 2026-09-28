const { test, expect } = require('@playwright/test');

const { createOrdersTable } = require('../../database/testDatabase');

test.describe('Database Setup Tests', () => {

    test('Orders table should be created successfully', () => {

        expect(() => {
            createOrdersTable();
        }).not.toThrow();

        console.log(
            'Database setup completed successfully'
        );
    });

});