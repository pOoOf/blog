import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from "react-ga4";

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    }

    ReactGA.initialize('G-T96DWP1EPR');
    ReactGA.send({ hitType: "pageview", page: router.pathname });

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
