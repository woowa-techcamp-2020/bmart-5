import { Request, Response, NextFunction } from 'express';
import CustomError from './custom-error';
import HttpStatus from 'http-status';
import logger from '../../config/logger';
import { JsonResponse } from '../utils';

const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong';
  logger.error(error.stack);
  res.status(status).json(JsonResponse(status, message, { error: error.stack }));
};

export default errorHandler;
