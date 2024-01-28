import Button from '../../styledComponents/Button';
import './ListCard.css'

const ListCard = ({ object }) => {
	const { photoUrl, ingredients, name, category } = object;
	return (
		<div className={'list-card'}>
			<img src={photoUrl} alt={`${name} photo`} className={'dish-photo'} />
			<h3 className='dishName'>{name}</h3>
			{/* <h4 style={{ textAlign: 'center' }}>{category}</h4> */}
			<div className={'dish-ingredients'}>
				{
					ingredients.map((value, index) => <li value={value} key={index}>{value}</li>)
				}
			</div>
			<Button>Show details</Button>
		</div>
	)
}
export default ListCard