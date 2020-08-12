import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { LoggerStream } from './logger';
import { logs } from './consts';
import errorHandler from '../modules/exception/error-handler';
import passport from 'passport';
import strategies from '../modules/auth/passport';
import router from '../routers';

const app = express();
app.use(morgan(logs, { stream: new LoggerStream() }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.use(passport.initialize());
passport.use(strategies.jwt);
passport.use(strategies.google);

app.use('/', router);
app.use(errorHandler);

export default app;
