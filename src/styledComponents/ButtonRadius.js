import styled from 'styled-components';
import Button from './Button';

const ButtonRadius = styled(Button)`
	border-radius: 10px;
	padding: 17px 45px 24px;
	@media (max-width: 768px) {
		padding: 12px 30px 15px;
	}
	font-family: Poppins;
	font-size: 24px;
	@media (max-width: 768px) {
		font-size: 18px;
	}
		font-weight: 700;
	line-height: 36px;
`

export default ButtonRadius