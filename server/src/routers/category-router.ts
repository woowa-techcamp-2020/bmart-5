import { Router } from 'express';
import { CategoryController } from '../controllers';

const router = Router();

router.post('/', CategoryController.create);
router.get('/:limit', CategoryController.findAll);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.softDelete);
router.post('/bulkcreate', CategoryController.bulkCreate);

export default router;
