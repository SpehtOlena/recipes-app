import styled from 'styled-components';

export const Text = styled.div`
	font-family: Quando;
	font-weight: 400;
	font-size: 20px;
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
`
export const TextL = styled(Text)`
	font-family: Quando;
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
`
