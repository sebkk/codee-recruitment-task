import styled from 'styled-components'

import { CardTitle, DefaultCard, OrangeButton } from '@/components'

const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 140px 20px 115px;
	background-color: ${({ theme }) => theme.colors.gray};
	width: 100%;
`

const Wrapper = styled.section`
	width: 100%;
	max-width: 1460px;
`

const StepperWrapper = styled.aside`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 96px;
	padding: 68px 150px 82px;
`

const StepperTypography = styled.span`
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
	background-color: ${({ filled, theme }) =>
		filled ? theme.colors.black : 'transparent'};
	opacity: 0.3;
	border: 3px solid ${({ theme }) => theme.colors.black};
	border-radius: 11px;
`

const StepperLine = styled.div`
	width: 100%;
	border-top: 3px dashed ${({ theme }) => theme.colors.black};
	opacity: 0.3;
`

const CardWrapper = styled.section`
	display: flex;
	gap: 96px;
	margin-bottom: 103px;

	> section {
		flex: 1;
		margin: 0;
	}
`

const CardContent = styled.span`
	text-align: center;
	font-size: 45px;
	font-weight: bold;
	text-align: center;
	width: 100%;
`

const CountdownWrapper = styled.aside`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Countdown = styled.span`
	width: 63px;
	height: 63px;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 16px;
	font-size: 33px;
	font-weight: bold;
	padding: 15px 15px 15px 14px;
`

const CountdownTypography = styled.span`
	font-size: 33px;
	font-weight: bold;
	margin: 0 49px 0 34px;
`

const Schedule = () => (
	<Container>
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
	</Container>
)

export default Schedule
