import { useContext, useEffect } from 'react';
import User from '../../context/Provider.jsx';
import './orden.css';
import axios from 'axios';
import { linkBack } from '../../helpers/global.js';

export const Orden = () => {
	useEffect(() => {
		const userSave = JSON.parse(localStorage.getItem('User'));
		if (userSave) {
			setUser(userSave);
		}
	}, []);
	const { user, setUser, cart } = useContext(User);

	let total = 0;
	cart.map((res) => {
		const subPrice = res.price * res.amount;
		total = subPrice + total;
	});

	const obj = {
		userID: user.user._id,
		total,
		products: cart,
		direction: user.user.direction,
	};

	const pay = async () => {
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
				<h3>Total: {total}</h3>
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
