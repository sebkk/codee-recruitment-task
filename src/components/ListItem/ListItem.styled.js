import styled from 'styled-components'

export const Item = styled.li`
	font-size: 15px;
	line-height: 30px;
	padding-left: 40px;
	position: relative;
	margin: ${({ margin }) => margin || '25px 0 0'};

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 17px;
		line-height: 30px;
		margin: ${({ margin }) => margin || '45px 0 0'};
	}

	::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		translate: 0 -50%;
		width: 20px;
		height: 20px;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewBox='0 0 27 27'%3E%3Cg id='Group_330' data-name='Group 330' transform='translate(-1509 -4541)'%3E%3Ccircle id='Ellipse_194' data-name='Ellipse 194' cx='13.5' cy='13.5' r='13.5' transform='translate(1509 4541)' fill='%2329d089'/%3E%3Cpath id='Path_410' data-name='Path 410' d='M4.633,62.32,1.158,58.845,0,60l4.633,4.633,9.929-9.929L13.4,53.55Z' transform='translate(1515 4495.45)' fill='%23fff' stroke='%23fff' strokeWidth='1'/%3E%3C/g%3E%3C/svg%3E%0A");

		@media ${({ theme }) => theme.breakpoints.devices.desktop} {
			top: 0;
			translate: 0 20%;
			width: 27px;
			height: 27px;
		}
	}
`
