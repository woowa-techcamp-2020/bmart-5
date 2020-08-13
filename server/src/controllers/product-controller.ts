import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models';
import { JsonResponse } from '../modules/utils';
import HttpStatus from 'http-status';

/**
 * TODO
 * 중복된 코드가 많아 리펙토링이 가능합니다.
 * 그대로 둬서 네이밍에 가치를 둬야하는지 고민해봐야합니다.
 */

const findLatest = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramLimit = parseInt(params.limit);

  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'price', 'content', 'discount', 'subCategoryId', 'outOfStockAt'],
      where: {
        deletedAt: {
          [Op.is]: null,
        },
      },
      limit: paramLimit,
      order: [['createdAt', 'DESC']],
    });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `find product list with limit: ${paramLimit}`, products));
  } catch (err) {
    next(err);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);

  try {
    const product = await Product.findByPk(paramId, {
      attributes: ['id', 'name', 'price', 'content', 'discount', 'subCategoryId', 'outOfStockAt'],
    });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `find product by id: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

const findBySubCategoryId = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramSubCategoryId = params.subCategoryId;
  const paramLimit = parseInt(params.limit);

  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'price', 'content', 'discount', 'subCategoryId', 'outOfStockAt'],
      where: {
        [Op.and]: [
          { subCategoryId: paramSubCategoryId },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
      limit: paramLimit,
      order: [['createdAt', 'DESC']],
    });
    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(
          HttpStatus.OK,
          `find products by sub-category: ${paramSubCategoryId}`,
          products
        )
      );
  } catch (err) {
    next(err);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  try {
    const product = await Product.create(body);
    res
      .status(HttpStatus.CREATED)
      .json(JsonResponse(HttpStatus.CREATED, `product created: ${product.name}`, product));
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { body, params } = req;
  const paramId = parseInt(params.id);

  try {
    const product = await Product.update(body, { where: { id: paramId } });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `product updated: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

const softDelete = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const product = await Product.update({ deletedAt: now }, { where: { id: paramId } });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `product soft deleted: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

const setOutOfStock = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const product = await Product.update({ outOfStockAt: now }, { where: { id: paramId } });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `product out of stock: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

export default {
  findLatest,
  findById,
  findBySubCategoryId,
  create,
  update,
  softDelete,
  setOutOfStock,
};
