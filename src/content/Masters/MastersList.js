import styled from 'styled-components'

import { MASTERS } from '@/constants/Masters.constants'
import Master from './Master'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 75px 40px;
`

const MastersList = () => (
	<Wrapper>
		{MASTERS.map(master => (
			<Master key={master.name} master={master} />
		))}
	</Wrapper>
)

export default MastersList
