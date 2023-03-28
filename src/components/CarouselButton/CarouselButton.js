import styled from 'styled-components'

import { ArrowLeftIcon } from '../icons'

const Button = styled.button`
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.black};
	border-radius: 16px;
	padding: 10px 17px;
	transform: ${({ rotateRight }) => rotateRight && 'rotate(180deg)'};
	cursor: pointer;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 25px 30px;
	}
`

const CarouselButton = ({ rotateRight = false }) => (
	<Button rotateRight={rotateRight}>
		<ArrowLeftIcon />
	</Button>
)

export default CarouselButton
