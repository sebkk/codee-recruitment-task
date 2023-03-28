import { COURSE_ACHIEVEMENTS } from '@/constants/CourseAchievements.constants'
import { ListItem } from '@/components'

import { ListHeader, List } from './CourseAchievements.styled'

const CourseAchievements = () => {
	return (
		<div>
			<ListHeader>
				What will be our achievements by participating in this course?
			</ListHeader>
			<List>
				{COURSE_ACHIEVEMENTS.map((achievement, index) => (
					<ListItem key={index}>{achievement}</ListItem>
				))}
			</List>
		</div>
	)
}

export default CourseAchievements
