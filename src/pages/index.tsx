import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/hero'
import Questions from "../components/home/questions"

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Benny Zhao | Home</title>
      </Head>
      <Hero />
      <Questions />
    </section>
  )
}

export default Home

