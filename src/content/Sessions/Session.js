import Image from 'next/image'

import { MASTERS } from '@/constants/Masters.constants'
import { ClockIcon, CalendarIcon, BlackPlayIcon } from '@/components/icons'
import { IconButton } from '@/components'

import {
	SessionWrapper,
	SessionHeader,
	SessionTitle,
	SessionText,
	SessionInfo,
	SessionDescription,
	MastersWrapper,
} from './Session.styled'

const Session = ({ session, index, isSmallMobile }) => {
	const { title, duration, date, description, masters } = session

	const mastersData = masters.map(master =>
		MASTERS.find(({ name }) => name.includes(master))
	)

	return (
		<SessionWrapper>
			<SessionHeader>
				<SessionTitle>
					{isSmallMobile ? `${index + 1}. session` : title}
				</SessionTitle>
				<SessionText>
					<ClockIcon /> <span>Duration:</span> {duration}
				</SessionText>
				<SessionText>
					<CalendarIcon /> <span>Date:</span> {date}
				</SessionText>
				<IconButton href='https://www.google.pl/'>
					<SessionText>
						<BlackPlayIcon /> Watch Video
					</SessionText>
				</IconButton>
			</SessionHeader>
			<SessionInfo>
				<MastersWrapper>
					{mastersData?.map(({ picture, name }) => (
						<Image key={name} src={picture} alt={name} />
					))}
				</MastersWrapper>
				<SessionDescription>{description}</SessionDescription>
			</SessionInfo>
		</SessionWrapper>
	)
}

export default Session
