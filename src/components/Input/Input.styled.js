import styled from 'styled-components'

export const StyledInput = styled.input`
	padding: 15px 24px;
	width: 100%;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	background-color: rgba(255, 255, 255, 0.15);
	color: ${({ theme }) => theme.colors.white};
	font-size: 17px;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.white};
		font-size: 17px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		font-size: 22px;
		padding: 20px 29px;

		&::placeholder {
			font-size: 22px;
		}
	}
`

export const ErrorMessage = styled.span`
	color: red;
	opacity: 0.7;
	font-size: 18px;
	margin-top: 30px;
	display: block;
`
