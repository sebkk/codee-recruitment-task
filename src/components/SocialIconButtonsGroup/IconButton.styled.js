import styled from 'styled-components'

export const LinkButton = styled.a`
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
