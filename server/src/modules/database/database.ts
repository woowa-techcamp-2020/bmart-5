import { Sequelize } from 'sequelize';
import { connection } from './connection';
import logger from '@config/logger';
import { env } from '@config/constants';

const sequelize = new Sequelize(connection.database, connection.username, connection.password, {
  host: connection.host,
  dialect: 'mysql',
  pool: {
    max: connection.max,
    min: connection.min,
    idle: connection.idle,
  },
  logging: env !== 'production' ? (msg) => logger.debug(msg) : false,
});

export default sequelize;
