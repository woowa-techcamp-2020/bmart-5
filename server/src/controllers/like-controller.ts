import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Like, Product } from '../models';
import CustomError from 'src/modules/exception/custom-error';
import httpStatus from 'http-status';
import { JsonResponse } from 'src/modules/utils';

const updateOrCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const response = await Like.findOrCreate({
      attributes: ['id', 'userId', 'productId'],
      where: {
        userId: body.userId,
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
  const { params } = req;
  const paramId = params.id;

  try {
    const likes = await Like.findAll({
      attributes: ['id', 'userId', 'productId'],
      include: { model: Product, as: 'product' },
      where: {
        [Op.and]: [
          { userId: paramId },
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
  const userId = params.userId;
  const productId = params.productId;
  const now = new Date();

  try {
    const like = await Like.findOne({
      where: {
        userId: userId,
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
