import Logo from '../../styledComponents/Logo'
import './Header.css'
import Menu from '../Menu/Menu'

const Header = () => {
	return (
		<div className={'header'}>
			<Logo>Recipe</Logo>
			<Menu />
		</div>
	)
}
export default Header