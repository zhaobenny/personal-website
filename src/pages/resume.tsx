import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react';
import { Page, Document, pdfjs } from 'react-pdf'


function useWidth() {
  const [widthSize, setWidthSize] = useState(1000);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidthSize(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return widthSize;
}

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
  const documentWrapperRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const size: number = useWidth();
  return (
    <>
      <Head>
        <title>Benny Zhao | Resume</title>
      </Head>
      <section className='flex flex-col items-center mt-2' ref={documentWrapperRef}>
        <a href='./Resume.pdf'>
          <Document file="./Resume.pdf" className='border-gray-800 dark:border-0 border-4'>
            <Page className="w-full" pageNumber={1} width={size / 2.5 || 500} />
          </Document>
        </a>
        <a href='./Resume.pdf' download='Benny_Zhao_Resume.pdf'>
          <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none rounded text-lg dark:mt-0 mt-3 hover:opacity-90" >Save as PDF</button>
        </a>
      </section>
    </>
  )
}


export default Resume;