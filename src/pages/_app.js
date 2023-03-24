import { ThemeProvider } from 'styled-components'

import theme from '@/theme'

import GlobalStyles from './Global.styled'

const App = ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Component {...pageProps} />
	</ThemeProvider>
)

export default App
