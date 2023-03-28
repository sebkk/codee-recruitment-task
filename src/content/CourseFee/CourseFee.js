import { DefaultCard, CardTitle, BlackCard, OrangeButton } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import { handleScroll } from '@/utils'

import {
	Container,
	Wrapper,
	CardContent,
	CardFooter,
	BlackCardContent,
	PriceTypography,
} from './CourseFee.styled'
import CourseAchievements from './CourseAchievements'

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
