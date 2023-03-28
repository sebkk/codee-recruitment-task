import { LinkButton } from './IconButton.styled'

const IconButton = ({ children, href = '' }) => (
	<LinkButton href={href} target='_blank'>
		{children}
	</LinkButton>
)

export default IconButton
