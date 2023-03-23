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
	Faq,
	CourseFee,
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

const MastersSection = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;

	> div {
		width: 100%;
	}
`

const FaqSection = styled.section`
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 100px 0 175px;
	width: 100%;
`

const CourseFeeSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(250, 250, 250, 1) 50%,
		rgba(255, 255, 255, 1) 50%
	);
	padding: 90px 0 90px;
	width: 100%;

	> div {
		width: 100%;
	}
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
			<MastersSection>
				<Masters />
			</MastersSection>
			<FaqSection>
				<Faq />
			</FaqSection>
			<CourseFeeSection>
				<CourseFee />
			</CourseFeeSection>
		</MainContainer>
	)
}
