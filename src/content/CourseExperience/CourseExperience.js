import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import CourseExperienceProductFactory from '@/pictures/CourseExperienceProductFactory.png'
import { DefaultCard, CardTitle, Tabs } from '@/components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	> div {
		width: 100%;
	}
`

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 70px;
`

const TabContent = styled.div`
	display: flex;
	align-items: center;
	gap: 75px;
`

const Paragraph = styled.p`
	font-size: 20px;
	margin: 0;
	line-height: 48px;
`

const TABS = [
	{ text: 'After attending the course', value: 'After' },
	{ text: 'During the period', value: 'During' },
	{ text: 'Before attending the course', value: 'Before' },
]

const CourseExperience = () => {
	const [selectedTab, setSelectedTab] = useState('Before')

	return (
		<Wrapper>
			<DefaultCard>
				<CardContent>
					<CardTitle title='Course Experience' titleShadow='Experience' />
					<Tabs
						tabs={TABS}
						selectedTab={selectedTab}
						onTabChange={setSelectedTab}
					/>
					<TabContent>
						<Image
							src={CourseExperienceProductFactory}
							alt='Course Experience Product Factory logo'
						/>
						{selectedTab === 'Before' && (
							<Paragraph>
								This course has been attempted by zero people who are eager to
								learn product design, especially user experience and user
								interface, so it is not a prerequisite, but due to the limited
								capacity of the priority course with early enrolled people,
								others can participate in future courses. . <br /> Obviously,
								the ability to use tools like Adobe Photoshop and Adobe
								Illustrator as well as Microsoft Word, Excel tools, and of
								course a lot of enthusiasm and energy,
							</Paragraph>
						)}
						{selectedTab === 'After' && (
							<Paragraph>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet facere quisquam est, qui dolorem quisquam est, qui
								dolorem possimus.
							</Paragraph>
						)}
						{selectedTab === 'During' && (
							<Paragraph>
								At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blanditiis praesentium voluptatum deleniti atque corrupti quos
								dolores et quas molestias excepturi sint occaecati cupiditate
								non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem
								rerum facilis est et expedita distinctio. Nam libero tempore,
								cum soluta nobis est eligendi optio cumque nihil impedit quo
								minus id quod maxime placeat facere possimus.
							</Paragraph>
						)}
					</TabContent>
				</CardContent>
			</DefaultCard>
		</Wrapper>
	)
}

export default CourseExperience
