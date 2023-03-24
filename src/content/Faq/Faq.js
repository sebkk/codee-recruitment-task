import styled from 'styled-components'

import { CardTitle } from '@/components'

import FaqList from './FaqList'

const Container = styled.article`
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 100px 0;
	width: 100%;
`

const Faq = () => (
	<Container>
		<CardTitle title='Frequently Asked Questions' titleShadow='FAQ' />
		<FaqList />
	</Container>
)

export default Faq
