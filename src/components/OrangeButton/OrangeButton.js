import { ButtonStyled } from './OrangeButton.styled'

const OrangeButton = ({ onClick, text, padding, fontSize, ...rest }) => (
	<ButtonStyled
		fontSize={fontSize}
		padding={padding}
		onClick={onClick}
		{...rest}
	>
		{text}
	</ButtonStyled>
)

export default OrangeButton
