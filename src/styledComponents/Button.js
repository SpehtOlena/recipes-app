import styled from 'styled-components';

const Button = styled.button`
	background: ${props => props.primary ? "#FF393999" : "#F8A607"};
	color: #FDFDFD;
	font-family: Quando;
	font-size: ${props => props.primary ? "24px" : "16px"}; 48px;
	font-weight: 400;
	line-height: 16px;
	padding: 17px 80px;
	border: none;
`

export default Button