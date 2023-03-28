import { CardTitle } from '@/components'
import { SESSIONS } from '@/constants/Sessions.constants'
import { useCheckScreen } from '@/hooks'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import Session from './Session'
import { Container, Wrapper, SessionsWrapper } from './Sessions.styled'

const Sessions = () => {
	const { isSmallMobile } = useCheckScreen()

	return (
		<Container id={SECTIONS_IDS.CLASSES}>
			<Wrapper>
				<CardTitle title={'Sessions'} />
				<SessionsWrapper>
					{SESSIONS.map((session, index) => (
						<Session
							session={session}
							key={index}
							index={index}
							isSmallMobile={isSmallMobile}
						/>
					))}
				</SessionsWrapper>
			</Wrapper>
		</Container>
	)
}

export default Sessions
