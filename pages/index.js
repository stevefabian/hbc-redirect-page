import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hendersonville Bridge Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hendersonville Bridge Center" />
        <p className="description">
          Loading ... please wait...
        </p>
      </main>

      <Footer />
      <Script>
        document.location.href='https://www.bridgewebs.com/hendersonvillebridge/';
      </Script>
    </div>
  )
}
