import { Route, Routes } from 'react-router-dom';
import { Products } from '../components/Product/Products.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';

export const RoutesProducts = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="products" element={<Products />} />
			</Routes>
		</>
	);
};
