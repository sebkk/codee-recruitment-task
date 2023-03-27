import styled from 'styled-components'

const StyledInput = styled.input`
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

const Input = ({ ...props }) => <StyledInput {...props} />

export default Input
