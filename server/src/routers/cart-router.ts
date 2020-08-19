import { Router } from 'express';
import { CartController } from '../controllers';

const router = Router();

router.post('/', CartController.insertCartProduct);

router.get('/user/:id', CartController.findByUserId);
router.get('/cart/:id', CartController.findByCartId);

router.patch('/:id', CartController.updateCount);
router.patch('/purchase/:id', CartController.purchase);

router.delete('/product/:id', CartController.softDeleteCartProduct);
router.delete('/:id', CartController.softDeleteCart);

export default router;
