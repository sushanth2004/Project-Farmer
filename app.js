const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/register');
const indexRoutes = require('./routes/index');
const db = require('./config/db');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/register', registerRoutes);
app.use('/', indexRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
