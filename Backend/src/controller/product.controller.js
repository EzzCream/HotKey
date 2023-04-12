import { logger } from '../config/logs.config.js';
import { ProductModel } from '../model/product.model.js';

export async function addProduct(req, res) {
	try {
		if (req.body.name) {
			await ProductModel.create(req.body);
			res.status(201).send('Product add');
		} else {
			res.status(204).send('No product');
		}
	} catch (error) {
		logger.error(error);
	}
}

export async function getProduct(req, res) {
	try {
		const { id } = req.params;
		const product = await ProductModel.findById(id);
		console.log(product);
		if (product === null) {
			res.status(404).send('Product not found');
		} else {
			res.status(200).json(product);
		}
	} catch (error) {
		logger.error(error);
	}
}

export async function getAllProducts(req, res) {
	try {
		const products = await ProductModel.find();
		res.status(200).json(products);
	} catch (error) {
		logger.error(error);
	}
}
