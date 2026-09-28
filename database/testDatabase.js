const { db } = require('./database');

function createOrdersTable() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            total_price REAL NOT NULL,
            status TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('Orders table is ready');
}

// INSERT
function insertOrder(productName, quantity, totalPrice, status) {
    const statement = db.prepare(`
        INSERT INTO orders
        (product_name, quantity, total_price, status)
        VALUES (?, ?, ?, ?)
    `);

    return statement.run(
        productName,
        quantity,
        totalPrice,
        status
    );
}

// SELECT
function getOrder(orderId) {
    const statement = db.prepare(`
        SELECT *
        FROM orders
        WHERE id = ?
    `);

    return statement.get(orderId);
}

// SELECT ALL
function getAllOrders() {
    return db.prepare(`
        SELECT *
        FROM orders
    `).all();
}

// UPDATE
function updateOrderStatus(orderId, status) {
    const statement = db.prepare(`
        UPDATE orders
        SET status = ?
        WHERE id = ?
    `);

    return statement.run(status, orderId);
}

// DELETE
function deleteOrder(orderId) {
    const statement = db.prepare(`
        DELETE FROM orders
        WHERE id = ?
    `);

    return statement.run(orderId);
}

module.exports = {
    createOrdersTable,
    insertOrder,
    getOrder,
    getAllOrders,
    updateOrderStatus,
    deleteOrder
};