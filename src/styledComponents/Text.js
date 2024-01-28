import styled from 'styled-components';

export const Text = styled.div`
	font-family: Quando;
	font-weight: 400;
	font-size: 20px;
	@media (max-width: 1024px) {
		font-size: 18px;
	 }
	@media (max-width: 768px) {
		font-size: 16px;
	 }
	 @media (max-width: 480px) {
		font-size: 14px;
	 }
	line-height: 25px;
	color: #000000B2;
	& > span {
		color: #000000;
	}
`

export const TextS = styled(Text)`
	font-family: Quando;
	font-weight: 400;
	font-size: 16px;
	line-height: 30px;
	@media (max-width: 768px) {
		line-height: 20px;
	 }
`
export const TextL = styled(Text)`
	font-family: Quando;
	font-weight: 400;
	font-size: 24px;
	@media (max-width: 768px) {
		font-size: 18px;
	 }
	 @media (max-width: 480px) {
		font-size: 16px;
	 }
	line-height: 30px;
	@media (max-width: 768px) {
		line-height: 20px;
	 }
	color: #000;
`
