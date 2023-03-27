import { useState, useCallback, useEffect } from 'react'

import { BREAKPOINTS_VALUES } from '@/theme'

export const useCheckScreen = () => {
	const [screenWidth, setScreenWidth] = useState(window?.innerWidth)

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

	const isSmallDevice = screenWidth < BREAKPOINTS_VALUES.tablet

	return {
		screenWidth,
		isSmallDevice,
	}
}
