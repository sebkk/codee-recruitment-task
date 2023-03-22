import styled from 'styled-components'

const ButtonStyled = styled.button`
	cursor: pointer;
	background-color: #f46632;
	padding: 24px 116px;
	color: #ffffff;
	border-radius: 16px;
	border: none;
	font-size: 24px;
	font-weight: bold;
`

const OrangeButton = ({ onClick, text }) => (
	<ButtonStyled onClick={onClick}>{text}</ButtonStyled>
)

export default OrangeButton
