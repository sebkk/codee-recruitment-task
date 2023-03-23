import styled from 'styled-components'

const Card = styled.div`
	padding: ${({ padding }) => padding || '51px 75px'};
	background-color: #000000;
	border-radius: 25px;
`

const BlackCard = ({ children, padding }) => (
	<Card padding={padding}>{children}</Card>
)

export default BlackCard
