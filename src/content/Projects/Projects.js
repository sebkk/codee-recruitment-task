import styled from 'styled-components'

import { CardTitle, ListItem, CarouselButton, DefaultCard } from '@/components'
import { TODO_APP_LIST } from '@/constants/Projects.constants'

import { List } from '../CourseFee/CourseAchievements'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1460px;
	gap: 120px;
`

const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 160px;

	> div {
		flex: 0.5;
	}
`

const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0 0 20px;
`

const CarouselHeader = styled.h4`
	margin: 10px 0 20px;
	font-size: 38px;
	position: relative;
	padding-left: 35px;

	::before {
		content: '';
		width: 28px;
		height: 28px;
		background-color: #000000;
		left: 0;
		top: 50%;
		translate: 0 -50%;
		border-radius: 14px;
		position: absolute;
	}
`

const CarouselDescription = styled.p`
	font-size: 22px;
	line-height: 56px;
	margin: 0 0 22px;
`

const CarouselCounter = styled.span`
	border-radius: 16px;
	background-color: #f5f5f5;
	font-size: 34px;
	padding: 17px 54px;
	margin-top: 90px;
`

const Carousel = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	position: relative;
`

const CarouselBackground = styled.div`
	background: #f5f5f5;
	border-radius: 30px;
	height: 65%;
`

const ButtonsWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-self: flex-end;
	justify-content: space-between;
	padding-bottom: 60px;
`

const CarouselCard = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	translate: -50% 0;

	> div {
		height: 612px;
		width: 327px;
	}
`

const Projects = () => {
	return (
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
							<ListItem margin='35px 0 0' key={index}>
								{achievement}
							</ListItem>
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
	)
}

export default Projects
