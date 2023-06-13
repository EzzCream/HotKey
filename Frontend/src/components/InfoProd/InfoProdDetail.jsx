import { Link } from 'react-router-dom';
import './infoProdDetail.css';
import { useContext, useState } from 'react';
import User from '../../context/Provider.jsx';
import { linkBack } from '../../helpers/global.js';
import axios from 'axios';

export const InfoProdDetail = ({
	name,
	price,
	category,
	img,
	brand,
	description,
	rating,
	_id,
}) => {
	const { user } = useContext(User);
	const stock = 20;
	const [amountC, setAmountC] = useState(1);
	const [val, setVal] = useState(0);

	const setMore = () => {
		if (amountC < stock) {
			setAmountC(amountC + 1);
		}
	};
	const setLess = () => {
		if (amountC > 1) {
			setAmountC(amountC - 1);
		}
	};

	const add = async (e) => {
		e.preventDefault();
		await axios.post(
			linkBack + '/api/cart/' + user.user._id,
			{
				id: _id,
				name,
				price,
				description,
				amount: amountC,
				img,
			},
			{
				headers: {
					Authorization: user.token,
				},
			},
		);
		setVal(1);
	};

	console.log(user.token);

	return (
		<div className="container-info">
			<div className="imgProdCont m-3">
				<img className="imgProd" src={img} alt={name} />
			</div>
			<div className="infoProd m-3">
				<h1 className="display-3">{name}</h1>
				<h3>Categoria: {category}</h3>
				<h3>Marca: {brand}</h3>
				<p>{description}</p>
				<p>$ {price}</p>
				<p>Aun quedan: {stock}</p>
				<p>Rating: {rating}</p>
				{user.length === 0 ? (
					<Link to="/login/signin" className="cta mb-2">
						<span className="hover-underline-animation">
							Iniciar Sesion
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
					</Link>
				) : (
					<div>
						{val > 0 ? (
							<div>
								<Link to="/Cart" className="cta mb-2">
									<span className="hover-underline-animation">
										Proceder a pagar
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
								</Link>
							</div>
						) : (
							<div>
								<div>
									Cantidad: {amountC}
									<button
										className="control"
										onClick={setMore}
									>
										+
									</button>
									<button
										className="control"
										onClick={setLess}
									>
										-
									</button>
								</div>
								<button className="cta mb-2" onClick={add}>
									<span className="hover-underline-animation">
										Agregar al carrito
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
						)}
					</div>
				)}
			</div>
		</div>
	);
};
