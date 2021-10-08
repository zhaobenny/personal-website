import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center md:space-x-32">
      <div className="text-black dark:text-white">
              <div className="text-2xl sm:text-4xl lg:text-6xl mt-2 h-10 font-semibold">
                <span className="wave">👋</span> Hello there,
              </div>
              <h1 className="text-3xl sm:text-6xl lg:text-8xl mt-5 font-semibold text-center">
                      I am Benny Zhao
              </h1>
              <div className="h-60 md:h-96"></div>
    </div>
</div>
  );
}
