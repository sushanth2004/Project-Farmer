// loginController.js

import { db } from '../config/db.js';

export const login = (req, res) => {
    const { phone, password } = req.body;

    const sql = 'SELECT fullname FROM register WHERE phone = ? AND password = ?';
    const values = [phone, password];

    db.execute(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {
            const { fullname } = results[0]; // Assuming 'fullname' is the field in your database
            // Redirect to home.html with fullname as query parameter
            res.redirect(`/home.html?fullname=${fullname}`);
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
};
