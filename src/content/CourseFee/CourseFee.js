import styled from 'styled-components'

import { DefaultCard, CardTitle, BlackCard, OrangeButton } from '@/components'

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
	padding: 90px 0 165px;
	width: 100%;

	> div {
		width: 100%;
	}
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 75px;
`

const CardContent = styled.section`
	display: flex;
	gap: 30px;

	> div:first-of-type {
		flex: 0.7;
	}

	> div:last-of-type {
		flex: 0.3;
	}
`

const CardFooter = styled.aside`
	width: 100%;
	text-align: center;
	padding-top: 54px;
	margin-top: 45px;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	> span {
		font-size: 18;
		opacity: 0.49;
	}
`

const BlackCardContent = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`

const PriceTypography = styled.span`
	color: #ffffff;

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
`

const CourseFee = () => (
	<Container>
		<DefaultCard padding='68px 106px'>
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
