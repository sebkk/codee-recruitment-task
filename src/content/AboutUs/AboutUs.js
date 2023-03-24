import styled from 'styled-components'

import {
	DefaultCard,
	CardTitle,
	BlackCard,
	IconButton,
	SocialIconButtonsGroup,
} from '@/components'
import {
	ProductFactoryLogo,
	WhitePlayIcon,
	CircleLineIcon,
	EllipseLineIcon,
	SquareIcon,
} from '@/components/icons'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	padding-bottom: 60px;
`

const AboutParagraph = styled.p`
	font-size: 19px;
	line-height: 50px;
	margin: 0;
`

const TitleWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	gap: 80px;
	width: 100%;

	> div:last-of-type {
		position: relative;
		top: -25px;
	}
`

const CardWrapper = styled.div`
	position: absolute;
	z-index: 10;

	top: -250px;

	> div {
		position: relative;

		> svg {
			width: 207px;
			height: 88px;
		}
	}
`

const WhitePlayIconWrapper = styled.div`
	position: absolute;
	right: 32px;
	bottom: 32px;
`

const LinesWrapper = styled.div`
	position: absolute;
	bottom: -50px;

	> svg:last-of-type {
		position: absolute;
		bottom: 0;
		left: -30px;
	}
`

const SquareIconWrapper = styled.div`
	position: absolute;
	right: -39px;
	width: 40px;
	border: 2px solid #000000;
	bottom: 28%;

	> svg {
		position: absolute;
		right: -38px;
		top: -50%;
		translate: 0 -50%;
	}
`

const AboutUs = () => (
	<DefaultCard>
		<Wrapper>
			<div>
				<TopWrapper>
					<CardWrapper>
						<BlackCard padding='125px 195px'>
							<ProductFactoryLogo />
							<WhitePlayIconWrapper>
								<IconButton href=''>
									<WhitePlayIcon />
								</IconButton>
							</WhitePlayIconWrapper>
							<SquareIconWrapper>
								<SquareIcon />
							</SquareIconWrapper>
							<LinesWrapper>
								<CircleLineIcon />
								<EllipseLineIcon />
							</LinesWrapper>
						</BlackCard>
					</CardWrapper>
					<TitleWrapper>
						<CardTitle title='About us' titleShadow='About' />
						<SocialIconButtonsGroup orientationVertical />
					</TitleWrapper>
				</TopWrapper>
				<AboutParagraph>
					Today, given the economic and labor market conditions, the best and
					least risky way to invest is to invest in personal assets and skills.
					UI / UX Product Design Course covers all aspects of product design
					from product thinking and design to user-centric research and product
					research and business vision and digital marketing to product
					designers and creators, designing the end-user experience and
					interface of the product and how to deliver it. Includes.
				</AboutParagraph>
			</div>
		</Wrapper>
	</DefaultCard>
)

export default AboutUs
