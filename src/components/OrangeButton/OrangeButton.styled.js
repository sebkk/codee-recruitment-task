import styled from 'styled-components'

export const ButtonStyled = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.orange};
	padding: ${({ padding }) => padding || '20px 30px'};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 16px;
	border: none;
	font-size: ${({ fontSize }) => fontSize || '14px'};
	font-weight: bold;

	:disabled {
		color: ${({ theme }) => theme.colors.black};
		background: ${({ theme }) => theme.colors.gray};
		opacity: 0.1;
		pointer-events: none;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: ${({ padding }) => padding || '20px 60px'};
		font-size: ${({ fontSize }) => fontSize || '18px'};
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: ${({ padding }) => padding || '24px 116px'};
		font-size: ${({ fontSize }) => fontSize || '24px'};
	}
`
