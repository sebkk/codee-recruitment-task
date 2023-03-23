import styled from 'styled-components'

import { CardTitle, DefaultCard, OrangeButton } from '@/components'

const Wrapper = styled.div`
	width: 100%;
	max-width: 1460px;
`

const StepperWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 96px;
	padding: 68px 150px 82px;
`

const StepperTypography = styled.span`
	font-family: sans-serif;
	font-size: 29px;
	font-weight: bold;
`

const Stepper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	position: relative;
`

const StepperCircle = styled.div`
	width: 22px;
	height: 22px;
	background-color: ${({ filled }) => (filled ? '#000000' : 'transparent')};
	opacity: 0.3;
	border: 3px solid #000000;
	border-radius: 11px;
`

const StepperLine = styled.div`
	width: 100%;
	border-top: 3px dashed #000000;
	opacity: 0.3;
`

const CardWrapper = styled.div`
	display: flex;
	gap: 96px;
	margin-bottom: 103px;

	> div {
		flex: 1;
		margin: 0;
	}
`

const CardContent = styled.span`
	text-align: center;
	font-family: sans-serif;
	font-size: 45px;
	font-weight: bold;
	text-align: center;
	width: 100%;
`

const CountdownWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Countdown = styled.span`
	width: 63px;
	height: 63px;
	background-color: #000000;
	color: #ffffff;
	border-radius: 16px;
	font-size: 33px;
	font-weight: bold;
	font-family: sans-serif;
	padding: 15px 15px 15px 14px;
`

const CountdownTypography = styled.span`
	font-size: 33px;
	font-weight: bold;
	font-family: sans-serif;
	margin: 0 49px 0 34px;
`

const Schedule = () => (
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
			<DefaultCard padding='57px 0px'>
				<CardContent>2019 / 11 / 11</CardContent>
			</DefaultCard>
			<DefaultCard padding='57px 0px'>
				<CardContent>2019 / 08 / 11</CardContent>
			</DefaultCard>
		</CardWrapper>
		<CountdownWrapper>
			<Countdown>11</Countdown>
			<CountdownTypography>Days left to sign up</CountdownTypography>
			<OrangeButton text='Register' padding='17px 85px' />
		</CountdownWrapper>
	</Wrapper>
)

export default Schedule
