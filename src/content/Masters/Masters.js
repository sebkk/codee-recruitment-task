import styled from 'styled-components'

import { CardTitle, DefaultCard } from '@/components'

import MastersList from './MastersList'

const Container = styled.article`
	display: flex;
	justify-content: center;
	width: 100%;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 50%,
		rgba(250, 250, 250, 1) 50%
	);
	padding-bottom: 50px;

	> div {
		width: 100%;
	}
`

const CardContent = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 71px;
`

const Masters = () => (
	<Container>
		<DefaultCard padding='92px 78px 74px'>
			<CardContent>
				<CardTitle title='Masters' />
				<MastersList />
			</CardContent>
		</DefaultCard>
	</Container>
)

export default Masters
