import styled from 'styled-components'

const Card = styled.div`
	background-color: ${({ isBlack }) => (isBlack ? 'black' : '#ffffff')};
	padding: ${({ padding }) => padding};
	border-radius: 30px;
	max-width: 1460px;
	display: flex;
	margin: 0 20px;
	filter: drop-shadow(5px 5px 20px rgba(34, 34, 34, 0.06));
`

const DefaultCard = ({
	children,
	padding = '110px 140px',
	isBlack = false,
}) => {
	return (
		<Card isBlack={isBlack} padding={padding}>
			{children}
		</Card>
	)
}

export default DefaultCard
