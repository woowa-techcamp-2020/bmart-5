import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { LoginProvider, User, Cart } from '../models';
import { jwtSecret, tokenExpiresIn } from '../config/constants';
import { JsonResponse } from '../modules/utils';
import CustomError from '../modules/exception/custom-error';

const emailLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const emailUser = await LoginProvider.findOne({
      attributes: ['id', 'email', 'provider', 'password', 'userId'],
      include: { model: User, as: 'user' },
      where: {
        email: body.email,
        provider: 'email',
      },
    });

    if (!emailUser)
      throw new CustomError(HttpStatus.ACCEPTED, `no email user with ${body.email}`, '');
    if (emailUser.password !== crypto.createHash('sha256').update(body.password).digest('base64'))
      throw new CustomError(HttpStatus.ACCEPTED, 'not matched password', '');

    const token = jwt.sign(
      {
        data: emailUser.getDataValue('user'),
      },
      jwtSecret,
      { expiresIn: tokenExpiresIn }
    );

    res
      .cookie('authorization', token, {
        // 30 분 뒤 만료
        expires: new Date(Date.now() + 30 * 60 * 1000),
      })
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `Log in success ${req.body.email}`, { completed: true }));
  } catch (err) {
    next(err);
  }
};

const emailSignUp = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  body.password = crypto.createHash('sha256').update(body.password).digest('base64');
  try {
    const existsUser = await LoginProvider.findOne({
      attributes: ['id', 'email', 'provider', 'password', 'userId'],
      where: {
        email: body.email,
        provider: 'email',
      },
    });
    if (existsUser) {
      throw new CustomError(HttpStatus.BAD_REQUEST, `already exists email ${body.email}`, '');
    } else {
      const response = await User.findOrCreate({
        attributes: ['id', 'username', 'email'],
        where: {
          email: body.email,
        },
        defaults: { username: body.username },
      });

      const user = response[0];
      const isCreated = response[1];

      if (isCreated) Cart.create({ userId: user.id });
      console.info(`user ${isCreated ? 'created' : 'found'}: ${user.id}`);

      const emailUserData = {
        id: user.id.toString(),
        email: body.email,
        password: body.password,
        provider: 'email',
        userId: user.id,
      };
      const emailUser = await LoginProvider.create(emailUserData);

      const token = jwt.sign(
        {
          data: user,
        },
        jwtSecret,
        { expiresIn: tokenExpiresIn }
      );
      res
        .cookie('authorization', token, {
          // 30 분 뒤 만료
          expires: new Date(Date.now() + 30 * 60 * 1000),
        })
        .status(HttpStatus.CREATED)
        .json(
          JsonResponse(HttpStatus.CREATED, `created user success email(${body.email})`, emailUser)
        );
    }
  } catch (err) {
    next(err);
  }
};

const googleRedirect = async (req: Request, res: Response, next: NextFunction) => {
  const googleUser: any = req.user;

  const response = await User.findOrCreate({
    attributes: ['id', 'username', 'email'],
    where: {
      email: googleUser._json.email,
    },
    defaults: { username: googleUser.displayName },
  });

  const user = response[0];
  const isCreated = response[1];

  if (isCreated) Cart.create({ userId: user.id });
  console.info(`user ${isCreated ? 'created' : 'found'}: ${user.id}`);

  await LoginProvider.findOrCreate({
    attributes: ['id', 'username', 'email'],
    where: {
      email: googleUser._json.email,
      provider: 'google',
    },
    defaults: { userId: user.id },
  });

  const token = jwt.sign(
    {
      data: user,
    },
    jwtSecret,
    { expiresIn: tokenExpiresIn }
  );

  res.cookie('authorization', token, {
    // 30 분 뒤 만료
    expires: new Date(Date.now() + 30 * 60 * 1000),
  });

  res.redirect('/');
};

export default {
  emailSignUp,
  emailLogin,
  googleRedirect,
};
