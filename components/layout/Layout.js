import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import useLocale from 'hooks/useLocale';

export default function Layout({ title, children, header = true, footer = true }) {
  const { dir } = useLocale();

  return (
    <>
      <Head>
        <title>MillMint Analytics{title && ` - ${title}`}</title>
      </Head>

      {header && <Header />}
      <main className="container" dir={dir}>
        {children}
      </main>
      {footer && <Footer />}
      <div id="__modals" dir={dir} />
    </>
  );
}
