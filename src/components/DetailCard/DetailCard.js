import './DetailCard.css';
import { Text, TextL } from '../../styledComponents/Text';
import Button from '../../styledComponents/Button';

const DetailCard = ({ item }) => {
	const { photoUrl, name, category, description, allIngredients, cooking } = item;
	return (
		<div className={'detail-card-wrapper'}>
			<div className={'detail-card-container'}>
				<div className={'detail-main'}>
					<img src={photoUrl} alt={`${name}`} className={'dish-photo'} />
					<div className={'detail-main-info'}>
						<TextL>{name}</TextL>
						<Text><span>Categore : </span>{category}</Text>
						<Text><span>Description : </span>{description}</Text>
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
					<Button primary={'true'}>Back</Button>
				</div>
			</div>
		</div>

	)
}
export default DetailCard