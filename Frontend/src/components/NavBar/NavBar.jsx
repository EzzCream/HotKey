import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from './logotipo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import User from '../../context/Provider.jsx';
import { NavInfo } from './NavInfo.jsx';

export const NavBar = () => {
	const { user } = useContext(User);

	return (
		<>
			<Navbar className="navbar" bg="light" expand="lg">
				<Link to="/" className="m-2">
					<img src={img} alt="logo" className="imgLogo" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/products">Productos</Link>
					</Nav>
					{user.length === 0 ? (
						<Link to="/login/signin" className="m-3">
							Login
						</Link>
					) : (
						<NavInfo />
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
