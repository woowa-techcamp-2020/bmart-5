import { databaseConfig } from '../../config/constants';

const connection = {
  ...databaseConfig,
  dialect: 'mysql',
  max: 5,
  min: 0,
  idle: 10000,
};

export { connection };
