import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routers
import usersRouter from './src/api/users/userController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// CORS configuration
const corsOptions = {
    // Manage frontend domain via .env
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Parse JSON payloads
app.use(express.json());

// Setup routers
app.use('/api/users', usersRouter);

// Health check API
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});