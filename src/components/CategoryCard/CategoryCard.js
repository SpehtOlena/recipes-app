import SubTitle from '../../styledComponents/SubTitle';
import { Text } from '../../styledComponents/Text';
import './CategoryCard.css'

const CategoryCard = ({ item }) => {
	const { category, description, imgUrl } = item;
	return (
		<div className={'category-card'}>
			<img src={imgUrl} alt={`${category} photo`} className={'category-img'} />
			<SubTitle>{category}</SubTitle>
			<Text>{description}</Text>
		</div>
	)
}
export default CategoryCard