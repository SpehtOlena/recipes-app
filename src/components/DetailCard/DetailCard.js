import './DetailCard.css';
import { Text, TextL } from '../../styledComponents/Text';

const DetailCard = ({ item }) => {
	const { photoUrl, name, category, description, allIngredients, cooking } = item;
	return (
		<div className={'detail-card-wrapper'}>
			<div className={'detail-card-container'}>
				<div className={'detail-main'}>
					<img src={photoUrl} alt={`${name}`} className={'detail-dish-photo'} />
					<div className={'detail-main-info'}>
						<TextL>{name}</TextL>
						<Text className={'hidden-info'}><span>Category : </span>{category}</Text>
						<Text className={'hidden-info'}><span>Description : </span>{description}</Text>
					</div>
				</div>
				<div className={'detail-cooking'}>
					<div className={'detail-cooking-ingredients'}>
						{
							allIngredients.map((value, index) => <div value={value} key={index}>{value}<input type='checkbox' className={'checkbox-modal'}></input></div>)
						}
					</div>
					<div className={'detail-cooking-plan'}>
						{
							cooking.map((item, index) => <TextL value={item} key={index}>{item}</TextL>)
						}
					</div>
				</div>
			</div>
		</div>

	)
}
export default DetailCard