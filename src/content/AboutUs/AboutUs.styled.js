import styled from 'styled-components'

export const Container = styled.article`
	display: flex;
	justify-content: center;
	position: relative;
	padding: 170px 0 90px;
	background-color: ${({ theme }) => theme.colors.gray};

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		padding: 210px 0 120px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		padding-top: 240px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		padding-top: 290px;
	}
`

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
`

export const TopWrapper = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 60px;
	}
`

export const AboutParagraph = styled.p`
	font-size: 15px;
	line-height: 26px;
	margin: 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		font-size: 17px;
		line-height: 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 19px;
		line-height: 50px;
	}
`

export const TitleWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	gap: 80px;
	padding-top: 100px;

	> div:last-of-type {
		position: relative;
		top: -25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		padding-top: 200px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		justify-content: flex-end;
		padding-top: 0;
	}
`

export const CardWrapper = styled.aside`
	position: absolute;
	z-index: 10;
	left: 0;
	top: -155px;

	> div {
		position: relative;
		padding: 55px 85px;

		> svg {
			width: 130px;
			height: auto;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		> div {
			position: relative;
			padding: 65px 85px;

			> svg {
				width: 207px;
			}
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		left: 50%;
		translate: -50% 0;
		top: -200px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		top: -210px;

		> div {
			padding: 75px 85px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		top: -250px;

		> div {
			padding: 125px 195px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		left: unset;
		translate: unset;
	}
`

export const WhitePlayIconWrapper = styled.div`
	position: absolute;
	right: 32px;
	bottom: 32px;
`

export const LinesWrapper = styled.div`
	position: absolute;
	bottom: -50px;

	> svg:last-of-type {
		position: absolute;
		bottom: 0;
		left: -30px;
	}
`

export const SquareIconWrapper = styled.div`
	display: none;
	position: absolute;
	right: -39px;
	width: 40px;
	border: 2px solid ${({ theme }) => theme.colors.black};
	bottom: 28%;

	> svg {
		position: absolute;
		right: -38px;
		top: -50%;
		translate: 0 -50%;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		display: block;
	}
`
