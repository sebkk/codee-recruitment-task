import Head from 'next/head'
import Image from 'next/image'

import styled from 'styled-components'

import { Navbar, Footer } from '@/components'
import {
	ProductDesignCourse,
	AboutUs,
	CourseExperience,
	Sessions,
	Masters,
	Faq,
	CourseFee,
	ListOfHeadings,
	Projects,
	Schedule,
} from '@/content'

import GlobalStyles from './Global.styled'

const MainContainer = styled.main`
	width: 100%;
`

const MastersSection = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 50%,
		rgba(250, 250, 250, 1) 50%
	);
	padding-bottom: 50px;

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
	padding: 100px 0;
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
	padding: 90px 0 165px;
	width: 100%;

	> div {
		width: 100%;
	}
`

const ListOfHeadingsSection = styled.section`
	background-color: #000000;
	display: flex;
	justify-content: center;
	width: 100%;
`

const ProjectsSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 143px 0;
`

const ScheduleSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 140px 0 115px;
	background-color: #fafafa;
	width: 100%;
`

export default function Home() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<GlobalStyles />
				<ProductDesignCourse />
				<AboutUs />
				<CourseExperience />
				<Sessions />
				<Masters />
				<Faq />
				<CourseFee />
				<ListOfHeadings />
				<Projects />
				<Schedule />
			</MainContainer>
			<Footer />
		</>
	)
}
