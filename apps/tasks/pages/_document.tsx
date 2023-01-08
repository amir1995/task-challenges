import type { DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '@/next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default class MyDocument extends Document<Props> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale} dir={currentLocale === 'fa' ? 'rtl' : 'ltr'}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#141414" />
        </Head>
        <body className="bg-neutral-080 text-neutral-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
