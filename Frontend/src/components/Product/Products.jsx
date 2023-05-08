import { useEffect, useState } from 'react';
import './products.css';
import axios from 'axios';
import { linkBack } from '../../helpers/global.js';
import { ProductDetail } from './ProductDetail.jsx';
import { Loader } from '../Loader/Loader.jsx';

export const Products = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const callApi = async () => {
			const data = await axios.get(linkBack + '/api/product/getAll');
			setData(data.data);
			setLoading(0);
		};

		callApi();
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="prodCont">
			<h2 className="display-3">Productos</h2>
			<div className="contProd">
				{data.map((prod) => (
					<ProductDetail key={prod._id} {...prod} />
				))}
			</div>
		</div>
	);
};
