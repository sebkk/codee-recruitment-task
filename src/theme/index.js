const COLORS = {
	orange: '#F46632',
	black: '#000000',
	sectionBlack: '#111111',
	white: '#FFFFFF',
	lightGray: '#FAFAFA',
}

export const BREAKPOINTS_VALUES = {
	mobileS: 320,
	mobileM: 450,
	mobileL: 600,
	tablet: 768,
	laptop: 1024,
	desktop: 1360,
}

const theme = {
	colors: {
		black: COLORS.sectionBlack,
		gray: COLORS.lightGray,
		white: COLORS.white,
		cardBlack: COLORS.black,
		orange: COLORS.orange,
	},
	breakpoints: {
		devices: {
			mobileS: `(min-width: ${BREAKPOINTS_VALUES.mobileS}px)`,
			mobileM: `(min-width: ${BREAKPOINTS_VALUES.mobileM}px)`,
			mobileL: `(min-width: ${BREAKPOINTS_VALUES.mobileL}px)`,
			tablet: `(min-width: ${BREAKPOINTS_VALUES.tablet}px)`,
			laptop: `(min-width: ${BREAKPOINTS_VALUES.laptop}px)`,
			desktop: `(min-width: ${BREAKPOINTS_VALUES.desktop}px)`,
		},
	},
}

export default theme
