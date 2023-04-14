import { Route, Routes } from 'react-router-dom';
import { RoutesSign } from './RoutesSign.jsx';

export const RoutesGeneral = () => {
	return (
		<Routes>
			<Route path="/*" element={<RoutesSign />} />
		</Routes>
	);
};
