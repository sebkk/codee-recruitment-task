import Image from 'next/image'
import styled from 'styled-components'

import { ListItem, Input } from '@/components'
import LetterPicture from '@/pictures/LetterPicture.png'
import SmallLetterPicture from '@/pictures/SmallLetterPicture.png'

const HeadingsWrapper = styled.div`
	width: 100%;
	max-width: 1460px;
	display: flex;
	color: #ffffff;
	gap: 90px;

	> div {
		flex: 0.5;
	}
`

const FormWrapper = styled.div`
	padding: 135px 0;

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

const PictureWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const SmallLetter = styled(Image)`
	position: absolute;
`

const ListOfHeadings = () => {
	return (
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
	)
}

export default ListOfHeadings
