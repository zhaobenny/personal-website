import React from "react";
import FloatingShapes from "./floatingShapes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEdit, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Hero() {
  return (
    <>
      <div className="h-screen flex justify-center items-center md:space-x-32 z-10 backdrop-blur-sm">
        <div className="text-black dark:text-white">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl mt-2 h-10 font-semibold">
            <span className="wave">👋</span> Hello there,
          </h2>
          <h1 className="text-3xl sm:text-6xl lg:text-8xl md:mt-5 pb-5 font-semibold text-center gradient h-min-content">
            I am Benny Zhao
          </h1>
          <div className="text-xl sm:text-2xl lg:text-4xl text-center space-x-6 h-10 font-semibold">
            <a href="https://github.com/zhaobenny"><FontAwesomeIcon icon={faGithub} className="hover:opacity-50" /></a>
            <a href="https://www.linkedin.com/in/zhaobenny00/"><FontAwesomeIcon icon={faLinkedin} className="hover:opacity-50" /></a>
            <AnchorLink href='#contact'><FontAwesomeIcon icon={faEdit} className="hover:opacity-50"/></AnchorLink>
            <a href="mailto:benny_zhao@sfu.ca"><FontAwesomeIcon icon={faEnvelope} className="hover:opacity-50"/></a>
          </div>
          <div className="mt-56 md:mt-96 cen text-xl sm:text-2xl lg:text-4xl text-center space-x-6 h-10 font-semibold">
            <AnchorLink href='#FAQ'><FontAwesomeIcon icon={faChevronDown} className="bounce opacity-75 mt-20 mx-auto hover:opacity-10"/></AnchorLink>
          </div>
        </div>
      </div>
      <FloatingShapes />
    </>
  );
}
