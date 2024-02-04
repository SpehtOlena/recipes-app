import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home.js';
import List from './Pages/List/List.js';
import NewRecipe from './Pages/NewRecipe/NewRecipe.js';
import Search from './Pages/Search/Search.js';
import { useState } from 'react';



function App() {
	const [activePage, setActivePage] = useState(<Home />);
	const [data, setData] = useState([]);
	const menuItems = [
		{
			label: "Home",
			element: <Home data={data} setData={setData} />
		},
		{
			label: "List",
			element: <List data={data} setData={setData} />
		},
		{
			label: "New",
			element: <NewRecipe data={data} setData={setData} setActivePage={setActivePage} />
		},
		{
			label: "",
			element: <Search setActivePage={setActivePage} />
		}
	]
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