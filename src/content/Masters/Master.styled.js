import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

export const MasterImageWrapper = styled.figure`
	width: 150px;
	height: 150px;
	margin: 0;
	position: relative;
	align-self: left;

	> img {
		width: 100%;
		height: 100%;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		width: 200px;
		height: 200px;
	}
`

export const MasterName = styled.h6`
	margin: 15px 0 10px;
	font-size: 15px;
	width: fit-content;
	text-align: left;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		margin: 35px 0 20px;
		font-size: 20px;
	}
`

export const MasterPosition = styled.figcaption`
	font-size: 13px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 16px;
	}
`

export const MasterAction = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	position: absolute;
	border-radius: 10px;
	background-color: ${({ isHover }) =>
		isHover ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'};
	opacity: ${({ isHover }) => (isHover ? 1 : 0)};
	transition: all 0.25s ease-in;
	pointer-events: ${({ isHover }) => (isHover ? 'auto' : 'none')};

	> div {
		gap: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> div {
			gap: 30px;
		}
	}
`

export const AboutButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	background: rgba(180, 180, 180, 0.7);
	font-size: 13px;
	padding: 10px;
	border-radius: 9px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	cursor: pointer;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 15px;
		font-size: 15px;
		padding: 16px 14px;
	}
`
