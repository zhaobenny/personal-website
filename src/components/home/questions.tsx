import Link from "next/link";
import React from "react";

export default function Questions() {
  return (
    <div className="grow py-20 px-4 bg-pink-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="w-full md:w-1/3 text-3xl font-semibold leading-9 pb-2" id="FAQ">
          About Me
        </h2>
        <dl className="w-full md:w-2/3">
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              Who am I?
            </h3>
          </dt>
          <dd className="mb-14">
            <p className="text-justify">
              Hi there, I am Benny Zhao. <br/>
              I am a 4th year computing science student at Simon Fraser University that enjoys creating software to benefit people!
              <br/>
              My most recent work include developing a data portal for bee microbiome data as a co-op software developer at&nbsp;&nbsp;Agriculture and Agri-Food Canada.
              Check out my <Link href="/resume"><a className='underline hover:opacity-90'>resume</a></Link> for more details on that!
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What&apos;s with the cool domain name? 🎉
            </h3>
          </dt>
          <dd className="mb-14">
            <p className="text-justify">
              It&apos;s a fun and interesting name, and I also found a good deal for the domain name.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What is this website build on?
            </h3>
          </dt>
          <dd className="mb-14">
            <p className="text-justify">
              This site is built using Next.js and Tailwind CSS, and the source code is on this <a href="https://github.com/zhaobenny/personal-website"  className='underline hover:opacity-90'>Github repo</a>.
              <br />
              Behind the scenes, the entire website is containerized and deployed on a Ubuntu server.
              <br />
              ✅ Uptime stats available <a href="https://uptime.bubbletea.party/status/website"  className='underline hover:opacity-90  umami--click--goto-uptime'>here</a>.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              Where to check out next?
            </h3>
          </dt>
          <dd className="mb-14">
            <p className="text-justify">
              Check out my <Link href="/projects"><a className='underline hover:opacity-90'>projects</a></Link> page where you can see some of the recent things I been working on!
              <br/> Or take a look at my <Link href="/resume"><a className='underline hover:opacity-90'>resume</a></Link>!
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
}