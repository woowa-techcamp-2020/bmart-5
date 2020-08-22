import http from 'http';
import { env, port, migrate } from '@config/constants';
import logger from '@config/logger';
import app from '@config/express';
import { dbService } from './modules/database';

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
    dbService(migrate).start();
  } catch (e) {
    stopServer(server, `db is failed to start: ${e}`);
  }
};

runServer();
