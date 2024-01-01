import './App.css';
import Button from './styledComponents/Button';
import ButtonRadius from './styledComponents/ButtonRadius';
import Logo from './styledComponents/Logo';

function App() {
	return (
		<div className="App">
			<Logo>Recipe</Logo>
			<Button primary={'true'}>Back</Button>
			<Button>Show details</Button>
			<ButtonRadius>See Recipes</ButtonRadius>
		</div>
	);
}

export default App;
