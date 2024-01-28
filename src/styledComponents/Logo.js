import styled from 'styled-components';

const Logo = styled.span`
	font-family: Quando;
	font-size: 48px;
	@media (max-width: 768px) {
	  font-size: 30px;
	}
	@media (max-width: 480px) {
	  font-size: 24px;
	}
	font-weight: 400;
	line-height: 16px;
	cursor: pointer;
`

export default Logo