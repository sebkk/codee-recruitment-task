import { FAQ_LIST } from '@/constants/Faq.constants'

import { Wrapper } from './FaqList.styled'
import FaqCollapse from './FaqCollapse'

const FaqList = () => {
	return (
		<Wrapper>
			{FAQ_LIST.map((question, index) => (
				<FaqCollapse key={index} question={question} />
			))}
		</Wrapper>
	)
}

export default FaqList
