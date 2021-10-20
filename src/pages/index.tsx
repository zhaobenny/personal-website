import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Hero from '../components/home/hero'
import Questions from "../components/home/questions"
const Contact: any = dynamic(
  () => import("../components/home/contact"), { loading: () => <p>...</p> });


const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Benny Zhao | Home</title>
      </Head>
      <Hero />
      <Questions />
      <Contact />
    </section>
  )
}

export default Home

