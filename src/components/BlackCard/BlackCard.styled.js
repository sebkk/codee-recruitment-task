import styled from 'styled-components'

export const Card = styled.div`
	padding: ${({ padding }) => padding || '51px 75px'};
	background-color: ${({ theme }) => theme.colors.black};
	border-radius: 25px;
`
