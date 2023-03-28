import { Button } from './CarouselButton.styled'

import { ArrowLeftIcon } from '../icons'

const CarouselButton = ({ rotateRight = false }) => (
	<Button rotateRight={rotateRight}>
		<ArrowLeftIcon />
	</Button>
)

export default CarouselButton
