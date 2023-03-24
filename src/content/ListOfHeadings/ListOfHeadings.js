import Image from 'next/image'
import styled from 'styled-components'

import { ListItem, Input } from '@/components'
import LetterPicture from '@/pictures/LetterPicture.png'
import SmallLetterPicture from '@/pictures/SmallLetterPicture.png'

const Container = styled.article`
	background-color: ${({ theme }) => theme.colors.black};
	display: flex;
	justify-content: center;
	width: 100%;
`

const HeadingsWrapper = styled.section`
	width: 100%;
	max-width: 1460px;
	display: flex;
	color: ${({ theme }) => theme.colors.white};
	gap: 90px;

	> div {
		flex: 0.5;
	}
`

const FormWrapper = styled.section`
	padding: 135px 0 135px 20px;

	> p {
		margin: 0 0 48px;
		font-size: 20px;
	}

	> li {
		list-style: none;
		color: #acacac;
		font-size: 20px;
	}
`

const HeadingsHeader = styled.h3`
	font-size: 34px;
	margin: 0 0 34px;
`

const PictureWrapper = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 0;
`

const SmallLetter = styled(Image)`
	position: absolute;
`

const ListOfHeadings = () => (
	<Container>
		<HeadingsWrapper>
			<FormWrapper>
				<HeadingsHeader>Request a list of headings</HeadingsHeader>
				<p>
					Please enter your email address to receive course titles, the topics
					will be emailed to you.
				</p>
				<Input placeholder='Type your email' />
				<ListItem margin='65px 0 0'>
					Your email has been successfully registered, headlines will be sent to
					you soon.
				</ListItem>
			</FormWrapper>
			<PictureWrapper picture={LetterPicture}>
				<Image src={LetterPicture} alt='letter' />
				<SmallLetter src={SmallLetterPicture} alt='small letter' />
			</PictureWrapper>
		</HeadingsWrapper>
	</Container>
)

export default ListOfHeadings
