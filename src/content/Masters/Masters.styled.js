import styled from 'styled-components'

export const Container = styled.article`
	display: flex;
	justify-content: center;
	width: 100%;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 50%,
		rgba(250, 250, 250, 1) 50%
	);
	padding-bottom: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-bottom: 50px;

		> section {
			padding: 72px 58px 54px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 92px 78px 74px;
	}
`

export const CardContent = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 71px;
`
