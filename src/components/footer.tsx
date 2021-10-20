export default function Footer(){
    return (
      <footer className="w-full text-grey-500 dark:text-grey-400 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-black dark:text-white p-2 bg-transparent rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Bottom Text</span>
          </a>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2021 Benny Zhao —
            <a href="https://github.com/zhaobenny" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@zhaobenny</a>
          </p>
        </div>
      </footer>
    );
  }

