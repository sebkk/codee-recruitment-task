import { NAV_LINKS } from '@/constants/Navbar.constants'
import { handleScroll } from '@/utils'

import { Menu, LinkWrapper } from './NavMenu.styled'
import { RegisterButton, NavLink } from './Navbar.styled'
import { ProductFactoryButton } from '../ProductFactoryButton'

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
