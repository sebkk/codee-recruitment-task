import styled from 'styled-components'

const LinkButton = styled.a`
	text-decoration: none;
	color: #000000;
`

const IconButton = ({ children, href }) => (
	<LinkButton href={href} target='_blank'>
		{children}
	</LinkButton>
)

export default IconButton
