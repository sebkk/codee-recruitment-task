import { useState } from 'react'

import { useCheckScreen } from '@/hooks'
import { NAV_LINKS, SECTIONS_IDS } from '@/constants/Navbar.constants'
import { handleScroll } from '@/utils'

import {
	Nav,
	NavbarWrapper,
	RegisterButton,
	NavLink,
	HamburgerButton,
} from './Navbar.styled'
import { ProductFactoryButton } from '../ProductFactoryButton'
import { AboutIcon } from '../icons'
import NavMenu from './NavMenu'

const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false)

	const { isNavbarHamburgerResolution } = useCheckScreen()

	return (
		<>
			<Nav>
				<NavbarWrapper>
					<ProductFactoryButton />{' '}
					{!isNavbarHamburgerResolution && (
						<>
							{NAV_LINKS.map(({ text, href }) => (
								<NavLink
									onClick={e => handleScroll(e, href)}
									key={text}
									href={href}
								>
									{text}
								</NavLink>
							))}
							<RegisterButton
								onClick={e => handleScroll(e, SECTIONS_IDS.LIST_OF_HEADINGS)}
							>
								Register
							</RegisterButton>
						</>
					)}
					{isNavbarHamburgerResolution && (
						<HamburgerButton onClick={() => setOpenNavbar(true)}>
							<AboutIcon />
							Menu
						</HamburgerButton>
					)}
				</NavbarWrapper>
			</Nav>
			{openNavbar && <NavMenu onClose={() => setOpenNavbar(false)} />}
		</>
	)
}

export default Navbar
