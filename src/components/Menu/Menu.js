import './Menu.css';

const MenuItems = [
	"Home",
	"List",
	"Search"
]

const Menu = () => {
	return (
		<div className={'menu-items'}>
			{MenuItems.map((value, index) => <a href={value} key={index}>{value}</a>)}
		</div>
	)
}
export default Menu