import styled from 'styled-components'

const Item = styled.li`
	font-size: 14px;
	line-height: 21px;
	padding-left: 40px;
	position: relative;
	margin: ${({ margin }) => margin || '45px 0 0'};

	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 30%;
		translate: 0 -30%;
		width: 27px;
		height: 27px;
		background-repeat: no-repeat;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 27 27'%3E%3Cg id='Group_330' data-name='Group 330' transform='translate(-1509 -4541)'%3E%3Ccircle id='Ellipse_194' data-name='Ellipse 194' cx='13.5' cy='13.5' r='13.5' transform='translate(1509 4541)' fill='%2329d089'/%3E%3Cpath id='Path_410' data-name='Path 410' d='M4.633,62.32,1.158,58.845,0,60l4.633,4.633,9.929-9.929L13.4,53.55Z' transform='translate(1515 4495.45)' fill='%23fff' stroke='%23fff' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A");
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 16px;
		line-height: 28px;
	}
`

const ListItem = ({ children, margin }) => (
	<Item margin={margin}>{children}</Item>
)

export default ListItem
