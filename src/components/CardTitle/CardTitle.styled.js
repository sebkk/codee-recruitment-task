import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`

export const Title = styled.h3`
	font-size: 18px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: 0;
	translate: -50% -50%;
	margin: 5px;
	line-height: 26px;
	white-space: nowrap;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		font-size: 22px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 26px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 32px;
		line-height: 32px;
	}
`

export const TitleShadow = styled.h2`
	font-size: 40px;
	line-height: 40px;
	margin: 0;
	opacity: 0.05;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		font-size: 50px;
		line-height: 50px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 70px;
		line-height: 70px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 100px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		font-size: 120px;
	}
`
