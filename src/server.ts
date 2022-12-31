/* eslint-disable import/no-extraneous-dependencies */
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { router } from 'routes';

import { AppError } from '@shared/Util/AppError/AppError';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json(err);
  }
  response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });

  return next();
});

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
