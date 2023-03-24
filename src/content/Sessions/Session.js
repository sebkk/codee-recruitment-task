import Image from 'next/image'
import styled from 'styled-components'

import { MASTERS } from '@/constants/Masters.constants'
import { ClockIcon, CalendarIcon, BlackPlayIcon } from '@/components/icons'
import { IconButton } from '@/components'

const SessionWrapper = styled.section`
	width: 100%;
	position: relative;
	border-left: 2px solid #e8e8e8;
	padding-left: 20px;
`

const SessionHeader = styled.section`
	display: flex;
	align-items: center;
	gap: 140px;
	padding: 11px 16px;
	background-color: #f8f8f8;
	border-radius: 12px;
	width: 100%;

	::after {
		position: absolute;
		content: '';
		border: 6px solid black;
		top: 0;
		left: -7px;
		height: 38px;
		border-radius: 20px;
	}
`

const SessionTitle = styled.h5`
	font-size: 26px;
	margin: 0;
	width: 210px;
	white-space: nowrap;
`

const SessionText = styled.span`
	font-size: 19px;
	display: flex;
	align-items: center;
	gap: 6px;
`

const SessionInfo = styled.section`
	display: flex;
	gap: 140px;
	padding: 48px 0 72px 15px;
`

const SessionDescription = styled.span`
	font-size: 16px;
	line-height: 34px;
	white-space: pre-line;
`

const MastersWrapper = styled.figure`
	display: flex;
	gap: 25px;
	min-width: 210px;

	> img {
		width: 87px;
		height: 87px;
	}
`

const Session = ({ session }) => {
	const { title, duration, date, description, masters } = session

	const mastersData = masters.map(master =>
		MASTERS.find(({ name }) => name.includes(master))
	)

	return (
		<SessionWrapper>
			<SessionHeader>
				<SessionTitle>{title}</SessionTitle>
				<SessionText>
					<ClockIcon /> Duration: {duration}
				</SessionText>
				<SessionText>
					<CalendarIcon /> Date: {date}
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
