import styled from 'styled-components'

import { CardTitle, DefaultCard } from '@/components'

import MastersList from './MastersList'

const MastersSection = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;

	> div {
		width: 100%;
	}
`

const CardContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 71px;
`

const Masters = () => {
	return (
		<DefaultCard>
			<CardContent>
				<CardTitle title='Masters' />
				<MastersList />
			</CardContent>
		</DefaultCard>
	)
}

export default Masters
