import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home.js';
import List from './Pages/List/List.js';
import NewRecipe from './Pages/NewRecipe/NewRecipe.js';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
	const [activePage, setActivePage] = useState(<Home />);
	const [data, setData] = useState([]);
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/recipes',)
			.then((res) => setRecipes(res.data))
	}, [activePage])
	const menuItems = [
		{
			label: "Home",
			element: <Home recipes={recipes} setRecipes={setRecipes} />
		},
		{
			label: "List",
			element: <List recipes={recipes} setRecipes={setRecipes} />
		},
		{
			label: "New",
			element: <NewRecipe setActivePage={setActivePage} recipes={recipes} setRecipes={setRecipes} />
		}
	]
	return (
		<div className="App">
			<Header items={menuItems} setActivePage={setActivePage} activePage={activePage} />
			{activePage}
			<ul>
				<ol>j</ol>
				<ol>j</ol>
				<ol>j	</ol>
			</ul>
		</div>
	);
}

export default App;