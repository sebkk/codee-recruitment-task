import { useState, useCallback, useEffect } from 'react'

import { BREAKPOINTS_VALUES } from '@/theme'

export const useCheckScreen = () => {
	const [screenWidth, setScreenWidth] = useState(0)

	const getScreenWidth = useCallback(() => {
		const width = window?.innerWidth
		setScreenWidth(width)
	}, [])

	useEffect(() => {
		if (window) {
			window.addEventListener('resize', getScreenWidth)

			return () => {
				window.removeEventListener('resize', getScreenWidth)
			}
		}
	}, [getScreenWidth, screenWidth])

	useEffect(() => {
		if (window) {
			const width = window?.innerWidth
			setScreenWidth(width)
		}
	}, [])

	const isSmallMobile = screenWidth < BREAKPOINTS_VALUES.mobileL
	const isSmallDevice = screenWidth < BREAKPOINTS_VALUES.tablet
	const isNavbarHamburgerResolution =
		screenWidth < BREAKPOINTS_VALUES.navbarHamburger

	return {
		screenWidth,
		isSmallDevice,
		isNavbarHamburgerResolution,
		isSmallMobile,
	}
}
