import ListCard from '../../components/ListCard/ListCard'
import RecipesArray from '../../components/RecipesArr'
import './List.css'

const List = ({ data }) => {
	return (
		<div className={'list-container'}>
			{
				!!data.length && data.map((value, index) => (
					<ListCard object={value} key={index}>{value.recipeName}</ListCard>
				))
			}
			{
				RecipesArray.map((value, index) => <ListCard object={value} key={index} />)
			}
		</div>
	)
}
export default List	