// Import modules using ES Modules syntax
import express from 'express';
import bodyParser from 'body-parser';
import registerRoutes from './routes/register.js';
import loginRoutes from './routes/login.js';
import indexRoutes from './routes/index.js';
import homeRoutes from './routes/home.js';
import { connectDB } from './config/db.js';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/', indexRoutes);
app.use('/home', homeRoutes);

// Start server
app.listen(port, async () => {
    // Connect to the database
    try {
        await connectDB();
        console.log(`Database connected successfully`);
        console.log(`Server started on http://localhost:${port}`);
    } catch (error) {
        console.error('Database connection error:', error);
    }
});
