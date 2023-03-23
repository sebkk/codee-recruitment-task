import Image from 'next/image'
import styled from 'styled-components'

import { MASTERS } from '@/constants/Masters.constants'

const SessionWrapper = styled.div`
	width: 100%;
	position: relative;
	border-left: 2px solid #e8e8e8;
	padding-left: 20px;
`

const SessionHeader = styled.div`
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
	font-family: sans-serif;
	font-size: 26px;
	margin: 0;
	width: 210px;
	white-space: nowrap;
`

const SessionText = styled.span`
	font-family: sans-serif;
	font-size: 19px;
`

const SessionInfo = styled.div`
	display: flex;
	gap: 140px;
	padding: 48px 0 72px 15px;
`

const SessionDescription = styled.span`
	font-family: sans-serif;
	font-size: 16px;
	line-height: 34px;
	white-space: pre-line;
`

const MastersWrapper = styled.div`
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

	console.log(masters)

	const mastersData = masters.map(master =>
		MASTERS.find(({ name }) => name.includes(master))
	)

	return (
		<SessionWrapper>
			<SessionHeader>
				<SessionTitle>{title}</SessionTitle>
				<SessionText>Duration: {duration}</SessionText>
				<SessionText>Date: {date}</SessionText>
				<SessionText>Watch Video </SessionText>
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
