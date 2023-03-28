import styled from 'styled-components'

import { handleScroll } from '@/utils'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import { CardTitle, DefaultCard, OrangeButton } from '@/components'

const Container = styled.article`
	display: flex;
	justify-content: center;
	padding: 40px 20px;
	background-color: ${({ theme }) => theme.colors.gray};
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		padding: 50px 40px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 80px 50px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 140px 20px 115px;
	}
`

const Wrapper = styled.section`
	width: 100%;
	max-width: 1460px;
`

const StepperWrapper = styled.aside`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 30px 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 50px 0;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		gap: 25px;
		padding: 60px 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 68px 150px 82px;
		gap: 96px;
	}
`

const StepperTypography = styled.span`
	font-size: 13px;
	font-weight: bold;

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		font-size: 15px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 22px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 29px;
	}
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
	flex-direction: column;
	gap: 50px;
	margin-bottom: 70px;

	> section {
		flex: 1;
		margin: 0;
		padding: 35px 0px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		flex-direction: row;
		gap: 96px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		margin-bottom: 103px;

		> section {
			padding: 57px 0px;
		}
	}
`

const CardContent = styled.span`
	text-align: center;
	font-size: 25px;
	font-weight: bold;
	text-align: center;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 30px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 45px;
	}
`

const CountdownWrapper = styled.aside`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	> button {
		padding: 17px 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> button {
			padding: 17px 75px;
		}
	}
`

const Countdown = styled.span`
	width: 40px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 16px;
	font-size: 15px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		width: 63px;
		height: 63px;
		padding: 15px 15px 15px 14px;
		font-size: 33px;
	}
`

const CountdownTypography = styled.span`
	font-size: 15px;
	font-weight: bold;
	margin: 0 16px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 18px;
		margin: 0 49px 0 34px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 23px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 33px;
	}
`

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
