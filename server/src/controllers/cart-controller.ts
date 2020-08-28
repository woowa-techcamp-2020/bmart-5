import { Request, Response, NextFunction } from 'express';
import { Op } from 'sequelize';
import HttpStatus from 'http-status';
import { Cart, CartProduct, Product } from '../models';
import { JsonResponse } from '../modules/utils';
import CustomError from '../modules/exception/custom-error';
import { TokenUser } from './auth-controller';

//추후에 토큰의 유저 정보를 이용한 api로 수정 필요

const insertCartProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const user = req.user as TokenUser;

  try {
    const cart = await Cart.findOne({
      attributes: ['id'],
      where: {
        [Op.and]: [
          { userId: user.id },
          {
            purchasedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
    });

    if (!cart)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no cart with userId: ${body.userId}`, '');

    body.cartId = cart.id;
    const cartProduct = await CartProduct.create(body);

    res
      .status(HttpStatus.CREATED)
      .json(
        JsonResponse(HttpStatus.CREATED, `cart product created: ${cartProduct.id}`, cartProduct)
      );
  } catch (err) {
    next(err);
  }
};

const findByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as TokenUser;

  try {
    const cart = await Cart.findOne({
      attributes: ['id'],
      where: {
        [Op.and]: [
          { userId: user.id },
          {
            purchasedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
    });
    if (!cart) throw new CustomError(HttpStatus.BAD_REQUEST, `no cart with id ${user.id}`, '');

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `find cart by userId(${user.id})`, cart));
  } catch (err) {
    next(err);
  }
};

const findByCartId = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = params.id;

  try {
    const cartProducts = await CartProduct.findAll({
      attributes: ['id', 'productId', 'cartId', 'count'],
      include: { model: Product, as: 'product' },
      where: {
        [Op.and]: [
          { cartId: paramId },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
        ],
      },
    });

    res
      .status(HttpStatus.OK)
      .json(
        JsonResponse(HttpStatus.OK, `cart products count: ${cartProducts.length}`, cartProducts)
      );
  } catch (err) {
    next(err);
  }
};

const updateCount = async (req: Request, res: Response, next: NextFunction) => {
  const { params, body } = req;
  const paramId = parseInt(params.id);
  const count = body.count;

  try {
    const cartProduct = await CartProduct.findByPk(paramId);
    if (!cartProduct)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no cart product with id ${paramId}`, '');
    cartProduct.update({ count: count });

    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `cart product count updated: ${count}`, {
        completed: true,
      })
    );
  } catch (err) {
    next(err);
  }
};

const purchase = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    let cart = await Cart.findByPk(paramId);
    if (!cart) throw new CustomError(HttpStatus.BAD_REQUEST, `no cart with id ${paramId}`, '');
    cart.update({ purchasedAt: now });
    const newCart = await Cart.create({ userId: cart.getDataValue('userId') });

    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `cart purchased: ${paramId}`, {
        cartId: newCart.id,
      })
    );
  } catch (err) {
    next(err);
  }
};

const softDeleteCartProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const cartProduct = await CartProduct.findByPk(paramId);
    if (!cartProduct)
      throw new CustomError(HttpStatus.BAD_REQUEST, `no cart product with id ${paramId}`, '');
    cartProduct.update({ deletedAt: now });

    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `cart product soft deleted: ${paramId}`, {
        completed: true,
      })
    );
  } catch (err) {
    next(err);
  }
};

const softDeleteCart = async (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;
  const paramId = parseInt(params.id);
  const now = new Date();

  try {
    const cart = await Cart.findByPk(paramId);
    if (!cart) throw new CustomError(HttpStatus.BAD_REQUEST, `no cart with id ${paramId}`, '');
    cart.update({ deletedAt: now });

    res.status(HttpStatus.OK).json(
      JsonResponse(HttpStatus.OK, `cart soft deleted: ${paramId}`, {
        completed: true,
      })
    );
  } catch (err) {
    next(err);
  }
};

const findAllPurchase = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as TokenUser;
  try {
    const cart = await Cart.findAll({
      attributes: ['id', 'purchasedAt'],
      include: [
        {
          model: CartProduct,
          as: 'cartProducts',
          attributes: ['id', 'count', 'createdAt'],
          where: {
            deletedAt: {
              [Op.is]: null,
            },
          },
          include: [
            {
              model: Product,
              as: 'product',
              attributes: ['id', 'name', 'price', 'discount', 'createdAt'],
            },
          ],
        },
      ],
      where: {
        [Op.and]: [
          { userId: user.id },
          {
            deletedAt: {
              [Op.is]: null,
            },
          },
          {
            purchasedAt: {
              [Op.not]: null,
            },
          },
        ],
      },
    });

    res
      .status(HttpStatus.OK)
      .json(JsonResponse(HttpStatus.OK, `found all purchase products: ${cart.length}`, cart));
  } catch (err) {
    next(err);
  }
};

export default {
  insertCartProduct,
  findByUserId,
  findByCartId,
  updateCount,
  purchase,
  softDeleteCartProduct,
  softDeleteCart,
  findAllPurchase,
};
