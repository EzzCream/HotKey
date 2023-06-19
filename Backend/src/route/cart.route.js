import { Router } from 'express';
import * as Cart from '../controller/cart.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = Router();

router.post('/:id', verifyToken, Cart.addToCart);

router.get('/:id', verifyToken, Cart.getCart);

router.delete('/:id/:idProd', verifyToken, Cart.deleteFromCart);

export default router;
