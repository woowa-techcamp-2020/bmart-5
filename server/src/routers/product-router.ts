import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

router.post('/', ProductController.create);
router.get('/:id', ProductController.findById);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.softDelete);
router.patch('/out/:id', ProductController.setOutOfStock);
router.patch('/click/:id', ProductController.incrementClicks);
router.get('/random/:limit', ProductController.findRandom);
router.get('/latest/:limit', ProductController.findLatest);
router.get('/highest-off/:limit', ProductController.findHighestOff);
router.get('/hottest/:limit', ProductController.findHottest);
router.get('/sub/:subCategoryId/:limit', ProductController.findBySubCategoryId);
router.post('/bulkcreate', ProductController.bulkCreate);

export default router;
