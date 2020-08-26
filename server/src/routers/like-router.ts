import { Router } from 'express';
import { LikeController } from '../controllers';

const router = Router();

router.post('/', LikeController.updateOrCreate);
router.get('/:id', LikeController.findByUserId);
router.delete('/:userId/:productId', LikeController.softDeleteLike);

export default router;
