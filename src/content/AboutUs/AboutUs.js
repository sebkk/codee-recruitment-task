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
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import {
	Container,
	Wrapper,
	TopWrapper,
	AboutParagraph,
	TitleWrapper,
	CardWrapper,
	WhitePlayIconWrapper,
	LinesWrapper,
	SquareIconWrapper,
} from './AboutUs.styled'

const AboutUs = () => (
	<Container id={SECTIONS_IDS.ABOUT_US}>
		<DefaultCard>
			<Wrapper>
				<section>
					<TopWrapper>
						<CardWrapper>
							<BlackCard>
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
						least risky way to invest is to invest in personal assets and
						skills. UI / UX Product Design Course covers all aspects of product
						design from product thinking and design to user-centric research and
						product research and business vision and digital marketing to
						product designers and creators, designing the end-user experience
						and interface of the product and how to deliver it. Includes.
					</AboutParagraph>
				</section>
			</Wrapper>
		</DefaultCard>
	</Container>
)

export default AboutUs
