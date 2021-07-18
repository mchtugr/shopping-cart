import Head from 'next/head'
import { Provider } from 'react-redux'

import '../styles/globals.scss'
import { useStore } from '../store'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Head>
        <meta charset='UTF-8' />
        <meta name='description' content='High Quality T-shirts and Bags' />
        <meta
          name='keywords'
          contnet='T-shirt,Fashion,Bags,Man,Woman,Shopping'
        />
        <meta name='author' content='Murtaza Aylak' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Mun Shop - Custom Design T-shirts</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  )
}

export default MyApp
