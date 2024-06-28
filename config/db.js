// config/db.js

import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'tiger', // Replace with your MySQL password
    database: 'target_farmer'
});

const connectDB = () => {
    db.connect(err => {
        if (err) {
            throw err;
        }
        console.log('MySQL connected...');
    });
};

export { connectDB, db };
