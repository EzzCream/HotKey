import request from 'request';
import dotenv from 'dotenv';
import { OrdenModel } from '../model/orden.model.js';
import { CartModels } from '../model/cart.model.js';

dotenv.config();

const PayPal_API = 'https://api-m.sandbox.paypal.com';
const auth = {
	user: process.env.CLIENT,
	pass: process.env.SECRET,
};

export async function createPayment(req, res) {
	const { total } = req.body;
	const { id } = req.params;
	const cart = await CartModels.findOne({ userID: id });
	cart.products = [];
	await CartModels.updateOne({ userID: id }, cart);
	const body = {
		intent: 'CAPTURE',
		purchase_units: [
			{
				amount: {
					currency_code: 'MXN',
					value: total,
				},
			},
		],
		application_context: {
			brand_name: 'PhantomSneakers',
			landing_page: 'NO_PREFERENCE',
			user_action: 'PAY_NOW',
			return_url: 'http://localhost:8080/api/orden/execute-payment',
			cancel_url: 'http://localhost:8080/api/orden/cancel-payment',
		},
	};

	await OrdenModel.create(req.body);

	request.post(
		`${PayPal_API}/v2/checkout/orders`,
		{
			auth,
			body,
			json: true,
		},
		(err, response) => {
			res.status(200).json({ data: response.body });
		},
	);
}

export async function executePayment(req, res) {
	const token = req.query.token;
	request.post(
		`${PayPal_API}/v2/checkout/orders/${token}/capture`,
		{
			auth,
			body: {},
			json: true,
		},
		(err, response) => {
			res.status(200).send(
				'<script type="text/javascript">window.location.href = "http://127.0.0.1:5173/Final";</script>',
			);
		},
	);
}
