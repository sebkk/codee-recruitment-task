import styled from 'styled-components'

import { NAV_LINKS } from '@/constants/Navbar.constants'
import { ProductFactoryLogo } from '../icons'

const Nav = styled.header`
	width: 100%;
	position: fixed;
	background-color: ${({ theme }) => theme.colors.black};
	padding: 52px 20px;
	display: flex;
	justify-content: center;
	z-index: 999;
`

const NavbarWrapper = styled.nav`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1460px;
`

const RegisterButton = styled.button`
	padding: 16px 40px;
	background-color: #292929;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 50px;
	justify-self: flex-end;
	cursor: pointer;
`

const NavLink = styled.a`
	font-size: 19;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
`

const Navbar = () => (
	<Nav>
		<NavbarWrapper>
			<ProductFactoryLogo />
			{NAV_LINKS.map(({ text, href }) => (
				<NavLink key={text} href={href}>
					{text}
				</NavLink>
			))}
			<RegisterButton>Register</RegisterButton>
		</NavbarWrapper>
	</Nav>
)

export default Navbar
