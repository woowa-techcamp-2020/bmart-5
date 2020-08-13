import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Category } from '../models';
import { JsonResponse } from '../modules/utils';
import HttpStatus from 'http-status';

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
    const category = await Category.update({ deletedAt: now }, { where: { id: paramId } });
    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(HttpStatus.OK, `category soft deleted: ${paramId}`, { completed: category[0] })
      );
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { body, params } = req;
  const paramId = parseInt(params.id);

  try {
    const category = await Category.update(body, { where: { id: paramId } });
    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(HttpStatus.OK, `category updated: ${paramId}`, { completed: category[0] })
      );
  } catch (err) {
    next(err);
  }
};

export default {
  create,
  findAll,
  softDelete,
  update,
};
