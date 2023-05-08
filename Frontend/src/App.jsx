import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoutesGeneral } from './routes/RoutesGeneral.jsx';
import { Provider } from './context/Provider.jsx';

function App() {
	return (
		<div className="App">
			<Provider>
				<BrowserRouter>
					<RoutesGeneral />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
