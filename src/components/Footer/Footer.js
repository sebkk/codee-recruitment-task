import styled from 'styled-components'

import { BlackProductFactoryLogo } from '../icons'

import { SocialIconButtonsGroup } from '../SocialIconButtonsGroup'

const FooterWrapper = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 113px 10px 125px;
`

const StyledFooter = styled.footer`
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
	font-family: sans-serif;
	text-align: right;

	> a {
		text-decoration: none;
		color: #000000;
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
