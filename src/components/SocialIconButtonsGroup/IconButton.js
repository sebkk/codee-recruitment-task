import styled from 'styled-components'

const LinkButton = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.black};

	> svg {
		width: 22px;
		height: 22px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> svg {
			width: unset;
			height: unset;
		}
	}
`

const IconButton = ({ children, href = '' }) => (
	<LinkButton href={href} target='_blank'>
		{children}
	</LinkButton>
)

export default IconButton
