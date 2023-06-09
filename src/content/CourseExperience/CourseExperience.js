import { useState } from 'react'
import Image from 'next/image'

import CourseExperienceProductFactory from '@/pictures/CourseExperienceProductFactory.png'
import { DefaultCard, CardTitle, Tabs } from '@/components'
import { TABS } from '@/constants/CourseExperience.constants'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import {
	Container,
	Wrapper,
	CardContent,
	TabContent,
	Paragraph,
} from './CourseExperience.styled'

const CourseExperience = () => {
	const [selectedTab, setSelectedTab] = useState('Before')

	return (
		<Container id={SECTIONS_IDS.COURSE_EXEPRIENCE}>
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
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
									quia voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi
									nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
									dolor sit amet facere quisquam est, qui dolorem quisquam est,
									qui dolorem possimus.
								</Paragraph>
							)}
							{selectedTab === 'During' && (
								<Paragraph>
									At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis praesentium voluptatum deleniti atque corrupti quos
									dolores et quas molestias excepturi sint occaecati cupiditate
									non provident, similique sunt in culpa qui officia deserunt
									mollitia animi, id est laborum et dolorum fuga. Et harum
									quidem rerum facilis est et expedita distinctio. Nam libero
									tempore, cum soluta nobis est eligendi optio cumque nihil
									impedit quo minus id quod maxime placeat facere possimus.
								</Paragraph>
							)}
						</TabContent>
					</CardContent>
				</DefaultCard>
			</Wrapper>
		</Container>
	)
}

export default CourseExperience
