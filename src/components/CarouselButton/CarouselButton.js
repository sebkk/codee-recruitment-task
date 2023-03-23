import styled from 'styled-components'

import { ArrowLeftIcon } from '../icons'

const Button = styled.button`
	background-color: transparent;
	border: 2px solid #000000;
	border-radius: 16px;
	padding: 25px 30px;
	transform: ${({ rotateRight }) => rotateRight && 'rotate(180deg)'};
	cursor: pointer;
`

const CarouselButton = ({ rotateRight = false }) => (
	<Button rotateRight={rotateRight}>
		<ArrowLeftIcon />
	</Button>
)

export default CarouselButton
