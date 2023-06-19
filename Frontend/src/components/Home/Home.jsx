import './home.css';
import img from './logob.jpeg';

export const Home = () => {
	return (
		<div className="home">
			<div className="portada">
				<div>
					<img className="logoPortada" src={img} alt="logo" />
					<h1 className="display-1 name font m-1">PhantomSneakers</h1>
				</div>
			</div>
			<div className="acerca cuadro">
				<h2 className="display-3 mb-3 ">ACERCA DE NOSOTROS</h2>
				<p className="">
					En PhantomSneakers, sabemos que ser un verdadero fanático de
					los tenis implica estar siempre un paso adelante. Es por eso
					que nos enfocamos en brindar a nuestros clientes la
					oportunidad de adquirir los últimos lanzamientos y
					colaboraciones de las marcas más reconocidas en el mercado
					de sneakers.
				</p>
			</div>
		</div>
	);
};
