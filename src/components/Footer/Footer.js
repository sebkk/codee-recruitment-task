import styled from 'styled-components'

import { useCheckScreen } from '@/hooks'

import { BlackProductFactoryLogo } from '../icons'
import { SocialIconButtonsGroup } from '../SocialIconButtonsGroup'

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 50px 30px;

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		padding: 113px 10px 125px;
	}
`

const StyledFooter = styled.section`
	width: 100%;
	max-width: 1460px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> div:first-of-type,
	span:last-of-type {
		width: 300px;
	}
`

const ContactNumber = styled.span`
	font-size: 20;
	text-align: right;
	align-self: flex-end;

	> a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		align-self: center;
	}
`

const Footer = () => {
	const { isSmallDevice } = useCheckScreen()

	return (
		<FooterWrapper>
			<StyledFooter>
				<SocialIconButtonsGroup orientationVertical={isSmallDevice} />
				<BlackProductFactoryLogo />
				<ContactNumber>
					Contact Number: {isSmallDevice && <br />}{' '}
					<a href='tel:+0912-1234567'>0912-1234567</a>
				</ContactNumber>
			</StyledFooter>
		</FooterWrapper>
	)
}

export default Footer
