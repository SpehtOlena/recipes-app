import { useDispatch, useSelector } from 'react-redux';
import ListCard from '../../components/ListCard/ListCard';
import './List.css';
import { useEffect } from 'react';
import { axiosRequest } from '../../redux/action';

const List = () => {
	const dispatch = useDispatch();
	const recipes = useSelector(state => state.recipes.data);
	useEffect(() => {
		dispatch(axiosRequest('', ''))
	}, [])

	return (
		<div className={'list-container'}>
			{
				recipes.map((value, index) => <ListCard object={value} key={index} recipes={recipes} />)
			}
		</div>
	)
}
export default List	