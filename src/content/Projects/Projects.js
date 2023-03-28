import { CardTitle, ListItem, CarouselButton, DefaultCard } from '@/components'
import { TODO_APP_LIST } from '@/constants/Projects.constants'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import { List } from '../CourseFee/CourseAchievements.styled'
import {
	Container,
	Wrapper,
	ContentWrapper,
	SideWrapper,
	CarouselHeader,
	CarouselDescription,
	CarouselCounter,
	Carousel,
	CarouselBackground,
	ButtonsWrapper,
	CarouselCard,
} from './Projects.styled'

const Projects = () => (
	<Container id={SECTIONS_IDS.PROJECTS}>
		<Wrapper>
			<CardTitle title='Projects' />
			<ContentWrapper>
				<SideWrapper>
					<CarouselHeader>Design To Do List App</CarouselHeader>
					<CarouselDescription>
						The previous student design project was the To Do List application
						product factory, The counter examples are the result of the efforts
						of the students and their teamwork in the first course.
					</CarouselDescription>
					<List>
						{TODO_APP_LIST.map((achievement, index) => (
							<ListItem key={index}>{achievement}</ListItem>
						))}
					</List>
					<CarouselCounter>4 / 15</CarouselCounter>
				</SideWrapper>
				<Carousel>
					<CarouselBackground />
					<CarouselCard>
						<DefaultCard />
					</CarouselCard>
					<ButtonsWrapper>
						<CarouselButton />
						<CarouselButton rotateRight />
					</ButtonsWrapper>
				</Carousel>
			</ContentWrapper>
		</Wrapper>
	</Container>
)

export default Projects
