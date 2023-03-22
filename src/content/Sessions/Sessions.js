import styled from 'styled-components'

import { CardTitle } from '@/components'
import { SESSIONS } from '@/constants/Sessions.constants'

import Session from './Session'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 130px;
	padding: 0 38px;
	width: 100%;
`

const SessionsWrapper = styled.div`
	width: 100%;
	max-width: 1380px;
`

const Sessions = () => {
	return (
		<Wrapper>
			<CardTitle title={'Sessions'} />
			<SessionsWrapper>
				{SESSIONS.map((session, index) => (
					<Session session={session} key={index} />
				))}
			</SessionsWrapper>
		</Wrapper>
	)
}

export default Sessions
