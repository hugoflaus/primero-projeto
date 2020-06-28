import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfing from './config/upload';
import AppError from './erros/AppError';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfing.directory));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen('3333', () => {
  console.log('Server Started on port 3333');
});
