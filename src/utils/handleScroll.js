import { SECTIONS_IDS } from '@/constants/Navbar.constants'

export const handleScroll = (e, href) => {
	e.preventDefault()

	const element = document.getElementById(href)
	element.scrollIntoView({
		behavior: 'smooth',
		block:
			href === SECTIONS_IDS.CLASSES || href === SECTIONS_IDS.MASTERS
				? 'start'
				: 'center',
	})
}
