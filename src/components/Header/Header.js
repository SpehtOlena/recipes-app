import Logo from '../../styledComponents/Logo'
import './Header.css'


const Header = ({ setActivePage, items }) => {

	return (
		<div className={'header'}>
			<Logo>Recipe</Logo>
			<div className={'menu-items'}>
				{items.map((value, index) => <li onClick={() => { setActivePage(value.element) }} key={index} className={'menu-item'}>{value.label.toUpperCase()}</li>)
				}
			</div >
		</div>
	)
}
export default Header