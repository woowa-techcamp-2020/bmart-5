import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import logger from '@config/logger';
import { Request } from 'express';
import { jwtSecret, googleCredentials } from '@config/constants';

const jwtFromRequest = (req: Request) => {
  let token: string | null = null;
  if (req && req.headers.authorization) {
    token = req.headers.authorization;
    token = token.replace('Basic ', '');
  }
  return token;
};
const secretOrKey = jwtSecret;
const opts = { jwtFromRequest, secretOrKey };

const jwt = new JwtStrategy(opts, (jwt_payload: any, done) => {
  logger.info('JWT BASED AUTH GETTING CALLED');
  if (jwt_payload.data) {
    // check user valid
    return done(null, jwt_payload.data);
  } else {
    return done(null, false);
  }
});

const google = new GoogleStrategy(
  {
    clientID: googleCredentials.clientId,
    clientSecret: googleCredentials.clientSecret,
    callbackURL: googleCredentials.callback,
  },
  (accessToken, refreshToken, profile, done: Function) => {
    console.info('GOOGLE BASED OAUTH VALIDATION GETTING CALLED');
    return done(null, profile);
  }
);

passport.serializeUser((user, done) => {
  logger.debug('serializeUser');
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  logger.debug('deserializeUser');
  done(null, obj);
});

export default { jwt, google };
