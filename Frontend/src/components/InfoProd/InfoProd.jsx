import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { linkBack } from '../../helpers/global.js';
import axios from 'axios';
import { InfoProdDetail } from './InfoProdDetail.jsx';
import { Loader } from '../Loader/Loader.jsx';

export const InfoProd = () => {
	const { productId } = useParams();
	const [prod, setProd] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const callApi = async () => {
			const { data } = await axios.get(
				linkBack + '/api/product/get/' + productId,
			);
			setProd(data);
			setLoading(0);
		};
		callApi();
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			<InfoProdDetail {...prod} />
		</div>
	);
};
