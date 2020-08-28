import { Router } from 'express';
import { CategoryController } from '../controllers';

const router = Router();

router.post('/', CategoryController.create);
router.get('/all/:limit', CategoryController.findAll);
router.get('/:id', CategoryController.findById);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.softDelete);
router.post('/bulkcreate', CategoryController.bulkCreate);

export default router;
