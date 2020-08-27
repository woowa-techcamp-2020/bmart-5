import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import HttpStatus from 'http-status';
import { Category } from '../models';
import { JsonResponse } from '../modules/utils';
import CustomError from '../modules/exception/custom-error';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  try {
    const category = await Category.create(body);
    res
      .status(HttpStatus.CREATED)
      .json(JsonResponse(HttpStatus.CREATED, `category created: ${category.name}`, category));
  } catch (err) {
    next(err);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);

  try {
    const category = await Category.findAll({
      attributes: ['id', 'name', 'orderWeight'],
      where: {
        [Op.and]: [
          { id: paramId },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
      order: [['orderWeight', 'ASC']],
    });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `find category by Id: ${paramId}`, category));
  } catch (err) {
    next(err);
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramLimit = parseInt(params.limit);

  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'orderWeight'],
      where: {
        deletedAt: {
          [Op.is]: null,
        },
      },
      limit: paramLimit,
      order: [['orderWeight', 'ASC']],
    });
    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(HttpStatus.OK, `find category list with limit: ${paramLimit}`, categories)
      );
  } catch (err) {
    next(err);
  }
};

const softDelete = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const category = await Category.findByPk(paramId);
    if (!category)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no category with id ${paramId}`, '');
    category.update({ deletedAt: now });

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `category soft deleted: ${paramId}`, { completed: true }));
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { body, params } = req;
  const paramId = parseInt(params.id);

  try {
    const category = await Category.findByPk(paramId);
    if (!category)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no category with id ${paramId}`, '');
    category.update(body);

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `category updated: ${paramId}`, { completed: true }));
  } catch (err) {
    next(err);
  }
};

const bulkCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  try {
    const categories = await Category.bulkCreate(body);
    res
      .status(HttpStatus.CREATED)
      .json(
        JsonResponse(
          HttpStatus.CREATED,
          `categories bulk inserted: ${categories.length}`,
          categories
        )
      );
  } catch (err) {
    next(err);
  }
};

export default {
  create,
  findById,
  findAll,
  softDelete,
  update,
  bulkCreate,
};
