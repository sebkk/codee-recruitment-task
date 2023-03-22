import styled from 'styled-components'

import { DefaultCard, CardTitle } from '@/components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	/* padding-top: 290px; */
`

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`

const AboutParagraph = styled.p`
	font-size: 19px;
	line-height: 50px;
`

const TitleWrapper = styled.div`
	display: flex;
	gap: 80px;
`

const AboutUs = () => {
	return (
		<DefaultCard>
			<Wrapper>
				<div>
					<TopWrapper>
						<TitleWrapper>
							<CardTitle title='About us' titleShadow='About' />
						</TitleWrapper>
					</TopWrapper>
					<AboutParagraph>
						Today, given the economic and labor market conditions, the best and
						least risky way to invest is to invest in personal assets and
						skills. UI / UX Product Design Course covers all aspects of product
						design from product thinking and design to user-centric research and
						product research and business vision and digital marketing to
						product designers and creators, designing the end-user experience
						and interface of the product and how to deliver it. Includes.
					</AboutParagraph>
				</div>
			</Wrapper>
		</DefaultCard>
	)
}

export default AboutUs
