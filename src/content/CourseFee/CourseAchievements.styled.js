import styled from 'styled-components'

export const ListHeader = styled.h5`
	font-size: 15px;
	margin: 10px 0 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 21px;
	}
`

export const List = styled.ul`
	list-style: none;
	padding-left: 0;
`
