import { Router } from 'express';
import CategoryRouter from './category-router';
import SubCategoryRouter from './sub-category-router';
import ProductRouter from './product-router';

const router = Router();
router.use('/category', CategoryRouter);
router.use('/sub_category', SubCategoryRouter);
router.use('/product', ProductRouter);

export default router;
