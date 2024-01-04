import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home.js'
import List from './Pages/List/List.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<List />

		</div>
	);
}

export default App;
