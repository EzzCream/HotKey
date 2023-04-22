import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from './logob.png';
import './NavBar.css';

export const NavBar = () => {
	return (
		<>
			<Navbar className="navbar" bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<img src={img} alt="logo" className="imgLogo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
