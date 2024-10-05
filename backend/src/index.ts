import cors from 'cors';


import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the TypeScript backend!');
});

// An API route that returns a list of items
app.get('/api/items', (req: Request, res: Response) => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  res.json(items);
});

// Bind to localhost (127.0.0.1) for local access only
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running locally on http://127.0.0.1:${PORT}`);
});

