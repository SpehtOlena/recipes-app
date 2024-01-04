import './Banner.css';
import BannerImg from '../../assets/BannerImg.png'
import Title from '../../styledComponents/Title';
import SubTitle from '../../styledComponents/SubTitle';
import ButtonRadius from '../../styledComponents/ButtonRadius';

const Banner = () => {
	return (
		<div className={'banner-container'}>
			<div className={'banner-content'}>
				<Title>Yummy Recipes</Title>
				<SubTitle>we have a lot of yummy recipes from all around the world.</SubTitle>
				<ButtonRadius>See Recipes</ButtonRadius>
			</div>
			<div className={'banner-img'} >
				<img src={BannerImg} alt='Burger' />
			</div>
		</div>
	)
}
export default Banner