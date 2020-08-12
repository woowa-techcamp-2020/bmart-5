import { Sequelize } from 'sequelize';
import { connection } from './connection';

const sequelize = new Sequelize(connection.database, connection.username, connection.password, {
  host: connection.host,
  dialect: 'mysql',
  pool: {
    max: connection.max,
    min: connection.min,
    idle: connection.idle,
  },
});

export default sequelize;
