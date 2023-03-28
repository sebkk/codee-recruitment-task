import styled from 'styled-components'

export const Button = styled.button`
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.black};
	border-radius: 16px;
	padding: 10px 17px;
	transform: ${({ rotateRight }) => rotateRight && 'rotate(180deg)'};
	cursor: pointer;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 25px 30px;
	}
`
