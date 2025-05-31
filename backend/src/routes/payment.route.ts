import { Router } from 'express';
import * as paymentController from '../controllers/payment.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, paymentController.createPayment);
router.get('/user/:userId', authenticate, paymentController.getUserPayments);

export default router;
