import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/hero'
import Contact from '../components/contact'

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Benny Zhao | Home</title>
      </Head>
      <Hero />
      <div className="py-20 px-4 bg-pink-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            About Me
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Who am I?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-justify">
              I am currently an undergraduate student at Simon Fraser University, pursing a degree in Computing Science. As of now, I am in my 4th year.
              I always enjoyed tinkering with technology since I was young, and also wanted to tinker more with it. So when I found myself exposed to programming at a high school infomation technology class, I found that it was a passion of mine to follow into university.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What&apos;s with the cool domain name?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-justify">
                Bubble tea is good. Also, the renewal price was cheap.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Where to check out next?
              </h3>
            </dt>
            <dd className="mb-16">
              <p className="text-justify">
                Check out my <Link href="/projects"><a className='underline hover:opacity-90'>projects</a></Link> page where you can see some of the recent things I been working on!
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <Contact/>
    </section>
  )
}

export default Home
