const Database = require('better-sqlite3');

const db = new Database('database/test-automation.db');

db.pragma('journal_mode = WAL');

module.exports = { db };