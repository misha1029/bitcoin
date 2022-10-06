import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../../client/app/assets/styles/globals.scss'
import { store } from '../store/redux'

function MyApp({ Component, pageProps }: AppProps) {
	return(
	<Provider store={store}>
		<Component {...pageProps} />
	</Provider>)
}

export default MyApp
