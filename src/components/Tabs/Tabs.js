import { TabsStyled, TabButton } from './Tabs.styled'

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
