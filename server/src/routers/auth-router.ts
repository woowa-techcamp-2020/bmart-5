import { Router } from 'express';
import passport from 'passport';
import { AuthController } from '../controllers';

const router = Router();

router.post('/email', AuthController.emailLogin);
router.post('/email/signup', AuthController.emailSignUp);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/redirect', passport.authenticate('google'), AuthController.googleRedirect);

export default router;
