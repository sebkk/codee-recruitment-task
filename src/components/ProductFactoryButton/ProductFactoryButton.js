import styled from 'styled-components'

import { handleScroll } from '@/utils'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import { ProductFactoryLogo, BlackProductFactoryLogo } from '../icons'

const Button = styled.button`
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
`

const ProductFactoryButton = ({ isBlack = false }) => (
	<Button onClick={e => handleScroll(e, SECTIONS_IDS.PRODUCT_DESIGN_COURSE)}>
		{isBlack ? <BlackProductFactoryLogo /> : <ProductFactoryLogo />}
	</Button>
)

export default ProductFactoryButton
