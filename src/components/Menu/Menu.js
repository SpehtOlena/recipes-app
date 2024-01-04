import './Menu.css';



const Menu = ({ menuItems }) => {
	return (
		<div className={'menu-items'}>
			{menuItems.map((value, index) => <a href={`/${value}`} key={index} className={'menu-item'}>{value.toUpperCase()}</a>)
			}
		</div >
	)
}
export default Menu