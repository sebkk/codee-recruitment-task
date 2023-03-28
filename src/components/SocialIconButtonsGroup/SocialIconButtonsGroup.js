import {
	InstagramIcon,
	FacebookIcon,
	TwitterIcon,
	WhiteFacebookIcon,
	WhiteInstagramIcon,
	WhiteTwitterIcon,
} from '../icons'
import { Wrapper } from './SocialIconButtonsGroup.styled'
import IconButton from './IconButton'

const SOCIAL_ICONS = [
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

const WHITE_SOCIAL_ICONS = [
	{
		icon: <WhiteFacebookIcon />,
		social: 'facebook',
		href: 'https://www.facebook.com/',
	},
	{
		icon: <WhiteTwitterIcon />,
		social: 'twitter',
		href: 'https://twitter.com/',
	},
	{
		icon: <WhiteInstagramIcon />,
		social: 'instagram',
		href: 'https://www.instagram.com/',
	},
]

const SocialIconButtonsGroup = ({
	orientationVertical = false,
	isWhite = false,
	gap,
}) => {
	const icons = isWhite ? WHITE_SOCIAL_ICONS : SOCIAL_ICONS

	return (
		<Wrapper gap={gap} orientationVertical={orientationVertical}>
			{icons.map(({ icon, social, href }) => (
				<IconButton key={social} href={href}>
					{icon}
				</IconButton>
			))}
		</Wrapper>
	)
}

export default SocialIconButtonsGroup
