import SubTitle from '../../styledComponents/SubTitle';
import { Text } from '../../styledComponents/Text';
import './CategoryCard.css';
import { useState } from 'react';

const CategoryCard = ({ item }) => {
	const { category, description, imgUrl } = item;
	const [activeCategory, setActiveCategory] = useState(null);
	return (
		<div className={'category-card'}>
			<img src={imgUrl} alt={`${category} photo`} className={'category-img'} onClick={() => setActiveCategory({ category })} />
			<div className={'category-card-info'}>
				<SubTitle>{category}</SubTitle>
				<Text>{description}</Text>
			</div>
		</div>
	)
}
export default CategoryCard