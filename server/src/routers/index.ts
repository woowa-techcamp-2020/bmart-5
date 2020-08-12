import { Router } from 'express';
import { Product, Category, SubCategory } from '../controllers';

const router = Router();

router.get('/', () => {
  console.log(Product.length);
  console.log(Category.length);
  console.log(SubCategory.length);
});

export default router;
