import Image from 'next/image'

import { ListItem, Input } from '@/components'
import LetterPicture from '@/pictures/LetterPicture.png'
import SmallLetterPicture from '@/pictures/SmallLetterPicture.png'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'

import {
	Container,
	HeadingsWrapper,
	FormWrapper,
	HeadingsHeader,
	PictureWrapper,
	SmallLetter,
} from './ListOfHeadings.styled'

const ListOfHeadings = () => (
	<Container id={SECTIONS_IDS.LIST_OF_HEADINGS}>
		<HeadingsWrapper>
			<FormWrapper>
				<HeadingsHeader>Request a list of headings</HeadingsHeader>
				<p>
					Please enter your email address to receive course titles, the topics
					will be emailed to you.
				</p>
				<Input placeholder='Type your email' />
				<ListItem>
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
