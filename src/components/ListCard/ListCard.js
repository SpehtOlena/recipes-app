import { useState } from 'react';
import Button from '../../styledComponents/Button';
import Modal from '../Modal/Modal';
import RecipesArray from '../RecipesArr';
import DetailCard from '../DetailCard/DetailCard'
import './ListCard.css';

const ListCard = ({ object }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeRecipe, setActiveRecipe] = useState('');
	const filteredRecipe = RecipesArray.filter((value => value.id === activeRecipe))
	const { photoUrl, ingredients, name } = object;
	return (
		<>
			<div className={'list-card'}>
				<img src={photoUrl} alt={`${name} photo`} className={'dish-photo'} />
				<h3 className='dishName'>{name}</h3>
				<div className={'dish-ingredients'}>
					{
						ingredients.map((value, index) => <li value={value} key={index}>{value}</li>)
					}
				</div>
				<Button onClick={() => { setActiveRecipe(object.id); setModalOpen(true) }}>Show details</Button>
			</div>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} >
				{
					filteredRecipe.map((value, index) => <DetailCard item={value} key={index} />)
				}
			</Modal>
		</>

	)
}
export default ListCard