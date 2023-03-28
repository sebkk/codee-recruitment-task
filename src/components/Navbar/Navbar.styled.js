import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.header`
	width: 100vw;
	display: flex;
	justify-content: center;
	z-index: 999;
	position: fixed;
	background-color: ${({ theme }) => theme.colors.black};
`

export const NavbarWrapper = styled.nav`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 20px;
	max-width: 1460px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 52px 30px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.smallDevice} {
		padding: 52px 40px;
	}
`

export const RegisterButton = styled.button`
	padding: 16px 40px;
	background-color: #292929;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 50px;
	justify-self: flex-end;
	cursor: pointer;
	transition: 0.4s all;

	:hover {
		background: ${({ theme }) => theme.colors.orange};
	}
`

export const NavLink = styled(Link)`
	font-size: 19;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;
	transition: 0.4s all;

	:hover {
		color: ${({ theme }) => theme.colors.orange};
	}
`

export const HamburgerButton = styled.button`
	display: flex;
	align-items: flex-end;
	background-color: #292929;
	border: none;
	color: rgba(255, 255, 255, 0.85);
	font-size: 20px;
	cursor: pointer;
	transition: 0.4s all;
	line-height: 15px;
	border-radius: 50px;
	padding: 16px 30px;

	> svg {
		margin-right: 15px;
	}

	:hover {
		background-color: ${({ theme }) => theme.colors.orange};
	}
`
