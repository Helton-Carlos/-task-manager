import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { createDB } from './db/database';

const app = express();

app.use(cors());
app.use(express.json());

async function run() {
  createDB();
  console.log('Banco conectado!');
}

run();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
