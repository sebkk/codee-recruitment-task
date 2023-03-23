import Image from 'next/image'
import styled from 'styled-components'

const MasterName = styled.h6`
	margin: 35px 0 20px;
	font-size: 20px;
	font-family: sans-serif;
`

const MasterPosition = styled.span`
	font-size: 16px;
	font-family: sans-serif;
`

const Master = ({ master }) => {
	const { name, picture, position } = master

	return (
		<div>
			<Image width={200} height={200} src={picture} alt={name} />
			<MasterName>{name}</MasterName>
			<MasterPosition>{position}</MasterPosition>
		</div>
	)
}

export default Master
