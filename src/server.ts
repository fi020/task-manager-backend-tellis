import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import { connectDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

connectDB();

// Routes
app.get('/', (req: Request, res: Response) => {
    console.log('Received a GET request on /');
  res.send('Hello from Task Manager Backend (TypeScript)!');
});

app.use('/api/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
