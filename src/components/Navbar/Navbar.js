import styled from 'styled-components'

import { NAV_LINKS } from '@/constants/Navbar.constants'
import { ProductFactoryLogo } from '../icons'

const NavWrapper = styled.nav`
	color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`

const RegisterButton = styled.button`
	padding: 16px 40px;
	background-color: #292929;
	border: none;
	color: #ffffff;
	border-radius: 50px;
	justify-self: flex-end;
	cursor: pointer;
`

const NavLink = styled.a`
	font-size: 19;
	cursor: pointer;
`

const Navbar = () => {
	return (
		<NavWrapper>
			<ProductFactoryLogo />
			{NAV_LINKS.map(item => (
				<NavLink key={item}>{item}</NavLink>
			))}
			<RegisterButton>Register</RegisterButton>
		</NavWrapper>
	)
}

export default Navbar
