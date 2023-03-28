const COLORS = {
	orange: '#F46632',
	black: '#000000',
	sectionBlack: '#111111',
	white: '#FFFFFF',
	lightGray: '#FAFAFA',
}

export const BREAKPOINTS_VALUES = {
	mobileM: 450,
	mobileL: 600,
	tablet: 768,
	navbarHamburger: 950,
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
			mobileM: `(min-width: ${BREAKPOINTS_VALUES.mobileM}px)`,
			mobileL: `(min-width: ${BREAKPOINTS_VALUES.mobileL}px)`,
			tablet: `(min-width: ${BREAKPOINTS_VALUES.tablet}px)`,
			smallDevice: `(min-width: ${BREAKPOINTS_VALUES.navbarHamburger}px)`,
			laptop: `(min-width: ${BREAKPOINTS_VALUES.laptop}px)`,
			desktop: `(min-width: ${BREAKPOINTS_VALUES.desktop}px)`,
		},
	},
}

export default theme
