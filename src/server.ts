import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    console.log('Received a GET request on /');
  res.send('Hello from Task Manager Backend (TypeScript)!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
