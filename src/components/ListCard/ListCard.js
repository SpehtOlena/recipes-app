import Button from '../../styledComponents/Button';
import './ListCard.css'

const ListCard = ({ object }) => {
	const { photoUrl, ingredients, name } = object;
	return (
		<div className={'list-card'}>
			<img src={photoUrl} alt={`${name} photo`} className={'dish-photo'} />
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