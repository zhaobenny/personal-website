import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start)
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)
    return () => {
      Router.events.off('routeChangeStart', NProgress.start)
      Router.events.off('routeChangeComplete', NProgress.done)
      Router.events.off('routeChangeError', NProgress.done)
    }
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
