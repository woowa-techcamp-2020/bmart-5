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
const tokenExpiresIn = '30m';

const databaseConfig = {
  database: env === 'production' ? process.env.PORD_DB : process.env.DEV_DB,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
};

export { env, logs, port, jwtSecret, googleCredentials, tokenExpiresIn, databaseConfig };
