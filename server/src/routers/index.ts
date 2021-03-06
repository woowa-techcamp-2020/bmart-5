import { Router } from 'express';
import CategoryRouter from './category-router';
import SubCategoryRouter from './sub-category-router';
import ProductRouter from './product-router';
import CartRouter from './cart-router';
import AuthRouter from './auth-router';
import LikeRouter from './like-router';

const router = Router();
router.use('/category', CategoryRouter);
router.use('/sub_category', SubCategoryRouter);
router.use('/product', ProductRouter);
router.use('/auth', AuthRouter);
router.use('/cart', CartRouter);
router.use('/like', LikeRouter);

export default router;
