import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../components/home/hero'
import Questions from "../components/home/questions"
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import FloatingShapes from '../components/ambientBackground/ambientBackground'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Benny Zhao | Home</title>
      </Head>
      <section className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <FloatingShapes/>
      </section>
      <section className="min-h-screen flex flex-col">
        <Questions />
        <Footer />
      </section>
    </>
  )
}

export default Home

