import Head from 'next/head'

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

const MainContainer = styled.main`
	width: 100%;
`

const Home = () => {
	return (
		<>
			<Head>
				<title>Product Factory</title>
				<meta property='og:title' content='Product Factory' key='title' />
				<meta name='description' content='Check our UI/UX courses' />
			</Head>
			<Navbar />
			<MainContainer>
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

export default Home
