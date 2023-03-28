import styled from 'styled-components'

export const Container = styled.article`
	background-color: #111111;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 110px;
	background: linear-gradient(
		180deg,
		rgba(17, 17, 17, 1) 85%,
		rgba(250, 250, 250, 1) 85%
	);

	> * {
		max-width: 1460px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-top: 180px;
	}
`

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;

	> img {
		display: none;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> img {
			display: block;
			width: auto;
			height: 350px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 80px;

		> img {
			width: auto;
			height: 570px;
		}
	}
`

export const SideWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 25px;

	> span {
		font-size: 16px;
		line-height: 25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> span {
			font-size: 20px;
			line-height: 35px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> span {
			font-size: 23px;
			line-height: 55px;
		}
	}
`

export const HeaderTypography = styled.h1`
	font-size: 30px;
	font-weight: bold;
	margin: 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 50px;
	}
`

export const TitleWrapper = styled.section`
	display: flex;
	flex-direction: column;
`

export const ImageWrapper = styled.figure`
	position: relative;
	margin: 0;

	> img {
		width: auto;
		height: 65px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> img {
			width: auto;
			height: 100px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> img {
			width: auto;
			height: 127px;
		}
	}
`

export const SubheaderTypography = styled.h3`
	position: absolute;
	margin: 7px 0 0;
	font-size: 20px;
	color: #8d8d8d;
	font-weight: normal;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 28px;
		margin-top: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 38px;
		margin-top: 28px;
	}
`
