// index.js
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

import authRouter from './routers/AuthRouter.js';

dotenv.config();

const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});