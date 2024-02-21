import './DetailCard.css';
import { Text, TextL } from '../../styledComponents/Text';

const DetailCard = ({ item }) => {
	const { photoUrl, recipeName, category, description, ingredients, cooking } = item;
	return (
		<div className={'detail-card-wrapper'}>
			<div className={'detail-card-container'}>
				<div className={'detail-main'}>
					<img src={photoUrl} alt={`${recipeName}`} className={'detail-dish-photo'} />
					<div className={'detail-main-info'}>
						<TextL>{recipeName}</TextL>
						<Text className={'hidden-info'}><span>Category : </span>{category}</Text>
						<Text className={'hidden-info'}><span>Description : </span>{description}</Text>
					</div>
				</div>
				<div className={'detail-cooking'}>
					<div className={'detail-cooking-ingredients'}>
						{
							ingredients.map((value, index) => <div value={value} key={index}>{value}<input type='checkbox' className={'checkbox-modal'}></input></div>)
						}
					</div>
					<div className={'detail-cooking-plan'}>
						<ol>
							{
								cooking.map((item, index) => <li value={item} key={index}>{item}</li>)
							}
						</ol>
					</div>
				</div>
			</div>
		</div>

	)
}
export default DetailCard