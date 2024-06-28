const db = require('../config/db');

exports.login = (req, res) => {
    const { phone, password } = req.body;

    const sql = 'SELECT * FROM register WHERE phone = ? AND password = ?';
    const values = [phone, password];

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {
            res.redirect('/home');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
};
