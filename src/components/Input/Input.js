import styled from 'styled-components'

const StyledInput = styled.input`
	padding: 20px 29px 20px 29px;
	width: 560px;
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	background-color: rgba(255, 255, 255, 0.15);
	color: #ffffff;
	font-size: 22px;
	outline: none;

	&::placeholder {
		color: #ffffff;
		font-size: 22px;
	}
`

const Input = ({ ...props }) => <StyledInput {...props} />

export default Input
