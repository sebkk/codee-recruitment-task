import styled from 'styled-components'

import { CardTitle, DefaultCard } from '@/components'

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
`

const Masters = () => {
	return (
		<MastersSection>
			<DefaultCard>
				<CardContent>
					<CardTitle title='Masters' />
				</CardContent>
			</DefaultCard>
		</MastersSection>
	)
}

export default Masters
