import styled from 'styled-components'

export const SessionWrapper = styled.section`
	width: 100%;
	position: relative;
	border-left: 2px solid #e8e8e8;
	padding-left: 15px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-left: 20px;
	}
`

export const SessionHeader = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 11px 5px;
	background-color: #f8f8f8;
	border-radius: 12px;
	width: 100%;

	::after {
		position: absolute;
		content: '';
		border: 6px solid ${({ theme }) => theme.colors.black};
		top: 0;
		left: -7px;
		height: 38px;
		border-radius: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		padding: 11px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 11px 16px;
	}
`

export const SessionTitle = styled.h5`
	font-size: 12px;
	margin: 0;
	white-space: nowrap;

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		width: 170px;
		font-size: 22px;
		width: 170px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		width: 210px;
		font-size: 26px;
	}
`

export const SessionText = styled.span`
	font-size: 9px;
	display: flex;
	align-items: center;

	> svg {
		scale: 0.7;
	}

	> span:first-of-type {
		display: none;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		gap: 6px;
		font-size: 11px;

		> svg {
			scale: 0.8;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 15px;
		> svg {
			scale: 1;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 19px;

		> span:first-of-type {
			display: block;
			font-size: 19px;
		}
	}
`

export const SessionInfo = styled.section`
	display: flex;
	gap: 20px;
	padding: 38px 0 52px 8px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		gap: 50px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-left: 16px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		gap: 140px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 48px 0 72px 16px;
	}
`

export const SessionDescription = styled.span`
	font-size: 13px;
	line-height: 22px;
	padding-right: 10px;
	white-space: pre-line;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 16px;
		line-height: 27px;
		padding-right: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		line-height: 34px;
	}
`

export const MastersWrapper = styled.figure`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	min-width: 100px;
	height: 100px;
	margin: 0;

	> img {
		width: 87px;
		height: 87px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		width: 170px;
		flex-wrap: nowrap;
		gap: 25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		min-width: 210px;
	}
`
