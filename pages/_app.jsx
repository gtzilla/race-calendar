import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/calendar.css'
import HTMLLayout from '../components/HTMLLayout'


import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)

}  

export default MyApp
