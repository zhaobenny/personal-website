import type { NextPage } from 'next'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Benny Zhao | Home</title>
      </Head>
      <AboutMe/>
    </>
  )
}

export default Home
