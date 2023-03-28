import { Card } from './DefaultCard.styled'

const DefaultCard = ({ children, padding }) => (
	<Card padding={padding}>{children}</Card>
)

export default DefaultCard
