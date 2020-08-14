import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { SubCategory } from '../models';
import { JsonResponse } from '../modules/utils';
import HttpStatus from 'http-status';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  try {
    const subCategory = await SubCategory.create(body);
    res
      .status(HttpStatus.CREATED)
      .json(
        JsonResponse(HttpStatus.CREATED, `sub category created: ${subCategory.name}`, subCategory)
      );
  } catch (err) {
    next(err);
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramLimit = parseInt(params.limit);

  try {
    const subCategories = await SubCategory.findAll({
      attributes: ['id', 'name', 'orderWeight', 'categoryId'],
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
        JsonResponse(
          HttpStatus.OK,
          `find sub category list with limit: ${paramLimit}`,
          subCategories
        )
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
    const subCategory = await SubCategory.update({ deletedAt: now }, { where: { id: paramId } });
    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `sub category soft deleted: ${paramId}`, {
        completed: subCategory[0],
      })
    );
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { body, params } = req;
  const paramId = parseInt(params.id);

  try {
    const subCategory = await SubCategory.update(body, { where: { id: paramId } });
    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `sub category updated: ${paramId}`, {
        completed: subCategory[0],
      })
    );
  } catch (err) {
    next(err);
  }
};

const findByCategoryId = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramCategoryId = parseInt(params.categoryId);
  const paramLimit = parseInt(params.limit);

  try {
    const subCategories = await SubCategory.findAll({
      attributes: ['id', 'name', 'orderWeight', 'categoryId'],
      where: {
        [Op.and]: [
          { categoryId: paramCategoryId },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
      limit: paramLimit,
      order: [['orderWeight', 'ASC']],
    });
    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(
          HttpStatus.OK,
          `find sub category list by categoryId: ${paramCategoryId}`,
          subCategories
        )
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
  findByCategoryId,
};
