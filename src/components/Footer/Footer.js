import { useCheckScreen } from '@/hooks'

import { FooterWrapper, StyledFooter, ContactNumber } from './Footer.styled'
import { SocialIconButtonsGroup } from '../SocialIconButtonsGroup'
import { ProductFactoryButton } from '../ProductFactoryButton'

const Footer = () => {
	const { isSmallDevice } = useCheckScreen()

	return (
		<FooterWrapper>
			<StyledFooter>
				<SocialIconButtonsGroup orientationVertical={isSmallDevice} />
				<ProductFactoryButton isBlack />
				<ContactNumber>
					Contact Number: {isSmallDevice && <br />}{' '}
					<a href='tel:+0912-1234567'>0912-1234567</a>
				</ContactNumber>
			</StyledFooter>
		</FooterWrapper>
	)
}

export default Footer
