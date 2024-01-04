import ListCard from '../../components/ListCard/ListCard'
import RecipesArray from '../../components/RecipesArr'
import './List.css'

const List = () => {
	return (
		<div className={'list-container'}>
			{
				RecipesArray.map((value, index) => <ListCard object={value} key={index} />)
			}
		</div>
	)
}
export default List	