import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const MasterName = styled.h6`
	margin: 35px 0 20px;
	font-size: 20px;
	width: fit-content;
`

const MasterPosition = styled.span`
	font-size: 16px;
`

const Master = ({ master }) => {
	const { name, picture, position } = master

	return (
		<Wrapper>
			<Image width={200} height={200} src={picture} alt={name} />
			<MasterName>{name}</MasterName>
			<MasterPosition>{position}</MasterPosition>
		</Wrapper>
	)
}

export default Master
