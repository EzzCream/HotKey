import { useContext } from 'react';
import User from '../../context/Provider.jsx';
import './perfil.css';
import { linkBack } from '../../helpers/global.js';

export const Perfil = () => {
	const { user } = useContext(User);

	return (
		<div className="contPerfil">
			<div className="infoPerfil">
				<img src={linkBack + user.user.img} alt="" />
				<h1 className="display-5">Mi perfil</h1>
				<h2>{user.user.name}</h2>
				<p>{user.user.lastname}</p>
				<p>{user.user.email}</p>
				<p>{user.user.direction}</p>
				<p>{user.user.number}</p>
			</div>
		</div>
	);
};
