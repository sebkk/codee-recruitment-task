import { Title, TitleShadow, Wrapper } from './CardTitle.styled'

const CardTitle = ({ title, titleShadow }) => (
	<Wrapper>
		<TitleShadow>{titleShadow ?? title}</TitleShadow>
		<Title titleShadow={titleShadow} title={title}>
			{title}
		</Title>
	</Wrapper>
)

export default CardTitle
