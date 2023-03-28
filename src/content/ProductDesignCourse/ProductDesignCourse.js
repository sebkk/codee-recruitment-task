import Image from 'next/image'

import UiuxPicture from '@/pictures/UiuxPicture.png'
import { OrangeButton, DefaultCard } from '@/components'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import ProductDesignCoursePicture from '@/pictures/ProductDesignCoursePicture.png'
import { handleScroll } from '@/utils'

import {
	Container,
	Wrapper,
	SideWrapper,
	HeaderTypography,
	TitleWrapper,
	ImageWrapper,
	SubheaderTypography,
} from './ProductDesignCourse.styled'

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
