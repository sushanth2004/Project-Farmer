import express from 'express';
import bodyParser from 'body-parser';
import registerRoutes from './routes/register.js';
import loginRoutes from './routes/login.js';
import indexRoutes from './routes/index.js';
import homeRoutes from './routes/home.js';
import rssRoutes from './routes/rss.js';  
import { connectDB } from './config/db.js';
import http from 'http';
import { initializeSocket } from './controllers/rssController.js';

const app = express();
const server = http.createServer(app);
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/', indexRoutes);
app.use('/home', homeRoutes);
app.use('/rss', rssRoutes);  

server.listen(port, async () => {
    try {
        await connectDB();
        console.log(`Database connected successfully`);
        console.log(`Server started on http://localhost:${port}`);
    } catch (error) {
        console.error('Database connection error:', error);
    }
});


initializeSocket(server);
