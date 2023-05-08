import { JellyTriangle } from '@uiball/loaders';
import './loader.css';

export const Loader = () => {
	return (
		<div className="loader">
			<JellyTriangle size={60} speed={1.75} color="black" />
		</div>
	);
};
