import styled from 'styled-components'

import { COURSE_ACHIEVEMENTS } from '@/constants/CourseAchievements.constants'
import { ListItem } from '@/components'

const ListHeader = styled.h5`
	font-family: sans-serif;
	font-size: 21px;
	margin: 10px 0 0;
`

export const List = styled.ul`
	list-style: none;
	padding-left: 0;
`

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
