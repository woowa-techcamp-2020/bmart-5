import { Router } from 'express';
import { CartController } from '../controllers';
import passport from 'passport';

const router = Router();

router.post('/', passport.authenticate('jwt'), CartController.insertCartProduct);

router.get('/purchase/all', passport.authenticate('jwt'), CartController.findAllPurchase);
router.get('/user/id', passport.authenticate('jwt'), CartController.findByUserId);
router.get('/:id', CartController.findByCartId);

router.patch('/:id', CartController.updateCount);
router.patch('/purchase/:id', CartController.purchase);

router.delete('/product/:id', CartController.softDeleteCartProduct);
router.delete('/:id', CartController.softDeleteCart);

export default router;
