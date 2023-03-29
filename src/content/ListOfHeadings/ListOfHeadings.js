import Image from 'next/image'
import { Formik, Form } from 'formik'

import { ListItem, Input, OrangeButton } from '@/components'
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
	ButtonWrapper,
} from './ListOfHeadings.styled'
import { useListOfHeadingForm } from './ListOfHeadings.logic'

const ListOfHeadings = () => {
	const { initialValues, validationSchema, onSubmit } = useListOfHeadingForm()

	return (
		<Container id={SECTIONS_IDS.LIST_OF_HEADINGS}>
			<HeadingsWrapper>
				<FormWrapper>
					<HeadingsHeader>Request a list of headings</HeadingsHeader>
					<p>
						Please enter your email address to receive course titles, the topics
						will be emailed to you.
					</p>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({ isValid }) => (
							<Form>
								<Input
									placeholder='Type your email'
									name='email'
									type='email'
								/>
								<ListItem>
									Your email has been successfully registered, headlines will be
									sent to you soon.
								</ListItem>
								<ButtonWrapper>
									<OrangeButton
										disabled={!isValid}
										type='submit'
										text='Register'
									/>
								</ButtonWrapper>
							</Form>
						)}
					</Formik>
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
