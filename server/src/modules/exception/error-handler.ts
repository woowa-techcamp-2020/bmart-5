import { Request, Response, NextFunction } from 'express';
import CustomError from './custom-error';
import HttpStatus from 'http-status';
import logger from '../../config/logger';

const errorHandler = (
  error: CustomError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong';
  logger.error(error.stack);
  response.status(status).send({
    status,
    message,
  });
};

export default errorHandler;
