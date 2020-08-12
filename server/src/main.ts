import http from 'http';
import { env, port, databaseConfig } from './config/consts';
import logger from './config/logger';
import app from './config/express';
// import { mysql } from './modules/database/mysql';

const stopServer = async (server: http.Server, signal?: string) => {
  logger.info(`Stopping server with signal: ${signal}`);
  await server.close();
  process.exit();
};

const runServer = async () => {
  const server = app.listen(port, () => {
    logger.info(`server started on port ${port} (${env})`);
  });
  try {
    // await mysql.ping();
    logger.info(`db connected ${databaseConfig.host} (${databaseConfig.database})`);
  } catch (e) {
    logger.error(e);
    stopServer(server, 'db is failed to start');
  }
};

runServer()
  .then(() => {
    logger.info('run succesfully');
  })
  .catch((ex: Error) => {
    logger.error('Unable run: ', ex);
  });
