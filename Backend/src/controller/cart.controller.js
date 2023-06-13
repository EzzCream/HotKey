import { logger } from '../config/logs.config.js';
import { CartModels } from '../model/cart.model.js';

export async function addToCart(req, res) {
	try {
		const products = req.body;
		const { id } = req.params;
		const cart = await CartModels.findOne({ userID: id });
		if (!cart) {
			const cart = {
				userID: id,
				products,
			};
			await CartModels.create(cart);
			res.status(200).send('Cart created and product add');
		} else {
			const prod = cart.products;
			const valProd = prod.find((prod) => prod.id === products.id);
			if (valProd) {
				const newProd = {
					...valProd,
					amount: products.amount + valProd.amount,
				};
				const newProduct = prod.filter(
					(prod) => prod.id != products.id,
				);
				newProduct.push(newProd);
				await CartModels.updateOne(
					{ userID: id },
					{ products: newProduct },
				);
			} else {
				prod.push(products);
				await CartModels.updateOne({ userID: id }, { products: prod });
			}
			res.status(200).send('Product add');
		}
	} catch (error) {
		logger.error(error);
	}
}

export async function getCart(req, res) {
	try {
		const { id } = req.params;
		const cart = await CartModels.findOne({ userID: id });
		res.status(200).json(cart);
	} catch (error) {
		logger.error(error);
	}
}

export async function deleteFromCart(req, res) {
	try {
		const { id, idProd } = req.params;
		const cart = await CartModels.findOne({ userID: id });
		const arr = cart.products;
		const products = arr.filter((prod) => prod.id != idProd);
		cart.products = products;
		await CartModels.updateOne({ userID: id }, { cart });
		res.status(200).json('holi');
	} catch (error) {
		logger.error(error);
	}
}
