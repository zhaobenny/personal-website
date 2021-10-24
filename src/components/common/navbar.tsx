import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="text-black-100 dark:text-gray-300 body-font backdrop-blur">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-black-100 dark:text-white mb-4 md:mb-0">
              <span className="ml-3 text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-fuchsia-600">Benny Zhao</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap gap-y-2 items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 dark:hover:text-white">Home</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 dark:hover:text-white">Projects</a>
            </Link>
            <Link href="/resume">
              <a className="mr-5 dark:hover:text-white">Resume</a>
            </Link>
            <Link href="/#">
              <a className="mr-5 dark:hover:text-white opacity-50">Setup</a>
            </Link>
            <button aria-label="Toggle Dark Mode" type="button" className="bg-pink-50 dark:bg-gray-800
            border-0  py-1 px-3 focus:outline-none
            hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-base md:mt-0 umami--click--dark-mode-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {mounted && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-4 h-4 text-yellow-500 dark:text-yellow-500">
                  {theme === "dark" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  )}
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}