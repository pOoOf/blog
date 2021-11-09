import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.set({ page: url })
      ReactGA.pageview(url)
    }
    ReactGA.initialize('G-9T470HFNJE', { debug: process.env.NODE_ENV === 'development' });
    ReactGA.set({ page: router.pathname })
    ReactGA.pageview(router.pathname)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
