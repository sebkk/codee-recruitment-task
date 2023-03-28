import Image from 'next/image'
import styled from 'styled-components'

import UiuxPicture from '@/pictures/UiuxPicture.png'
import { OrangeButton, DefaultCard } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import ProductDesignCoursePicture from '@/pictures/ProductDesignCoursePicture.png'
import { handleScroll } from '@/utils'

const Container = styled.article`
	background-color: #111111;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 110px;
	background: linear-gradient(
		180deg,
		rgba(17, 17, 17, 1) 85%,
		rgba(250, 250, 250, 1) 85%
	);

	> * {
		max-width: 1460px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding-top: 180px;
	}
`

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;

	> img {
		display: none;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> img {
			display: block;
			width: auto;
			height: 350px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 80px;

		> img {
			width: auto;
			height: 570px;
		}
	}
`

const SideWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 25px;

	> span {
		font-size: 16px;
		line-height: 25px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> span {
			font-size: 20px;
			line-height: 35px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> span {
			font-size: 23px;
			line-height: 55px;
		}
	}
`

const HeaderTypography = styled.h1`
	font-size: 30px;
	font-weight: bold;
	margin: 0;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 35px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 50px;
	}
`

const TitleWrapper = styled.section`
	display: flex;
	flex-direction: column;
`

const ImageWrapper = styled.figure`
	position: relative;
	margin: 0;

	> img {
		width: auto;
		height: 65px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> img {
			width: auto;
			height: 100px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		> img {
			width: auto;
			height: 127px;
		}
	}
`

const SubheaderTypography = styled.h3`
	position: absolute;
	margin: 7px 0 0;
	font-size: 20px;
	color: #8d8d8d;
	font-weight: normal;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 28px;
		margin-top: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 38px;
		margin-top: 28px;
	}
`

const ProductDesignCourse = () => {
	return (
		<Container id={SECTIONS_IDS.PRODUCT_DESIGN_COURSE}>
			<DefaultCard>
				<Wrapper>
					<SideWrapper>
						<TitleWrapper>
							<HeaderTypography>Product Design Course</HeaderTypography>
							<ImageWrapper>
								<SubheaderTypography>Product Factory</SubheaderTypography>
								<Image src={UiuxPicture} alt='ui/ux' />
							</ImageWrapper>
						</TitleWrapper>
						<span>
							Learn how design thinking, user research, business vision and
							marketing, and finally designing and creating real digital
							products for real users.
						</span>
						<OrangeButton
							text='Start Register'
							onClick={e => handleScroll(e, SECTIONS_IDS.LIST_OF_HEADINGS)}
						/>
					</SideWrapper>
					<Image
						src={ProductDesignCoursePicture}
						alt='Product Design Course Picture'
					/>
				</Wrapper>
			</DefaultCard>
		</Container>
	)
}

export default ProductDesignCourse
