import { handleScroll } from '@/utils'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import { Button } from './ProductFactoryButton.styled'
import { ProductFactoryLogo, BlackProductFactoryLogo } from '../icons'

const ProductFactoryButton = ({ isBlack = false }) => (
	<Button onClick={e => handleScroll(e, SECTIONS_IDS.PRODUCT_DESIGN_COURSE)}>
		{isBlack ? <BlackProductFactoryLogo /> : <ProductFactoryLogo />}
	</Button>
)

export default ProductFactoryButton
