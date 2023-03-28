import styled from 'styled-components'

import { CardTitle } from '@/components'
import { SESSIONS } from '@/constants/Sessions.constants'
import { useCheckScreen } from '@/hooks'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import Session from './Session'

const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 80px 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 120px 0;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 160px 0 190px;
	}
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 0 20px;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 80px;
		padding: 0 38px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 130px;
	}
`

const SessionsWrapper = styled.section`
	width: 100%;
	max-width: 1380px;
`

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
