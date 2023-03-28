import styled from 'styled-components'

const Card = styled.section`
	background-color: ${({ theme }) => theme.colors.white};
	padding: ${({ padding }) => padding || '40px 20px'};
	border-radius: 30px;
	max-width: 1460px;
	display: flex;
	margin: 0 20px;
	filter: drop-shadow(5px 5px 20px rgba(34, 34, 34, 0.06));

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: ${({ padding }) => padding || '45px 50px'};
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: ${({ padding }) => padding || '110px 90px'};
	}
`

const DefaultCard = ({ children, padding }) => (
	<Card padding={padding}>{children}</Card>
)

export default DefaultCard
