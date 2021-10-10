import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <body>
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
              <p>
                Running existing machine learning projects in Valohai is very simple! Integration only requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only the configuration file.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What&apos;s with the cool domain name?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Where to check out next?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay for usage according to their own agreements. Valohai doesn&#x27;t charge anything on top of the per-user license fee. If you don&#x27;t have a cloud provider, you can use our AWS, GCP and Azure accounts, and we&#x27;ll only charge you for what you use.
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <section className="dark:text-white-100 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">Contact Me</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Relevant messages or questions, bug reports are welcome!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm dark:text-gray-400">Name</label>
                  <input type="text" id="name" name="name" className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm dark:text-gray-400">Email</label>
                  <input type="email" id="email" name="email" className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm dark:text-gray-400">Message</label>
                  <textarea id="message" name="message" className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg opacity-50" disabled>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default Home
