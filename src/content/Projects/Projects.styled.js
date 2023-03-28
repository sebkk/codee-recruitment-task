import styled from 'styled-components'

export const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 50px 40px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 80px 50px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 143px 20px;
	}
`

export const Wrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1460px;
	gap: 80px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 120px;
	}
`

export const ContentWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 80px;

	> div {
		flex: 0.5;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		flex-direction: row;
		align-items: stretch;
		gap: 160px;
	}
`

export const SideWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0 0 20px;
`

export const CarouselHeader = styled.h4`
	margin: 10px 0 20px;
	font-size: 22px;
	position: relative;
	padding-left: 30px;

	::before {
		content: '';
		width: 20px;
		height: 20px;
		background-color: ${({ theme }) => theme.colors.black};
		left: 0;
		top: 50%;
		translate: 0 -50%;
		border-radius: 14px;
		position: absolute;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 30px;
		padding-left: 35px;

		::before {
			width: 28px;
			height: 28px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 38px;
	}
`

export const CarouselDescription = styled.p`
	font-size: 14px;
	line-height: 27px;
	margin: 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 17px;
		line-height: 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 22px;
		margin: 0 0 22px;
		line-height: 56px;
	}
`

export const CarouselCounter = styled.span`
	border-radius: 16px;
	background-color: #f5f5f5;
	font-size: 18px;
	padding: 12px 27px;
	margin-top: 15px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 22px;
		padding: 12px 32px;
		margin-top: 40px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 34px;
		padding: 17px 54px;
		margin-top: 90px;
	}
`

export const Carousel = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	position: relative;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		width: 100%;
	}
`

export const CarouselBackground = styled.div`
	background: #f5f5f5;
	border-radius: 30px;
	height: 55%;
	width: 100%;
	position: absolute;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		position: static;
		height: 65%;
		width: auto;
	}
`

export const ButtonsWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-self: flex-end;
	justify-content: space-between;
	margin-top: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 0 0 60px;
		margin-top: 0;
	}
`

export const CarouselCard = styled.div`
	> section {
		height: 370px;
		width: 180px;
		margin: 50px 50px 0;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		> section {
			height: 540px;
			width: 230px;
			margin: 50px 60px 0;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> section {
			height: 550px;
			width: 327px;
			margin: 50px 70px 0;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		position: absolute;
		bottom: 0;
		left: 50%;
		translate: -50% 0;

		> section {
			margin: 0;
		}
	}
`
