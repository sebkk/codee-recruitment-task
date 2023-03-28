import { useState } from 'react'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const useEmailInput = ({ maxChars = 50 }) => {
	const [value, setValue] = useState('')
	const [isBlur, setIsBlur] = useState(false)

	const hasEnoughChars = value.length > 0 && value.length < maxChars
	const isEmail = value.includes(EMAIL_REGEX)

	const isValid = hasEnoughChars && isEmail

	const onEmailChange = e => setValue(e.target.value)
	const onBlurChange = isBlurred => setIsBlur(isBlurred)

	return {
		value,
		onEmailChange,
		onBlurChange,
		isValid,
		isBlur,
	}
}
