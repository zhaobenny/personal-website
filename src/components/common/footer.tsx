import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full mt-auto text-grey-500 dark:text-grey-400 backdrop-blur">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex font-medium items-center md:justify-start justify-center">
          <Image src="/logo.png" alt='A simple image of a poorly drawn bubble tea, probably using MS Paint.' height={35} width={35} />
          <span className="ml-3 text-xl">Bubbletea.party</span>
        </div>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Benny Zhao —
          <a href="https://github.com/zhaobenny" className="text-gray-500 ml-1 umami--click--footer-link" target="_blank" rel="noopener noreferrer">@zhaobenny</a>
        </p>
      </div>
    </footer>
  );
}

