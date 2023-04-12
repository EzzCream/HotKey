import { Router } from 'express';
import * as Product from '../controller/product.controller.js';

const router = Router();

router.post('/', Product.addProduct);

router.get('/get/:id', Product.getProduct);

router.get('/getAll', Product.getAllProducts);

export default router;
