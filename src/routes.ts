import { loggerMiddleware, authenticated, hasPermission, authorized } from './middlewares/auth'
import { Router } from 'express';
const router = Router();

import { UserController } from './controllers/user';

const userController = new UserController();

router.post('/user', userController.sign);
router.post('/auth', authenticated, userController.auth);

router.get('/user', loggerMiddleware, authorized("ADMIN"), userController.list);
router.get('/user/:id', loggerMiddleware, hasPermission, userController.getById);
router.put('/user/:id', loggerMiddleware, hasPermission, userController.update);
router.delete('/user/:id', loggerMiddleware, hasPermission, userController.delete);

export default router;