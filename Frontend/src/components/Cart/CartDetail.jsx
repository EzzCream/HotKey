import axios from 'axios';
import { linkBack } from '../../helpers/global.js';
import User from '../../context/Provider.jsx';
import { useContext } from 'react';

export const CartDetail = ({ id, name, img, price, amount }) => {
	const { user, setState } = useContext(User);

	const deleteFromCart = async () => {
		await axios.delete(linkBack + `/api/cart/${user.user._id}/${id}`, {
			headers: {
				Authorization: user.token,
			},
		});
		setState(1);
	};

	return (
		<div className="cardProd cartCard">
			<div className="image">
				<img className="imgCard" src={img} alt={name} />
			</div>
			<p className="title">{name}</p>
			<p className="price">Precio: {price}</p>
			<p className="price">Cantidad: {amount}</p>
			<button onClick={deleteFromCart} className="btn btn-primary">
				Eliminar
			</button>
		</div>
	);
};
