import styled from 'styled-components'

import { NAV_LINKS } from '@/constants/Navbar.constants'
import { handleScroll } from '@/utils'

import { NavLink, RegisterButton } from './Navbar'
import { ProductFactoryButton } from '../ProductFactoryButton'

const Menu = styled.section`
	width: 100vw;
	height: 100vh;
	position: fixed;
	background-color: ${({ theme }) => theme.colors.black};
	z-index: 9999999999;
	padding: 70px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 90px;

	> svg {
		width: 180px;
		height: auto;
	}

	> button {
		font-size: 24px;
	}
`

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	font-size: 30px;
`

const NavMenu = ({ onClose }) => (
	<Menu>
		<ProductFactoryButton />
		<LinkWrapper>
			{NAV_LINKS.map(({ text, href }) => (
				<NavLink onClick={e => handleScroll(e, href)} key={text} href={href}>
					{text}
				</NavLink>
			))}
		</LinkWrapper>
		<RegisterButton onClick={onClose}>Close</RegisterButton>
	</Menu>
)

export default NavMenu
