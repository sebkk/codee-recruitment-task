import { useField } from 'formik'

import { StyledInput, ErrorMessage } from './Input.styled'

const Input = ({ name, ...rest }) => {
	const [field, meta] = useField(name)

	return (
		<>
			<StyledInput {...field} {...rest} />
			{meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
		</>
	)
}

export default Input
