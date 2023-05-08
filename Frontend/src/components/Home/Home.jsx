import './home.css';
import img from './logob.png';

export const Home = () => {
	return (
		<div className="home">
			<div className="portada">
				<img className="logoPortada" src={img} alt="logo" />
				<h1 className="display-1 name">HotKey</h1>
			</div>
			<div className="acerca">
				<div className="acerca cuadro">
					<h2 className="display-3 mb-3">ACERCA DE NOSOTROS</h2>
					<p>
						Bienvenido/a a nuestro ecommerce especializado en la
						venta de switches y teclados mecánicos de la mejor
						calidad para tu setup. Nos dedicamos a ofrecer productos
						de alta calidad y rendimiento, para que puedas disfrutar
						de una experiencia de escritura y gaming única. Nuestro
						equipo está compuesto por expertos en la materia,
						quienes se encargan de seleccionar los mejores productos
						del mercado para ofrecértelos en nuestro catálogo. Nos
						enfocamos en brindarte la mejor selección de switches y
						teclados mecánicos de marcas reconocidas en la
						industria, como Cherry MX, Kailh, Gateron, entre otras.
						Además, nos preocupamos por la satisfacción de nuestros
						clientes, por lo que nos aseguramos de brindarte un
						servicio de atención al cliente excepcional. En nuestro
						ecommerce, podrás encontrar switches y teclados
						mecánicos de diferentes tamaños y diseños, para que
						puedas escoger el que mejor se adapte a tus necesidades
						y gustos. También ofrecemos accesorios como keycaps y
						cables personalizados para que puedas personalizar aún
						más tu setup.
					</p>
				</div>
			</div>
		</div>
	);
};
