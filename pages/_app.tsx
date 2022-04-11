import Head from 'next/head';
import '../public/styles/globals.scss';
import type { AppProps } from 'next/app';
import { ModalProvider } from '../context/ModalContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
export default App;
