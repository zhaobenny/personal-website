import Head from 'next/head'
import React from 'react';
import { Page, Document, pdfjs } from 'react-pdf'

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
  return (
    <>
      <Head>
        <title>Benny Zhao | Resume</title>
      </Head>
      <div className='flex flex-col items-center mt-3'>
        <a href='./Resume.pdf' download='./Resume.pdf' target='_blank'>
          <Document file="./Resume.pdf" className='border-gray-800 dark:border-0 border-4'>
            <Page pageNumber={1} />
          </Document>
          <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none rounded text-lg dark:mt-0 mt-3 hover:opacity-90" >Save as PDF</button>
        </a>
      </div>
    </>
  )
}


export default Resume;