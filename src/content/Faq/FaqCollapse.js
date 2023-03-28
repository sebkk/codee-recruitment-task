import { useState } from 'react'

import { AddIcon } from '@/components/icons'

import {
	CollapseWrapper,
	CollapseHeader,
	QuestionHeader,
	AddButton,
	CollapseContent,
} from './FaqCollapse.styled'

const FaqCollapse = ({ question }) => {
	const [openCollapse, setOpenCollapse] = useState(false)

	return (
		<CollapseWrapper>
			<CollapseHeader>
				<QuestionHeader>{question}</QuestionHeader>
				<AddButton
					openCollapse={openCollapse}
					onClick={() => setOpenCollapse(prev => !prev)}
				>
					<AddIcon />
				</AddButton>
			</CollapseHeader>
			<CollapseContent openCollapse={openCollapse}>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
					erat ultrices, semper ex sit amet, sagittis dolor. Nam vulputate
					fringilla nulla et lobortis. Cras mollis, mauris nec pellentesque
					rhoncus, diam nisi venenatis augue, interdum bibendum dolor ligula
					eget turpis. Fusce eu orci ut quam pellentesque vehicula. Integer eget
					leo quis urna tempus vulputate eu vel turpis. Interdum et malesuada
					fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Mauris
					viverra tellus ut quam fringilla, in condimentum leo iaculis. Maecenas
					vitae purus eu tellus luctus molestie. Mauris hendrerit id lectus eu
					eleifend. Donec congue cursus pulvinar.
				</span>
			</CollapseContent>
		</CollapseWrapper>
	)
}

export default FaqCollapse
