import styled from 'styled-components'

export const Menu = styled.section`
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

export const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	font-size: 30px;
`
