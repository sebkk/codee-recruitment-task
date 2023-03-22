import Image from 'next/image'
import styled from 'styled-components'

import { OrangeButton, DefaultCard } from '@/components'
import ProductDesignCoursePicture from '@/pictures/ProductDesignCoursePicture.png'

const Wrapper = styled.div`
	display: flex;
	gap: 80px;
`

const SideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	flex: 1;

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

const ProductDesignCourse = () => {
	return (
		<DefaultCard>
			<Wrapper>
				<SideWrapper>
					<HeaderTypography>Product Design Course</HeaderTypography>
					<span>
						Learn how design thinking, user research, business vision and
						marketing, and finally designing and creating real digital products
						for real users.
					</span>
					<OrangeButton text='Start Register' />
				</SideWrapper>
				<Image
					src={ProductDesignCoursePicture}
					alt='Product Design Course Picture'
				/>
			</Wrapper>
		</DefaultCard>
	)
}

export default ProductDesignCourse
