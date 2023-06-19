import './home.css';
import img from './logob.jpeg';
import imgFirst from './fist.png';
import imgPre from './preventa.png';
import imgOri from './original.png';
import imgFree from './free.png';

export const Home = () => {
	return (
		<div className="home">
			<main>
				<div className="portada">
					<div>
						<img className="logoPortada" src={img} alt="logo" />
						<h1 className="display-1 name font m-1">
							PhantomSneakers
						</h1>
					</div>
				</div>
				<section class="productos center pad" id="qs">
					<h2 class="display-6">Quienes somos</h2>
					<section class="center somos">
						<img src={imgFirst} alt="juego" class="img-qs" />
						<div class="text">
							<p class="texto">
								En <b class="font display-6">PhantomSneakers</b>
								, sabemos que ser un verdadero fanático de los
								tenis implica estar siempre un paso adelante. Es
								por eso que nos enfocamos en brindar a nuestros
								clientes la oportunidad de adquirir los últimos
								lanzamientos y colaboraciones de las marcas más
								reconocidas en el mercado de sneakers.
							</p>
						</div>
					</section>
				</section>
				<section class="servicios center pad" id="qh">
					<h2 class="display-6">Que hacemos</h2>
					<section class="tarjetas center">
						<div class="card-info center p-3">
							<img src={imgPre} class="img-card" alt="pc" />
							<p>Venta de tennis en preventa</p>
						</div>
						<div class="card-info center p-3">
							<img src={imgOri} class="img-card" alt="pc" />
							<p>Sneakers 100% originales</p>
						</div>
						<div class="card-info center p-3">
							<img src={imgFree} class="img-card" alt="pc" />
							<p>Envios gratis a todo Mexico</p>
						</div>
					</section>
				</section>
			</main>
			<footer class="center">
				<h6>Designed by Oscar - EzzCream</h6>
				<a
					id="link"
					target="_blank"
					href="https://ezzcream.github.io/About-Me/"
				>
					- Da click para ir a mi sitio web -
				</a>
			</footer>
		</div>
	);
};
