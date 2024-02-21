import ListCard from '../../components/ListCard/ListCard';
import './List.css';

const List = ({ recipes, setRecipes }) => {

	return (
		<div className={'list-container'}>
			{
				recipes.map((value, index) => <ListCard object={value} key={index} recipes={recipes} />)
			}
		</div>
	)
}
export default List	