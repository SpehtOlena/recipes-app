import './Home.css';
import Banner from '../../components/Banner/Banner.js'
import Title from '../../styledComponents/Title.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';
import { useState } from 'react';
import RecipesArray from '../../components/RecipesArr.js';
import ListCard from '../../components/ListCard/ListCard.js';
import Button from '../../styledComponents/Button.js';


export const recipes = [
	{
		category: "Супи",
		description: "Смачні і ситні страви на основі бульйону або закваски.",
		imgUrl: "https://picsum.photos/id/143/300/200"
	},
	{
		category: "Основні страви",
		description: "Апетитна італійська кухня з різноманітними видами макаронних виробів.",
		imgUrl: "https://picsum.photos/id/17/300/200"
	},
	{
		category: "Салати",
		description: "Легкі та освіжаючі страви зі свіжих овочів та соусів.",
		imgUrl: "https://picsum.photos/id/187/300/200"
	},
	{
		category: "Десерти",
		description: "Солодкі випічка, морозиво та інші солодощі для задоволення вашого післядегустаційного смаку.",
		imgUrl: "https://picsum.photos/id/167/300/200"
	}
];


const Home = () => {
	const [filterData, setFilterData] = useState('')
	const filteredData = RecipesArray.filter((value => value.category === filterData))
	return (
		<div>
			{
				filteredData.length === 0 ?
					<div>
						<Banner />
						<div className={'content'}>
							<Title>Recipes</Title>
							<div className={'category-container'}>
								{
									recipes.map((value, index) =>
										<div key={index} className={'category-container-item'}>
											<CategoryCard item={value} />
											<Button onClick={() => { setFilterData(value.category) }}> {value.category}</Button>
										</div>
									)
								}
							</div>


						</div>
					</div> :
					<div className={'list-wrapper'}>
						<ul className={'list_container'}>
							{
								filteredData.map(value => <ListCard object={value} key={value.id} />)
							}
						</ul>
						<Button onClick={() => { setFilterData(null) }} className={'buttonBack'}>Back</Button>
					</div>
			}

		</div>
	)
}
export default Home