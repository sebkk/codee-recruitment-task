import styled from 'styled-components'

import { DefaultCard, CardTitle, BlackCard, OrangeButton } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import { handleScroll } from '@/utils'

import CourseAchievements from './CourseAchievements'

const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(250, 250, 250, 1) 50%,
		rgba(255, 255, 255, 1) 50%
	);
	padding: 40px 0 70px;
	width: 100%;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 60px 0 100px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 90px 0 165px;
	}
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 35px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 55px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 75px;
	}
`

const CardContent = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
	> div:last-of-type {
		padding: 40px 25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> div:last-of-type {
			padding: 51px 75px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		flex-direction: row;

		> div:first-of-type {
			flex: 0.6;
		}

		> div:last-of-type {
			flex: 0.4;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		> div:first-of-type {
			flex: 0.7;
		}

		> div:last-of-type {
			flex: 0.3;
		}
	}
`

const CardFooter = styled.aside`
	width: 100%;
	text-align: center;
	padding-top: 34px;
	margin-top: 45px;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	> span {
		font-size: 13px;
		opacity: 0.49;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-top: 54px;
		margin-top: 45px;

		> span {
			font-size: 18px;
		}
	}
`

const BlackCardContent = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 20px;

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		justify-content: space-between;
	}
`

const PriceTypography = styled.span`
	color: ${({ theme }) => theme.colors.white};

	&.line-through {
		font-size: 19px;
	}

	&.default {
		font-size: 27px;
	}

	&.additional-info {
		font-size: 13px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileM} {
		&.line-through {
			font-size: 25px;
			text-decoration: line-through;
			font-weight: bold;
		}

		&.default {
			font-size: 34px;
			font-weight: bold;
		}

		&.additional-info {
			font-size: 18px;
		}
	}
`

const CourseFee = () => (
	<Container>
		<DefaultCard>
			<Wrapper>
				<CardTitle title='Course fee' />
				<div>
					<CardContent>
						<CourseAchievements />
						<BlackCard>
							<BlackCardContent>
								<PriceTypography className='line-through'>
									4,000,000 Toman
								</PriceTypography>
								<PriceTypography className='default'>
									2,300,000 Toman
								</PriceTypography>
								<PriceTypography className='additional-info'>
									Possibility to pay periodic installment fee.
								</PriceTypography>
								<OrangeButton
									fontSize='16px'
									text='Register'
									padding='15px 66px'
									onClick={e => handleScroll(e, SECTIONS_IDS.LIST_OF_HEADINGS)}
								/>
							</BlackCardContent>
						</BlackCard>
					</CardContent>
					<CardFooter>
						<span>
							Possibility of refund prior to the third session if the course
							quality is not satisfied.
						</span>
					</CardFooter>
				</div>
			</Wrapper>
		</DefaultCard>
	</Container>
)

export default CourseFee
