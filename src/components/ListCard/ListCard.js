import { useState } from 'react';
import Button from '../../styledComponents/Button';
import Modal from '../Modal/Modal';
import DetailCard from '../DetailCard/DetailCard'
import './ListCard.css';
import { useDispatch, useSelector } from 'react-redux';

const ListCard = ({ object, recipes }) => {
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(false);
	const [activeRecipe, setActiveRecipe] = useState('');
	const { photoUrl, ingredients, recipeName } = object;
	return (
		<>
			<div className={'list-card'} onClick={() => { setActiveRecipe(object); setModalOpen(true) }}>
				<img src={photoUrl} alt={`${recipeName} photo`} className={'dish-photo'} />
				<h3 className='dishName'>{recipeName}</h3>
				<div className={'dish-ingredients'}>
					{
						ingredients.slice(0, 3).map((value, index) => <li value={value} key={index}>{value}</li>)
					}
				</div>
				<Button >Show details</Button>
			</div>
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} >
				{
					!!activeRecipe.id &&
					<DetailCard activeRecipe={activeRecipe} />
				}
			</Modal>
		</>

	)
}
export default ListCard