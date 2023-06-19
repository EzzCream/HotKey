import { Link } from 'react-router-dom';
import './final.css';

export const Final = () => {
	return (
		<div className="final-cont">
			<h1>Gracias por su compra</h1>
			<p>
				En la brevedad nos pondremos en contacto para el seguimiento de
				su paquete
			</p>
			<Link to={`/`} className="cta mb-2">
				<span className="hover-underline-animation">
					Regresar al inicio
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
			</Link>
		</div>
	);
};
