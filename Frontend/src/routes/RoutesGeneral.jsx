import { Route, Routes } from 'react-router-dom';
import { RoutesSign } from './RoutesSign.jsx';
import { RoutesProducts } from './RoutesProducts.jsx';
import User from '../context/Provider.jsx';
import { useContext, useEffect } from 'react';

export const RoutesGeneral = () => {
	const { user, setUser } = useContext(User);

	useEffect(() => {
		const userSave = JSON.parse(localStorage.getItem('User'));
		if (userSave) {
			setUser(userSave);
		}
	}, []);

	return (
		<Routes>
			<Route path="login/*" element={<RoutesSign />} />
			<Route path="*" element={<RoutesProducts />} />
		</Routes>
	);
};
