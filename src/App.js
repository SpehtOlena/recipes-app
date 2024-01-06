import './App.css';
import Header from './components/Header/Header';
import DishRecipe from './Pages/DishRecipe/DishRecipe.js';
import Home from './Pages/Home/Home.js';
import List from './Pages/List/List.js';
import { useState } from 'react';



function App() {
	const [activePage, setActivePage] = useState(null);
	return (
		<div className="App">
			<Header />
			<Home />
			<List />
			<DishRecipe />

		</div>
	);
}

export default App;
