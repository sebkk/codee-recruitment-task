import styled from 'styled-components'

import { InstagramIcon, FacebookIcon, TwitterIcon } from '../icons'

import IconButton from './IconButton'

const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ orientationVertical }) =>
		orientationVertical ? 'column' : 'row'};
	align-items: ${({ orientationVertical }) => !orientationVertical && 'center'};
	justify-content: ${({ orientationVertical }) =>
		orientationVertical && 'center'};
	gap: 40px;
`

const SOCIAL_BUTTONS = [
	{
		icon: <FacebookIcon />,
		social: 'facebook',
		href: 'https://www.facebook.com/',
	},
	{
		icon: <TwitterIcon />,
		social: 'twitter',
		href: 'https://twitter.com/',
	},
	{
		icon: <InstagramIcon />,
		social: 'instagram',
		href: 'https://www.instagram.com/',
	},
]

const SocialIconButtonsGroup = ({ orientationVertical = true }) => (
	<Wrapper orientationVertical={orientationVertical}>
		{SOCIAL_BUTTONS.map(({ icon, social, href }) => (
			<IconButton key={social} href={href}>
				{icon}
			</IconButton>
		))}
	</Wrapper>
)

export default SocialIconButtonsGroup
