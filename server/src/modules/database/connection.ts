import { databaseConfig } from '../../config/consts';

const connection = {
  ...databaseConfig,
  dialect: 'mysql',
  max: 5,
  min: 0,
  idle: 10000,
};

export { connection };
