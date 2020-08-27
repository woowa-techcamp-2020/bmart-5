import { Router } from 'express';
import passport from 'passport';
import { LikeController } from '../controllers';

const router = Router();

router.post('/', passport.authenticate('jwt'), LikeController.updateOrCreate);
router.get('/', passport.authenticate('jwt'), LikeController.findByUserId);
router.delete('/:productId', passport.authenticate('jwt'), LikeController.softDeleteLike);

export default router;
