import Head from 'next/head'
import Image from 'next/image'

import styled from 'styled-components'

import Navbar from 'src/components/Navbar/Navbar'
import {
	ProductDesignCourse,
	AboutUs,
	CourseExperience,
	Sessions,
	Masters,
} from '@/content'

import GlobalStyles from './Global.styled'

const MainContainer = styled.main`
	width: 100%;
`

const HeaderSection = styled.section`
	background-color: #111111;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	gap: 50px;
	height: 780px;

	> * {
		max-width: 1460px;
	}
`

const SecondSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 125px;
	background-color: #fafafa;
	height: 1535px;
	padding-top: 268px;
`

const SessionsSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 280px 0 190px;
`

export default function Home() {
	return (
		<MainContainer>
			<GlobalStyles />
			<HeaderSection>
				<Navbar />
				<ProductDesignCourse />
			</HeaderSection>
			<SecondSection>
				<AboutUs />
				<CourseExperience />
			</SecondSection>
			<SessionsSection>
				<Sessions />
			</SessionsSection>
			<Masters />
		</MainContainer>
	)
}
