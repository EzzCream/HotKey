import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import User from '../../context/Provider.jsx';
import { linkBack } from '../../helpers/global.js';
import { CartDetail } from './CartDetail.jsx';
import './cart.css';

export const Cart = () => {
	const { user } = useContext(User);
	const [cart, setCart] = useState([]);

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
	}, []);

	return (
		<div className="cartCont">
			{cart.map((prod) => (
				<CartDetail key={prod.id} {...prod} />
			))}
		</div>
	);
};
