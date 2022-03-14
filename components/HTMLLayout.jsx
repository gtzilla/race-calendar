import Nav from '../components/Nav'
import Head from 'next/head'

export default function HTMLLayout({children}) {
  return (
    <>
      <Head>
        <title>Race Calendar | Fixed Gear | Trackbike | Urban Alleycat Races</title>
      </Head>
      <div className="container">
        <Nav />
        <main>
          {/*<Component {...pageProps} />*/}
          {children}
        </main>
      </div>
    </>    
    )

}