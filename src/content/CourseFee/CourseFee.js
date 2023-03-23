import styled from 'styled-components'

import { DefaultCard, CardTitle, BlackCard, OrangeButton } from '@/components'

import CourseAchievements from './CourseAchievements'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 75px;
`

const CardContent = styled.div`
	display: flex;
	gap: 30px;

	> div:first-of-type {
		flex: 0.7;
	}

	> div:last-of-type {
		flex: 0.3;
	}
`

const CardFooter = styled.div`
	width: 100%;
	text-align: center;
	padding-top: 54px;
	margin-top: 45px;
	border-top: 1px solid rgba(0, 0, 0, 0.08);

	> span {
		font-family: sans-serif;
		font-size: 18;
		opacity: 0.49;
	}
`

const BlackCardContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`

const PriceTypography = styled.span`
	font-family: sans-serif;
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

const CourseFee = () => {
	return (
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
								<OrangeButton text='Register' padding=' 15px 66px' />
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
	)
}

export default CourseFee
