import React, {useEffect, useState} from "react";
import {Link } from "react-router-dom";
import styles from "../../../styles/styles";
import heroImage from '../../../Assests/hero.png'
import MobileHero from "./MobileHero";
const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return <MobileHero/>;
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold track                                                                                                                                                                                                                -wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                Guriraline.com
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              You need it,
              <br className="hidden md:block" />
              We <span className="inline-block text-[#fed592]">got it!</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Introducing GuriraLine: Rwanda's pioneering e-commerce platform,
              transforming online shopping. With multi-vendor support,
              GuriraLine offers a diverse marketplace connecting buyers with
              local artisans and global brands. Experience convenience and
              empowerment in every click.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {/* Adding a button */}
            <button class="bg-[#29625d] hover:bg-[#fed592] text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >

              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-100">
            <img
              className="object-cover"
              src={heroImage}
              alt=""
            />
          </div>
      
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
