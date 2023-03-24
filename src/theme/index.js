const COLORS = {
	orange: '#F46632',
	black: '#000000',
	sectionBlack: '#111111',
	white: '#FFFFFF',
	lightGray: '#FAFAFA',
}

const BREAKPOINTS_DEVICES = {
	mobileS: '320px',
	mobileM: '450px',
	mobileL: '600px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1360px',
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
			mobileS: `(min-width: ${BREAKPOINTS_DEVICES.mobileS})`,
			mobileM: `(min-width: ${BREAKPOINTS_DEVICES.mobileM})`,
			mobileL: `(min-width: ${BREAKPOINTS_DEVICES.mobileL})`,
			tablet: `(min-width: ${BREAKPOINTS_DEVICES.tablet})`,
			laptop: `(min-width: ${BREAKPOINTS_DEVICES.laptop})`,
			desktop: `(min-width: ${BREAKPOINTS_DEVICES.desktop})`,
		},
	},
}

export default theme
