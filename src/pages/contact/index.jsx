import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import ContactMe from '../../components/Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Portfolio - Cássio Rodrigues</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <ContactMe />
      <Footer />
    </div>
)}