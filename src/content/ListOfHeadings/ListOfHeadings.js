import Image from 'next/image'

import { ListItem, Input, OrangeButton } from '@/components'
import LetterPicture from '@/pictures/LetterPicture.png'
import SmallLetterPicture from '@/pictures/SmallLetterPicture.png'
import { SECTIONS_IDS } from '@/constants/Navbar.constants'
import { useEmailInput } from '@/hooks'

import {
	Container,
	HeadingsWrapper,
	FormWrapper,
	HeadingsHeader,
	PictureWrapper,
	SmallLetter,
	ButtonWrapper,
} from './ListOfHeadings.styled'

const ListOfHeadings = () => {
	const { value, onEmailChange, onBlurChange, isSubmitted } = useEmailInput()

	const onSubmit = e => {
		e.preventDefault()
		onEmailChange(e, '')
	}

	return (
		<Container id={SECTIONS_IDS.LIST_OF_HEADINGS}>
			<HeadingsWrapper>
				<FormWrapper>
					<HeadingsHeader>Request a list of headings</HeadingsHeader>
					<p>
						Please enter your email address to receive course titles, the topics
						will be emailed to you.
					</p>
					<Input
						value={value}
						onChange={onEmailChange}
						placeholder='Type your email'
						onFocus={onBlurChange}
						name='email'
						type='email'
						required
						minLength='5'
						maxLength='50'
					/>
					{isSubmitted && (
						<ListItem>
							Your email has been successfully registered, headlines will be
							sent to you soon.
						</ListItem>
					)}
					{!isSubmitted && (
						<ButtonWrapper>
							<OrangeButton onClick={onSubmit} type='submit' text='Register' />
						</ButtonWrapper>
					)}
				</FormWrapper>
				<PictureWrapper picture={LetterPicture}>
					<Image src={LetterPicture} alt='letter' />
					<SmallLetter src={SmallLetterPicture} alt='small letter' />
				</PictureWrapper>
			</HeadingsWrapper>
		</Container>
	)
}

export default ListOfHeadings
