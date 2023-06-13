export const CartDetail = ({ name, img, price, amount }) => {
	return (
		<div className="cardProd cartCard">
			<div className="image">
				<img className="imgCard" src={img} alt={name} />
			</div>
			<p className="title">{name}</p>
			<p className="price">Precio: {price}</p>
			<p className="price">Cantidad: {amount}</p>
			<button className="btn btn-primary">Eliminar</button>
		</div>
	);
};
