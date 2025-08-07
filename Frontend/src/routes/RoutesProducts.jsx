import { Route, Routes } from 'react-router-dom';
import { Products } from '../components/Product/Products.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { InfoProd } from '../components/InfoProd/InfoProd.jsx';
import { Home } from '../components/Home/Home.jsx';
import { Perfil } from '../components/Perfil/Perfil.jsx';
import { Cart } from '../components/Cart/Cart.jsx';
import { Orden } from '../components/Orden/Orden.jsx';
import { Final } from '../components/Orden/Final.jsx';

export const RoutesProducts = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="products" element={<Products />} />
				<Route path="products/:productId" element={<InfoProd />} />
				<Route path="" element={<Home />} />
				<Route path="/MiPerfil" element={<Perfil />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="/Orden" element={<Orden />} />
				<Route path="/Final" element={<Final />} />
			</Routes>
		</>
	);
};
