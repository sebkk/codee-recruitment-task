import { CardTitle } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import FaqList from './FaqList'
import { Container } from './Faq.styled'

const Faq = () => (
	<Container id={SECTIONS_IDS.FAQ}>
		<CardTitle title='Frequently Asked Questions' titleShadow='FAQ' />
		<FaqList />
	</Container>
)

export default Faq
