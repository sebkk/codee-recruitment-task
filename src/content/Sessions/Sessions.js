import styled from 'styled-components'

import { CardTitle } from '@/components'
import { SESSIONS } from '@/constants/Sessions.constants'

import Session from './Session'

const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 160px 0 190px;
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 130px;
	padding: 0 38px;
	width: 100%;
`

const SessionsWrapper = styled.section`
	width: 100%;
	max-width: 1380px;
`

const Sessions = () => (
	<Container>
		<Wrapper>
			<CardTitle title={'Sessions'} />
			<SessionsWrapper>
				{SESSIONS.map((session, index) => (
					<Session session={session} key={index} />
				))}
			</SessionsWrapper>
		</Wrapper>
	</Container>
)

export default Sessions
