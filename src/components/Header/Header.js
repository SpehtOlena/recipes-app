import Logo from '../../styledComponents/Logo'
import './Header.css'
import Menu from '../Menu/Menu'

const menuItems = [
	"Home",
	"List",
	"Search"
]

const Header = () => {
	return (
		<div className={'header'}>
			<Logo>Recipe</Logo>
			<Menu menuItems={menuItems} />
		</div>
	)
}
export default Header