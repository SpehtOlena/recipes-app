import styled from 'styled-components';

const Button = styled.button`
	background: ${props => props.$primary ? "#FF393999" : "#F8A607"};
	color: #FDFDFD;
	font-family: Quando;
	font-size: ${props => props.$primary ? "24px" : "19px"}; 48px;
	@media (max-width: 768px) {
		font-size: ${props => props.$primary ? "20px" : "14px"}; 32px;
	}
	font-weight: 400;
	line-height: 16px;
	padding: 17px 30px;
	@media (max-width: 768px) {
		padding: 12px 20px;
	}
	border: none;
	cursor: pointer;

&:hover {
	background: ${props => props.$primary ? "#f56830" : "#e65c0c"};
}

	.list-card & {
		width: 100%;
	}
`

export default Button