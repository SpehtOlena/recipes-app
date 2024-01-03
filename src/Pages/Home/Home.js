import './Home.css';
import Banner from '../../components/Banner/Banner.js'
import Title from '../../styledComponents/Title.js';
import CategoryCard from '../../components/CategoryCard/CategoryCard.js';


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
	return (
		<div>
			<Banner />
			<div className={'content'}>
				<Title>Recipes</Title>
				<div className={'category-container'}>
					{
						recipes.map((value, index) => <CategoryCard item={value} key={index} />)
					}
				</div>
			</div>
		</div>
	)
}
export default Home