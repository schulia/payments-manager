import { Router } from 'express';
import * as userController from '../controllers/users';

const router = Router();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

export default router;