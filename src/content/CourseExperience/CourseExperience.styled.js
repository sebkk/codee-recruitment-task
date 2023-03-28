import styled from 'styled-components'

export const Container = styled.article`
	display: flex;
	justify-content: center;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(250, 250, 250, 1) 50%,
		rgba(255, 255, 255, 1) 50%
	);
`

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
`

export const CardContent = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 45px;

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		gap: 70px;
	}
`

export const TabContent = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;

	> img {
		height: auto;
		width: 50%;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		flex-direction: row;
		gap: 55px;

		> img {
			height: 70%;
			width: auto;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 75px;

		> img {
			height: 100%;
			width: auto;
		}
	}
`

export const Paragraph = styled.p`
	font-size: 15px;
	line-height: 26px;
	margin: 0;
	padding-bottom: 10px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		font-size: 17px;
		line-height: 32px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 20px;
		line-height: 48px;
	}
`
