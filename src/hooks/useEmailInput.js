import { useState } from 'react'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const MIN_CHARS = 5
const MAX_CHARS = 50

const CHARS_ERR_MESSAGE = `Email should have at least ${MIN_CHARS} and at most ${MAX_CHARS} characters.`
const EMAIL_VALID = 'Email should be a valid address email'

export const useEmailInput = () => {
	const [value, setValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const hasEnoughChars = value.length > MIN_CHARS && value.length < MAX_CHARS
	const isEmail = EMAIL_REGEX.test(value)

	const isValid = hasEnoughChars && isEmail

	console.log(isEmail)

	const renderErrorMessage = () => {
		if (!hasEnoughChars) return CHARS_ERR_MESSAGE
		if (!isEmail) return EMAIL_VALID
		if (!isEmail && !hasEnoughChars)
			return `${CHARS_ERR_MESSAGE} ${EMAIL_VALID}`
	}

	const onEmailChange = (e, val) => setValue(val ?? e.target.value)
	const onBlurChange = () => setIsTouched(true)

	const onChangeIsSubmitted = () => setIsSubmitted(true)

	return {
		value,
		onEmailChange,
		onBlurChange,
		isValid,
		isTouched,
		isSubmitted,
		renderErrorMessage,
		onChangeIsSubmitted,
	}
}
