import { Item } from './ListItem.styled'

const ListItem = ({ children, margin }) => (
	<Item margin={margin}>{children}</Item>
)

export default ListItem
