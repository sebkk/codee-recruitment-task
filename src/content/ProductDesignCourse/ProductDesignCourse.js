import Image from 'next/image'
import styled from 'styled-components'

import UiuxPicture from '@/pictures/UiuxPicture.png'
import { OrangeButton, DefaultCard } from '@/components'
import ProductDesignCoursePicture from '@/pictures/ProductDesignCoursePicture.png'

const Wrapper = styled.div`
	display: flex;
	gap: 80px;

	> div:last-of-type {
		display: flex;
		justify-content: center;
		align-items: center;

		> img {
			/* width: auto; */
			/* height: auto; */
			/* max-width: 530px; */
			/* max-height: 570px; */
			/* object-fit: scale-down; */
		}
	}
`

const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	> span {
		font-size: 23px;
		line-height: 55px;
	}
`

const HeaderTypography = styled.h1`
	font-size: 50px;
	font-weight: bold;
	margin: 0;
	font-family: sans-serif;
`

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const ImageWrapper = styled.div`
	position: relative;
`

const SubheaderTypography = styled.h3`
	position: absolute;
	margin: 28px 0 0;
	font-size: 38px;
	font-family: sans-serif;
	color: #8d8d8d;
	font-weight: normal;
`

const ProductDesignCourse = () => {
	return (
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
						marketing, and finally designing and creating real digital products
						for real users.
					</span>
					<OrangeButton text='Start Register' />
				</SideWrapper>
				<div>
					<Image
						src={ProductDesignCoursePicture}
						alt='Product Design Course Picture'
					/>
				</div>
			</Wrapper>
		</DefaultCard>
	)
}

export default ProductDesignCourse
