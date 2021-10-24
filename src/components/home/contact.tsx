import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { useRef, useState } from 'react'
import axios from 'axios'


export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const hcaptchaRef = useRef(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (hcaptchaRef.current as any).execute(e)
  };

  const postMessage = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    setSubmitted(true)
    const data = {
      name,
      email,
      message,
      captchaCode,
    };
    axios.post('/api/contact', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setName("")
        setEmail("")
        setMessage("")
        alert("Thanks for the message! 👍");
      } else {
        setSubmitted(false)
        alert("Something went wrong 😥");
      }
    })
  }

  return (
    <section className="dark:text-white-100 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">Contact Me</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Relevant messages or questions, bug reports are welcome!</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="" onSubmit={e => handleSubmit(e)} id="contact">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm dark:text-gray-400">Name</label>
                  <input required type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                    id="name" name="name"
                    className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm dark:text-gray-400">Email</label>
                  <input required type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    id="email" name="email"
                    className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm dark:text-gray-400">Message</label>
                  <textarea required id="message" value={message}
                    onChange={(e) => { setMessage(e.target.value) }} name="message"
                    className="w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 dark:focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
            </div>
            <div className="p-2">
              <button disabled={submitted} type="submit"
                className={"flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none rounded text-lg umami--click--contact-submit"
                  + ((!message || !email || !name) || submitted ? "opacity-80" : "opacity-100")}>
                Submit</button>
              <HCaptcha size="invisible" ref={hcaptchaRef} sitekey="868616a4-952d-47ef-ab69-a4cbdf96a921" onVerify={(token) => postMessage(token)} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

