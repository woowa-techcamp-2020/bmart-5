import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Like, Product } from '../models';
import CustomError from 'src/modules/exception/custom-error';
import httpStatus from 'http-status';
import { JsonResponse } from 'src/modules/utils';
import { TokenUser } from './auth-controller';

const updateOrCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const user = req.user as TokenUser;

  try {
    const response = await Like.findOrCreate({
      attributes: ['id', 'userId', 'productId'],
      where: {
        userId: user.id,
        productId: body.productId,
      },
    });
    const like = response[0];
    const isCreated = response[1];
    if (!isCreated) {
      like.update({
        deletedAt: null,
      });
    }
    res
      .status(httpStatus.CREATED)
      .json(JsonResponse(httpStatus.CREATED, `like ${body.productId}`, like));
  } catch (err) {
    next(err);
  }
};

const findByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as TokenUser;

  try {
    const likes = await Like.findAll({
      attributes: ['id', 'userId', 'productId'],
      include: { model: Product, as: 'product' },
      where: {
        [Op.and]: [
          { userId: user.id },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
    });

    res
      .status(httpStatus.OK)
      .json(
        JsonResponse(httpStatus.OK, `find like products all by userId (${likes.length})`, likes)
      );
  } catch (err) {
    next(err);
  }
};

const softDeleteLike = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const user = req.user as TokenUser;
  const productId = params.productId;
  const now = new Date();

  try {
    const like = await Like.findOne({
      where: {
        userId: user.id,
        productId: productId,
      },
    });
    if (!like) throw new CustomError(httpStatus.BAD_REQUEST, `no like with id ${productId}`, '');
    like.update({ deletedAt: now });

    res
      .status(httpStatus.OK)
      .json(JsonResponse(httpStatus.OK, `like soft deleted: ${productId}`, { completed: true }));
  } catch (err) {
    next(err);
  }
};

export default { updateOrCreate, findByUserId, softDeleteLike };
