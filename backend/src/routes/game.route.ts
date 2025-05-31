import { Router } from 'express';
import * as gameController from '../controllers/game.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authenticate, gameController.getGames);
router.get('/:id', authenticate, gameController.getGame);
router.post('/', authenticate, gameController.createGame);
router.put('/:id', authenticate, gameController.updateGame);
router.delete('/:id', authenticate, gameController.deleteGame);

export default router;
