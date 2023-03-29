import * as yup from 'yup'

const initialValues = {
	email: '',
}

export const useListOfHeadingForm = () => {
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Please type valid email address')
			.min(5, 'Email should contain at least 5 characters')
			.max(50, 'Email should contain at most 50 characters.')
			.required('Email is required'),
	})

	const onSubmit = (values, { resetForm }) => {
		console.log('EMAIL SENT!', values)

		resetForm()
	}

	return { initialValues, validationSchema, onSubmit }
}
