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
      <nav className="">
          <header className="text-gray-300 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <span className="ml-3 text-xl">Benny Zhao</span>
              </a>
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-white">Home</a>
                <a className="mr-5 hover:text-white">Projects</a>
                <a className="mr-5 hover:text-white">Setup</a>
              </nav>
              <button aria-label="Toggle Dark Mode" type="button" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {mounted && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-4 h-4 text-yellow-500 dark:text-yellow-500">
                      {theme === "dark" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                      )}
                    </svg>
                  )}
          </button>
            </div>
        </header>
      </nav>

  );
}