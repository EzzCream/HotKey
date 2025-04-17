import { useContext, useEffect, useState } from 'react';
import User from '../../context/Provider.jsx';
import './orden.css';
import axios from 'axios';
import { linkBack } from '../../helpers/global.js';

export const Orden = () => {
	const [newPrice, setNewPrice] = useState(0);
	// const [total, setTotal] = useState(0);

	useEffect(() => {
		const userSave = JSON.parse(localStorage.getItem('User'));
		if (userSave) {
			setUser(userSave);
		}
	}, []);
	const { user, setUser, cart } = useContext(User);

	useEffect(() => {
		const handleMessage = (event) => {
			if (event.data?.type === 'product-selected') {
				const selectedProduct = event.data.data;
				console.log(
					'Producto seleccionado desde iframe:',
					selectedProduct.price,
				);
				console.log(typeof selectedProduct.price);
				setNewPrice(parseInt(selectedProduct.price) + total);
				// total = total + selectedProduct.price;
			}
		};

		window.addEventListener('message', handleMessage);

		return () => window.removeEventListener('message', handleMessage);
	}, []);

	let total = 0;
	cart.map((res) => {
		const subPrice = res.price * res.amount;
		total = subPrice + total;
	});

	// setNewPrice(total);

	const obj = {
		userID: user.user._id,
		total,
		products: cart,
		direction: user.user.direction,
	};

	const pay = async () => {
		if (newPrice != 0) {
			obj.total = newPrice;
		}
		console.log(obj);
		const link = await axios.post(
			linkBack + '/api/orden/create-payment/' + user.user._id,
			obj,
		);
		const red = link.data.data.links;
		const { href } = red.find((res) => res.rel === 'approve');
		window.location.replace(href, '_blank');
	};

	return (
		<div key={1}>
			<div className="cont-orden" key={1}>
				<h1>Orden de compras</h1>
				<hr />
				<h3>Nombre: {user.user.name}</h3>
				<p>Direccion de envio: {user.user.direction}</p>
				{cart.map((res) => (
					<div key={res._id}>
						<p>
							Producto: {res.name} - {res.price}
						</p>
					</div>
				))}
				{newPrice != 0 ? (
					<div>
						<p>Insurance price: {newPrice - total}</p>

						<h3>Toal: {newPrice}</h3>
					</div>
				) : (
					<h3>Total: {total}</h3>
				)}
				<iframe
					src="https://backend-rommaana.onrender.com/api/offer/getOfferHtml/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0NDM0ODc1MH0.rvo3rVEZvvfyqqBdfZ9uvlbBOlMRKfE1rwhkaJ_F4Aw"
					width="100%"
					height="650"
					frameBorder="0"
					title="Rommaana"
				></iframe>
				<button class="payment-btn tabby-btn mb-2 mt-2">
					Pagar con Tabby
				</button>
				<button class="payment-btn tamara-btn mb-2">
					Pagar con Tamara
				</button>
				<button onClick={pay} className="cta mb-2">
					<span className="hover-underline-animation">
						Pagar con PayPal
					</span>
					<svg
						viewBox="0 0 46 16"
						height="10"
						width="30"
						xmlns="http://www.w3.org/2000/svg"
						id="arrow-horizontal"
					>
						<path
							transform="translate(30)"
							d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
							data-name="Path 10"
							id="Path_10"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};
