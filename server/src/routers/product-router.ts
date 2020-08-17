import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

router.post('/', ProductController.create);
router.get('/:id', ProductController.findById);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.softDelete);
router.patch('/out/:id', ProductController.setOutOfStock);
router.get('/latest/:limit', ProductController.findLatest);
router.get('/sub/:subCategoryId/:limit', ProductController.findBySubCategoryId);

export default router;
