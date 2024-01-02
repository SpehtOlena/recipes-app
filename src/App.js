import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Button from './styledComponents/Button';
import ButtonRadius from './styledComponents/ButtonRadius';
import Logo from './styledComponents/Logo';
import SubTitle from './styledComponents/SubTitle';
import { Text, TextL, TextS } from './styledComponents/Text';
import Title from './styledComponents/Title';

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />

		</div>
	);
}

export default App;
