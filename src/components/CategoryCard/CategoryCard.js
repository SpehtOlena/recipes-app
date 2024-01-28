import SubTitle from '../../styledComponents/SubTitle';
import { Text } from '../../styledComponents/Text';
import './CategoryCard.css';
import { useState } from 'react';

const CategoryCard = ({ item }) => {
	const { category, description, imgUrl } = item;
	const [activeCategory, setActiveCategory] = useState(null);
	console.log(activeCategory);
	return (
		<div className={'category-card'}>
			<img src={imgUrl} alt={`${category} photo`} className={'category-img'} onClick={() => setActiveCategory({ category })} />
			<SubTitle>{category}</SubTitle>
			<Text>{description}</Text>
		</div>
	)
}
export default CategoryCard