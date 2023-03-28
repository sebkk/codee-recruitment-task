import { useState } from 'react'

import Image from 'next/image'

import { AboutIcon } from '@/components/icons'
import { SocialIconButtonsGroup } from '@/components'

import {
	Wrapper,
	MasterImageWrapper,
	MasterName,
	MasterPosition,
	MasterAction,
	AboutButton,
} from './Master.styled'

const Master = ({ master }) => {
	const [isHover, setIsHover] = useState(false)

	const { name, picture, position } = master

	return (
		<Wrapper>
			<MasterImageWrapper
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<MasterAction isHover={isHover}>
					<SocialIconButtonsGroup isWhite />
					<AboutButton>
						<AboutIcon />
						About Master
					</AboutButton>
				</MasterAction>
				<Image width={200} height={200} src={picture} alt={name} />
			</MasterImageWrapper>
			<MasterName>{name}</MasterName>
			<MasterPosition>{position}</MasterPosition>
		</Wrapper>
	)
}

export default Master
