import styled from 'styled-components'

import { FAQ_LIST } from '@/constants/Faq.constants'
import FaqCollapse from './FaqCollapse'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 35px;
	width: 100%;
	max-width: 1460px;
	padding: 0 20px;
`

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
