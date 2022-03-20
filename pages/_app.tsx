import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.scss'
import {MainLayout} from '../components/layouts/MainLayout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SSRProvider>
  )
  

}

export default MyApp
