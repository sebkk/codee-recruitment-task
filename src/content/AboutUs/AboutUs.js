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

const Container = styled.article`
	display: flex;
	justify-content: center;
	position: relative;
	padding: 210px 0 120px;
	background-color: ${({ theme }) => theme.colors.gray};

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		padding-top: 290px;
	}
`

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
`

const TopWrapper = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 60px;
	}
`

const AboutParagraph = styled.p`
	font-size: 17px;
	line-height: 35px;
	margin: 0;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 19px;
		line-height: 50px;
	}
`

const TitleWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	gap: 80px;
	padding-top: 100px;

	> div:last-of-type {
		position: relative;
		top: -25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding-top: 200px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		justify-content: flex-end;
		padding-top: 0;
	}
`

const CardWrapper = styled.aside`
	position: absolute;
	z-index: 10;
	left: 50%;
	translate: -50% 0;
	top: -200px;

	> div {
		position: relative;
		padding: 65px 85px;

		> svg {
			width: 207px;
			height: 88px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		top: -250px;

		> div {
			padding: 125px 195px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		left: unset;
		translate: unset;
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
	border: 2px solid ${({ theme }) => theme.colors.black};
	bottom: 28%;

	> svg {
		position: absolute;
		right: -38px;
		top: -50%;
		translate: 0 -50%;
	}
`

const AboutUs = () => (
	<Container>
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
