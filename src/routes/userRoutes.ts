import { Router } from 'express';
import * as userController from '../controllers/userController';

const router: Router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:userId', userController.getUserById);

export default router;
