import { ButtonStyled } from './OrangeButton.styled'

const OrangeButton = ({ onClick, text, padding, fontSize }) => (
	<ButtonStyled fontSize={fontSize} padding={padding} onClick={onClick}>
		{text}
	</ButtonStyled>
)

export default OrangeButton
