import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';
import PDFViewer from '../components/resume/pdf-viewer';


function useWidth() {
  const [widthSize, setWidthSize] = useState(0);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidthSize(window.innerWidth * 0.88);
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
  const size: number = useWidth();
  return (
    <section className="min-h-screen flex flex-col">
      <Head>
        <title>Benny Zhao | Resume</title>
      </Head>
      <Navbar/>
      <section className='flex flex-col items-center justify-center mt-2'>
        <PDFViewer size={size} />
        <a href='./Resume.pdf' download='Benny_Zhao_Resume.pdf'>
          <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none rounded text-lg dark:mt-0 mt-3 hover:opacity-90  umami--click--download-resume" >Save as PDF</button>
        </a>
      </section>
      <Footer/>
    </section>
  )
}


export default Resume;