import '@/styles/globals.css'

import Cookies from "cookies"
import type {AppContext, AppProps} from 'next/app'
import App from "next/app"
import Head from "next/head"
import {appWithTranslation} from "next-i18next"

function MyApp(props: AppProps) {
  const {Component, pageProps} = props;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex"/>
        <meta name="googlebot" content="noindex"/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const {res, req, locale} = context.ctx;
  const ctx = await App.getInitialProps(context);

  if (req && res) {
    const cookies = new Cookies(req, res)
    cookies.set('NEXT_LOCALE', locale)
  }

  return {ctx};
};

export default appWithTranslation(MyApp)
