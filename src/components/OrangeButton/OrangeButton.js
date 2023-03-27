import styled from 'styled-components'

const ButtonStyled = styled.button`
	cursor: pointer;
	background-color: #f46632;
	padding: ${({ padding }) => padding || '20px 30px'};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 16px;
	border: none;
	font-size: ${({ fontSize }) => fontSize || '14px'};
	font-weight: bold;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: ${({ padding }) => padding || '20px 60px'};
		font-size: ${({ fontSize }) => fontSize || '18px'};
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: ${({ padding }) => padding || '24px 116px'};
		font-size: ${({ fontSize }) => fontSize || '24px'};
	}
`

const OrangeButton = ({ onClick, text, padding, fontSize }) => (
	<ButtonStyled fontSize={fontSize} padding={padding} onClick={onClick}>
		{text}
	</ButtonStyled>
)

export default OrangeButton
