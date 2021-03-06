import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../shared/.env') });

const env = process.env.NODE_ENV || 'development';
const logs = env === 'production' ? 'combined' : 'dev';
const port = process.env.PORT || '3000';
const jwtSecret = process.env.JWT_SECRET || 'secret';
const googleCredentials = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  callback: process.env.GOOGLE_CALLBACK || '',
};
const tokenExpiresIn = '2h';

const databaseConfig = {
  database: env === 'production' ? (process.env.PROD_DB as string) : (process.env.DEV_DB as string),
  username: process.env.DB_USER as string,
  password: process.env.DB_PW as string,
  host: process.env.DB_HOST as string,
};

const migrate = process.env.MIGRATE === 'true' ? true : false;
const parserLimit = 5000000;
const apiEndPoint = process.env.API_END_POINT || 'http://localhost';

export {
  env,
  logs,
  port,
  jwtSecret,
  googleCredentials,
  tokenExpiresIn,
  databaseConfig,
  migrate,
  parserLimit,
  apiEndPoint,
};
