import database from './database';
import logger from '../../config/logger';
import { databaseConfig, env } from '../../config/consts';

const dbService = (migrate: boolean) => {
  const authenticateDB = () => database.authenticate();

  const dropDB = () => database.drop();

  const syncDB = () => database.sync();

  const successfulDBStart = () =>
    logger.info(
      `connection to the database has been established successfully: ${databaseConfig.host}(${env})`
    );

  const errorDBStart = (err: Error) =>
    logger.info(`unable to connect to the database: ${databaseConfig.host}(${env})`);

  const startMigrateTrue = async () => {
    try {
      await syncDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
      throw err;
    }
  };

  const startMigrateFalse = async () => {
    try {
      await dropDB();
      await syncDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
      throw err;
    }
  };

  const start = async () => {
    try {
      await authenticateDB();
      if (migrate) {
        return startMigrateTrue();
      }
      return startMigrateFalse();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  return {
    start,
  };
};

export default dbService;
