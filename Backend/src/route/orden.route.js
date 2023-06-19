import { Router } from 'express';
import * as Orden from '../controller/orden.controller.js';

const router = Router();

router.post('/create-payment/:id', Orden.createPayment);

router.get('/execute-payment', Orden.executePayment);

export default router;
