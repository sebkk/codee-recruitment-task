import styled, { css } from 'styled-components'

const TabsStyled = styled.div`
	display: flex;
`

const TabButton = styled.button`
	padding: 22px 75px;
	background-color: #ffffff;
	border: #707070 1px solid;
	cursor: pointer;
	font-size: 18px;
	transition: 0.4s all;

	:hover {
		background-color: ${({ isSelectedTab }) => !isSelectedTab && '#a39f9f'};
	}

	${({ isLastTab }) =>
		isLastTab &&
		css`
			border-left: 0;
			border-radius: 0 16px 16px 0;
		`}

	${({ isFirstTab }) =>
		isFirstTab &&
		css`
			border-right: 0;
			border-radius: 16px 0 0 16px;
		`}

    ${({ isSelectedTab }) =>
		isSelectedTab &&
		css`
			background: black;
			color: #ffffff;
		`}
`

const Tabs = ({ tabs, onTabChange, selectedTab }) => {
	return (
		<TabsStyled>
			{tabs.map(({ text, value }, index) => (
				<TabButton
					isFirstTab={index === 0}
					isLastTab={index === tabs.length - 1}
					key={text}
					onClick={() => onTabChange(value)}
					isSelectedTab={selectedTab === value}
				>
					{text}
				</TabButton>
			))}
		</TabsStyled>
	)
}

export default Tabs
