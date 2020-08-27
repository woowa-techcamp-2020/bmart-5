import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import HttpStatus from 'http-status';
import { Product } from '../models';
import { JsonResponse } from '../modules/utils';
import CustomError from '../modules/exception/custom-error';

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
      attributes: [
        'id',
        'name',
        'price',
        'content',
        'discount',
        'clicks',
        'imgUrl',
        'subCategoryId',
        'outOfStockAt',
      ],
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

const findHighestOff = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramLimit = parseInt(params.limit);

  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'price',
        'content',
        'discount',
        'clicks',
        'imgUrl',
        'subCategoryId',
        'outOfStockAt',
      ],
      where: {
        deletedAt: {
          [Op.is]: null,
        },
      },
      limit: paramLimit,
      order: [
        ['discount', 'DESC'],
        ['outOfStockAt', 'ASC'],
      ],
    });
    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `find product list with limit: ${paramLimit}`, products));
  } catch (err) {
    next(err);
  }
};

const findHottest = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramLimit = parseInt(params.limit);

  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'price',
        'content',
        'discount',
        'clicks',
        'imgUrl',
        'subCategoryId',
        'outOfStockAt',
      ],
      where: {
        deletedAt: {
          [Op.is]: null,
        },
      },
      limit: paramLimit,
      order: [
        ['clicks', 'DESC'],
        ['outOfStockAt', 'ASC'],
      ],
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
      attributes: [
        'id',
        'name',
        'price',
        'content',
        'discount',
        'clicks',
        'imgUrl',
        'subCategoryId',
        'outOfStockAt',
      ],
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
  const paramSubCategoryId = parseInt(params.subCategoryId);
  const paramLimit = parseInt(params.limit);

  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'price',
        'content',
        'discount',
        'clicks',
        'imgUrl',
        'subCategoryId',
        'outOfStockAt',
      ],
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
    const product = await Product.findByPk(paramId);
    if (!product)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no product with id ${paramId}`, '');
    product.update(body);

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
    const product = await Product.findByPk(paramId);
    if (!product)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no product with id ${paramId}`, '');
    product.update({ deletedAt: now });

    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `product soft deleted: ${paramId}`, {
        completed: product[0] ? true : false,
      })
    );
  } catch (err) {
    next(err);
  }
};

const setOutOfStock = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const product = await Product.findByPk(paramId);
    if (!product)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no product with id ${paramId}`, '');
    product.update({ outOfStockAt: now });

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `product out of stock: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

const incrementClicks = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);

  try {
    const product = await Product.findByPk(paramId);
    if (!product)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no product with id ${paramId}`, '');
    product.update({ clicks: product.clicks + 1 });

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `product's click count is updated: ${paramId}`, product));
  } catch (err) {
    next(err);
  }
};

const bulkCreate = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  try {
    const products = await Product.bulkCreate(body);
    res
      .status(HttpStatus.CREATED)
      .json(
        JsonResponse(HttpStatus.CREATED, `products bulk inserted: ${products.length}`, products)
      );
  } catch (err) {
    next(err);
  }
};

export default {
  findLatest,
  findHighestOff,
  findHottest,
  findById,
  findBySubCategoryId,
  create,
  update,
  softDelete,
  setOutOfStock,
  incrementClicks,
  bulkCreate,
};
