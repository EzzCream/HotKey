import { useContext } from 'react';
import User from '../../context/Provider.jsx';
import './perfil.css';
import { linkBack } from '../../helpers/global.js';

export const Perfil = () => {
	const { user } = useContext(User);

	const logout = () => {
		localStorage.setItem('User', JSON.stringify([]));
		window.location.replace('http://127.0.0.1:5173', '_blank');
	};

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
				<button onClick={logout} className="cta mb-2">
					<span className="hover-underline-animation">
						Cerrar sesion
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
		</div>
	);
};
