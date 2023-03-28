import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.article`
	background-color: ${({ theme }) => theme.colors.black};
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0 40px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 0;
	}
`

export const HeadingsWrapper = styled.section`
	width: 100%;
	max-width: 1460px;
	display: flex;
	color: ${({ theme }) => theme.colors.white};
	gap: 30px;

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		gap: 90px;
	}
`

export const FormWrapper = styled.section`
	padding: 50px 0;
	flex: 1;

	> p {
		margin: 0 0 40px;
		font-size: 15px;
	}

	> li {
		list-style: none;
		color: #acacac;
	}

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		padding: 80px 0;

		> li {
			font-size: 20px;

			&::before {
				top: -30%;
				translate: 0 -50%;
			}
		}
	}

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		flex: 0.5;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		padding: 135px 0 135px 20px;

		> p {
			margin: 0 0 48px;
			font-size: 20px;
		}

		> li {
			list-style: none;
			color: #acacac;
		}
	}
`

export const HeadingsHeader = styled.h3`
	font-size: 22px;
	margin: 0 0 22px;

	@media ${({ theme }) => theme.breakpoints.devices.mobileL} {
		font-size: 27px;
		margin: 0 0 27px;
	}

	@media ${({ theme }) => theme.breakpoints.devices.desktop} {
		font-size: 34px;
		margin: 0 0 34px;
	}
`

export const PictureWrapper = styled.figure`
	display: none;

	@media ${({ theme }) => theme.breakpoints.devices.tablet} {
		flex: 0.5;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		margin: 0;
		overflow: hidden;

		> img:first-of-type {
			width: auto;
			height: 100%;
		}
	}
`

export const SmallLetter = styled(Image)`
	position: absolute;
`
