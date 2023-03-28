import styled from 'styled-components'

import { handleScroll } from '@/utils'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import { CardTitle, DefaultCard, OrangeButton } from '@/components'

import {
	Container,
	Wrapper,
	StepperWrapper,
	StepperTypography,
	Stepper,
	StepperCircle,
	StepperLine,
	CardWrapper,
	CardContent,
	CountdownWrapper,
	Countdown,
	CountdownTypography,
} from './Schedule.styled'

const Schedule = () => (
	<Container id={SECTIONS_IDS.PARTNERS}>
		<Wrapper>
			<CardTitle title='Schedule' />
			<StepperWrapper>
				<StepperTypography>Start of course</StepperTypography>
				<Stepper>
					<StepperCircle />
					<StepperLine />
					<StepperCircle filled />
				</Stepper>
				<StepperTypography>End of course</StepperTypography>
			</StepperWrapper>
			<CardWrapper>
				<DefaultCard>
					<CardContent>2019 / 11 / 11</CardContent>
				</DefaultCard>
				<DefaultCard>
					<CardContent>2019 / 08 / 11</CardContent>
				</DefaultCard>
			</CardWrapper>
			<CountdownWrapper>
				<Countdown>11</Countdown>
				<CountdownTypography>Days left to sign up</CountdownTypography>
				<OrangeButton
					text='Register'
					onClick={e => handleScroll(e, SECTIONS_IDS.LIST_OF_HEADINGS)}
				/>
			</CountdownWrapper>
		</Wrapper>
	</Container>
)

export default Schedule
