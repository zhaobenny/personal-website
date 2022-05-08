import React from "react";
import FloatingShapes from "../ambientBackground/ambientBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
      <div className="flex grow justify-center items-center z-10 backdrop-blur-sm">
        <div className="text-black dark:text-white font-semibold">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl select-none">
            <span className="wave font-normal">👋</span> Hello there,
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl md:mt-5 pb-5 select-none text-center text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-fuchsia-600">
            I am Benny Zhao
          </h1>
          <div className="text-3xl lg:text-5xl text-center space-x-8 sm:space-x-6 h-10">
            <a href="https://github.com/zhaobenny">
              <FontAwesomeIcon icon={faGithub} className="hover:opacity-50 umami--click--github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/zhaobenny00/">
              <FontAwesomeIcon icon={faLinkedin} className="hover:opacity-50 umami--click--linkedin-icon" />
            </a>
            <a href="mailto:benny_zhao@sfu.ca">
              <FontAwesomeIcon icon={faEnvelope} className="hover:opacity-50 umami--click--mail-icon" />
            </a>
          </div>
          <div className="p-20 sm:text-2xl lg:text-4xl text-center h-10">
            <AnchorLink href="#FAQ">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="animate-none md:animate-bounce opacity-75 mx-auto hover:opacity-10 umami--click--FAQ-button"
              />
            </AnchorLink>
          </div>
        </div>
      </div>
  );
}
