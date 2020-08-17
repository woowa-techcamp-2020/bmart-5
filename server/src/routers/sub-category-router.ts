import { Router } from 'express';
import { SubCategoryController } from '../controllers';

const router = Router();

router.post('/', SubCategoryController.create);
router.get('/:limit', SubCategoryController.findAll);
router.get('/cat/:categoryId/:limit', SubCategoryController.findByCategoryId);
router.put('/:id', SubCategoryController.update);
router.delete('/:id', SubCategoryController.softDelete);

export default router;
