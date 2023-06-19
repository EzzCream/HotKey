import img from './logob.jpeg';
import { Navigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import axios from 'axios';
import { linkBack } from '../../helpers/global.js';
import { useContext, useState } from 'react';
import User from '../../context/Provider.jsx';

export const SignUp = () => {
	const { setUser } = useContext(User);
	const [login, setLogin] = useState(true);
	const [navigate, setNavigate] = useState(false);

	const {
		email,
		lastname,
		age,
		direction,
		name,
		number,
		password,
		form,
		inputChange,
	} = useForm({
		email: '',
		name: '',
		password: '',
		lastname: '',
		direction: '',
		number: '',
		age: '',
	});

	const validate = async (e) => {
		e.preventDefault();
		const user = await axios.post(linkBack + '/api/user', form);
		if (user.status === 201) {
			setNavigate(true);
		} else {
			setLogin(false);
		}
	};

	if (navigate) {
		return <Navigate to="/login/signin" />;
	}

	return (
		<div className="container-login">
			<div className="login">
				<div className="logo-cont">
					<img className="logo-login" src={img} alt="logo" />
				</div>
				<div className="form">
					<h2>SignUp</h2>
					<p>Nombres</p>
					<input
						type="text"
						name="name"
						value={name}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Nombre"
					/>
					<p>Apellidos</p>
					<input
						type="text"
						name="lastname"
						value={lastname}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Apellido"
					/>
					<p>Correo</p>
					<input
						type="email"
						name="email"
						value={email}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Correo"
					/>
					<p>Contraseña</p>
					<input
						type="password"
						className="form-control mb-3"
						name="password"
						value={password}
						onChange={inputChange}
						placeholder="Contraseña"
					/>
					<p>Direccion</p>
					<input
						type="text"
						name="direction"
						value={direction}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Direccion"
					/>
					<p>Edad</p>
					<input
						type="number"
						name="age"
						value={age}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Edad"
					/>
					<p>Numero</p>
					<input
						type="text"
						name="number"
						value={number}
						onChange={inputChange}
						className="form-control mb-3"
						placeholder="Numero"
					/>
					{!login ? (
						<p style={{ color: 'red' }}>Correo registrado</p>
					) : (
						''
					)}
					<button className="cta mb-2" onClick={validate}>
						<span className="hover-underline-animation">
							Iniciar Sesion
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
					<br />
				</div>
			</div>
		</div>
	);
};
