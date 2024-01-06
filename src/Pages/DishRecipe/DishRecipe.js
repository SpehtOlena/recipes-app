import './DishRecipe.css'
import RecipesArray from '../../components/RecipesArr'
import DetailCard from '../../components/DetailCard/DetailCard'

const DishRecipe = () => {
	return (
		<div>
			{
				RecipesArray.map((value, index) => <DetailCard item={value} key={index} />)
			}
		</div>
	)
}
export default DishRecipe