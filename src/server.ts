import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import { connectDB } from './config/db';
import taskRoutes from './routes/task.routes';

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins: string[] = [
    // 'http://localhost:8084',
    // 'https://staging.your-domain.com',
    // 'https://your-domain.com',
    process.env.LOCAL_ORIGINS,
    process.env.VERCLE_FINAL_ORIGINS,
    process.env.NETLIFY_FINAL_ORIGINS,
    process.env.RANDOM_ORIGINS,
    process.env.VERCLE_ORIGINS,
    process.env.VERCLE_FINAL_ORIGINS,
].filter((origin): origin is string => typeof origin === 'string');


app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

// Middleware
app.use(express.json());

connectDB();

// Routes
app.get('/', (req: Request, res: Response) => {
    console.log('Received a GET request on /');
    res.send('Hello from Task Manager Backend (TypeScript)!');
});

app.use('/api/auth', authRoutes);
app.use("/api/tasks", taskRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
