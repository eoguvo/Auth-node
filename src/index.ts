import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

import './models';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Running at https://localhost:${PORT}`);
});