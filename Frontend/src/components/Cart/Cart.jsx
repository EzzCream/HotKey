import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import User from '../../context/Provider.jsx';
import { linkBack } from '../../helpers/global.js';
import { CartDetail } from './CartDetail.jsx';
import './cart.css';
import { Link } from 'react-router-dom';

export const Cart = () => {
	const { user, setUser, state, setState, cart, setCart } = useContext(User);

	useEffect(() => {
		const call = async () => {
			const cartCall = await axios.get(
				linkBack + '/api/cart/' + user.user._id,
				{
					headers: {
						Authorization: user.token,
					},
				},
			);
			setCart(cartCall.data.products);
		};
		call();
		setState(0);
	}, [state]);

	return (
		<div className="cont-cart">
			<h2 className="display-1 font">Carrito</h2>
			<div className="cartCont">
				{cart.map((prod) => (
					<CartDetail key={prod.id} {...prod} />
				))}
			</div>
			<Link to="/Orden" className="cta mb-2">
				<span className="hover-underline-animation">Generar orden</span>
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
			</Link>
		</div>
	);
};
