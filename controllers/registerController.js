import { db } from '../config/db.js';

export const register = (req, res) => {
    const { fullname, age, phone, email, password, address1, address2, city, pincode, state, gender } = req.body;

    const sql = 'INSERT INTO register (fullname, age, phone, email, password, address1, address2, city, pincode, state, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [fullname, age, phone, email, password, address1, address2, city, pincode, state, gender];

    db.execute(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
            return;
        }
        res.send('Registration successful');
    });
};
