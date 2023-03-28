import { useState } from 'react'

import Image from 'next/image'
import styled from 'styled-components'

import { AboutIcon } from '@/components/icons'
import { SocialIconButtonsGroup } from '@/components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

const MasterImageWrapper = styled.figure`
	width: 150px;
	height: 150px;
	margin: 0;
	position: relative;
	align-self: left;

	> img {
		width: 100%;
		height: 100%;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		width: 200px;
		height: 200px;
	}
`

const MasterName = styled.h6`
	margin: 15px 0 10px;
	font-size: 15px;
	width: fit-content;
	text-align: left;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		margin: 35px 0 20px;
		font-size: 20px;
	}
`

const MasterPosition = styled.figcaption`
	font-size: 13px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 16px;
	}
`

const MasterAction = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	position: absolute;
	border-radius: 10px;
	background-color: ${({ isHover }) =>
		isHover ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'};
	opacity: ${({ isHover }) => (isHover ? 1 : 0)};
	transition: all 0.25s ease-in;
	pointer-events: ${({ isHover }) => (isHover ? 'auto' : 'none')};

	> div {
		gap: 20px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> div {
			gap: 30px;
		}
	}
`

const AboutButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	background: rgba(180, 180, 180, 0.7);
	font-size: 13px;
	padding: 10px;
	border-radius: 9px;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	cursor: pointer;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		gap: 15px;
		font-size: 15px;
		padding: 16px 14px;
	}
`

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
