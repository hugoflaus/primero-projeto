import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfing from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfing.directory));

app.use(routes);

app.listen('3333', () => {
  console.log('Server Started on port 3333');
});
