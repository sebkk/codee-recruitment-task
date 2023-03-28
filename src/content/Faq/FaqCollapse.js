import { useState } from 'react'
import styled, { css } from 'styled-components'

import { AddIcon } from '@/components/icons'

const CollapseWrapper = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	filter: drop-shadow(10px 10px 99px rgba(211, 211, 211, 0.16));
	border-radius: 26px;
`

const CollapseHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 25px 20px;
	gap: 15px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 34px 58px;
	}
`

const QuestionHeader = styled.h6`
	font-weight: normal;
	margin: 0;
	font-size: 13px;
	line-height: 25px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 15px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		font-size: 17px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.laptop} {
		font-size: 21px;
	}
`

const AddButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: 0.25s all;
	transform: ${({ openCollapse }) =>
		openCollapse ? 'rotate(45deg)' : 'rotate(0)'};

	> svg {
		width: 16px;
		height: auto;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> svg {
			width: 20px;
		}
	}
`

const CollapseContent = styled.div`
	background: ${({ theme }) => theme.colors.white};
	min-height: ${({ openCollapse }) => (openCollapse ? '220px' : '0')};
	border-radius: 0 0 26px 26px;
	transition: 0.25s all;
	padding: ${({ openCollapse }) => (openCollapse ? '10px 58px 10px ' : '0')};
	overflow: hidden;
	height: auto;
	line-height: 34px;

	> span {
		display: ${({ openCollapse }) => (openCollapse ? 'block ' : 'none')};
		font-size: 14px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		> span {
			font-size: 16px;
		}
	}
`

const FaqCollapse = ({ question }) => {
	const [openCollapse, setOpenCollapse] = useState(false)

	return (
		<CollapseWrapper>
			<CollapseHeader>
				<QuestionHeader>{question}</QuestionHeader>
				<AddButton
					openCollapse={openCollapse}
					onClick={() => setOpenCollapse(prev => !prev)}
				>
					<AddIcon />
				</AddButton>
			</CollapseHeader>
			<CollapseContent openCollapse={openCollapse}>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
					erat ultrices, semper ex sit amet, sagittis dolor. Nam vulputate
					fringilla nulla et lobortis. Cras mollis, mauris nec pellentesque
					rhoncus, diam nisi venenatis augue, interdum bibendum dolor ligula
					eget turpis. Fusce eu orci ut quam pellentesque vehicula. Integer eget
					leo quis urna tempus vulputate eu vel turpis. Interdum et malesuada
					fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Mauris
					viverra tellus ut quam fringilla, in condimentum leo iaculis. Maecenas
					vitae purus eu tellus luctus molestie. Mauris hendrerit id lectus eu
					eleifend. Donec congue cursus pulvinar.
				</span>
			</CollapseContent>
		</CollapseWrapper>
	)
}

export default FaqCollapse
