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

const HeaderSection = styled.section`
	background-color: #111111;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	gap: 50px;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 85%,
		rgba(250, 250, 250, 1) 85%
	);

	> * {
		max-width: 1460px;
	}
`

const AboutUsSection = styled.section`
	display: flex;
	justify-content: center;
	position: relative;
	padding: 290px 0 120px;
	background-color: #fafafa;
`

const CourseExperienceSection = styled.section`
	display: flex;
	justify-content: center;
	background: rgb(250, 250, 250);
	background: linear-gradient(
		180deg,
		rgba(250, 250, 250, 1) 50%,
		rgba(255, 255, 255, 1) 50%
	);
`

const SessionsSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 160px 0 190px;
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

const ListOfHeadingsSection = styled.section`
	background-color: #000000;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 135px 0;
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
		<MainContainer>
			<GlobalStyles />
			<HeaderSection>
				<Navbar />
				<ProductDesignCourse />
			</HeaderSection>
			<AboutUsSection>
				<AboutUs />
			</AboutUsSection>
			<CourseExperienceSection>
				<CourseExperience />
			</CourseExperienceSection>
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
			<ListOfHeadingsSection>
				<ListOfHeadings />
			</ListOfHeadingsSection>
			<ProjectsSection>
				<Projects />
			</ProjectsSection>
			<ScheduleSection>
				<Schedule />
			</ScheduleSection>
			<Footer />
		</MainContainer>
	)
}
