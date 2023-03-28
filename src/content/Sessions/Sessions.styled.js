import styled from 'styled-components'

export const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 80px 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 120px 0;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 160px 0 190px;
	}
`

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 0 20px;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 80px;
		padding: 0 38px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 130px;
	}
`

export const SessionsWrapper = styled.section`
	width: 100%;
	max-width: 1380px;
`
