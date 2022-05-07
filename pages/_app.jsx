import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/calendar.css'
import '../styles/race-hosts.css'


import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Race Calendar | Fixed Gear | Trackbike | Urban Alleycat Races</title>
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}  

export default MyApp
