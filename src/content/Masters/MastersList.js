import { MASTERS } from '@/constants/Masters.constants'

import { Wrapper } from './MastersList.styled'
import Master from './Master'

const MastersList = () => (
	<Wrapper>
		{MASTERS.map(master => (
			<Master key={master.name} master={master} />
		))}
	</Wrapper>
)

export default MastersList
