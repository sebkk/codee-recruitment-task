import styled from 'styled-components'

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 50px 30px;

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		padding: 113px 30px 125px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		padding: 113px 50px 125px;
	}
`

export const StyledFooter = styled.section`
	width: 100%;
	max-width: 1460px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> button > svg {
		width: 130px;
		height: auto;
	}

	> div:first-of-type,
	span:last-of-type {
		width: 300px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> button > svg {
			width: 210px;
		}
	}
`

export const ContactNumber = styled.span`
	font-size: 14px;
	text-align: right;
	align-self: flex-end;

	> a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		align-self: center;
	}
`
