import styled from 'styled-components'

import { BlackProductFactoryLogo } from '../icons'
import { SocialIconButtonsGroup } from '../SocialIconButtonsGroup'

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 113px 10px 125px;
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

	> a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`

const Footer = () => (
	<FooterWrapper>
		<StyledFooter>
			<SocialIconButtonsGroup />
			<BlackProductFactoryLogo />
			<ContactNumber>
				Contact Number: <a href='tel:+0912-1234567'>0912-1234567</a>
			</ContactNumber>
		</StyledFooter>
	</FooterWrapper>
)

export default Footer
