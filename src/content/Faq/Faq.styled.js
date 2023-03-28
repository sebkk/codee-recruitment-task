import styled from 'styled-components'

export const Container = styled.article`
	background-color: ${({ theme }) => theme.colors.gray};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 50px 0;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 80px 0;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 100px 0;
	}
`
