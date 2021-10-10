import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

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
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    )
}
export default MyApp
