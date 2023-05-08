import { Router } from 'express';
import * as User from '../controller/user.controller.js';

const router = Router();

router.post('/', User.signup);

router.post('/login', User.login);

export default router;
