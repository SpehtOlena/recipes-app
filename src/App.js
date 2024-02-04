import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home.js';
import List from './Pages/List/List.js';
import NewRecipe from './Pages/NewRecipe/NewRecipe.js';
import Search from './Pages/Search/Search.js';
import { useState } from 'react';


const menuItems = [
	{
		label: "Home",
		element: <Home />
	},
	{
		label: "List",
		element: <List />
	},
	{
		label: "Search",
		element: <Search />
	},
	{
		label: "New",
		element: <NewRecipe />
	}
]

function App() {
	const [activePage, setActivePage] = useState(<Home />);
	return (
		<div className="App">
			<Header items={menuItems} setActivePage={setActivePage} activePage={activePage} />
			{activePage}
			{/* <Home />
			<List />
			<DishRecipe /> */}

		</div>
	);
}

export default App;