import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '@/components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coches.com</title>
        <meta name="description" content="Prueba de código de Antonio González Gea para Coches.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Component { ...pageProps } />
    </>
  )
}
