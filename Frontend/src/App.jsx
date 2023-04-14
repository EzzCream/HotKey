import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoutesGeneral } from './routes/RoutesGeneral.jsx';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<RoutesGeneral />
			</BrowserRouter>
		</div>
	);
}

export default App;
