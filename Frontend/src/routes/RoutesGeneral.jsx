import { Route, Routes } from 'react-router-dom';
import { RoutesSign } from './RoutesSign.jsx';
import { RoutesProducts } from './RoutesProducts.jsx';

export const RoutesGeneral = () => {
	return (
		<Routes>
			<Route path="login/*" element={<RoutesSign />} />
			<Route path="*" element={<RoutesProducts />} />
		</Routes>
	);
};
