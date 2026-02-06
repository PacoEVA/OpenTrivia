import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcrypt';
import mysql from 'mysql2/promise';

dotenv.config();
const app = express();
const port = process.env.PORT || 1234;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
