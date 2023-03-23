import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	line-height: 120px;
`

const Title = styled.h3`
	font-size: 32px;
	font-family: sans-serif;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: 0;
	translate: -50% -50%;
	margin: 5px;
	line-height: 32px;
	white-space: nowrap;
`

const TitleShadow = styled.h2`
	font-size: 120px;
	margin: 0;
	font-family: sans-serif;
	opacity: 0.05;
	line-height: 100px;
`

const CardTitle = ({ title, titleShadow }) => {
	return (
		<Wrapper>
			<TitleShadow>{titleShadow ?? title}</TitleShadow>
			<Title titleShadow={titleShadow} title={title}>
				{title}
			</Title>
		</Wrapper>
	)
}

export default CardTitle
