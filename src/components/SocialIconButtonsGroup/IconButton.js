import styled from 'styled-components'

const LinkButton = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.black};
`

const IconButton = ({ children, href = '' }) => (
	<LinkButton href={href} target='_blank'>
		{children}
	</LinkButton>
)

export default IconButton
