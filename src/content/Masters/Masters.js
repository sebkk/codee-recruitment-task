import { CardTitle, DefaultCard } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import { Container, CardContent } from './Masters.styled'
import MastersList from './MastersList'

const Masters = () => (
	<Container id={SECTIONS_IDS.MASTERS}>
		<DefaultCard>
			<CardContent>
				<CardTitle title='Masters' />
				<MastersList />
			</CardContent>
		</DefaultCard>
	</Container>
)

export default Masters
