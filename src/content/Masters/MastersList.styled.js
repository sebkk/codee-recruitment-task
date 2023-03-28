import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 55px 50px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 75px 70px;
	}
`
