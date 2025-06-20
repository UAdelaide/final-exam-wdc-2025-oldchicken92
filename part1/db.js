const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '127',
    user: 'root',
    password: 'password',
    database: 'DogWalkService'
});

module.exports = db;
