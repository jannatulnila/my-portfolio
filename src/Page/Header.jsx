import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import bgPattern from '../assets/bg-pattern.png';
import headerImg from '../assets/Header.png';

const Header = () => {
  return (
    <div className=" relative bg-gradient-to-br from-[#0f111e] to-[#1e203a] py-20 overflow-hidden ">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20 z-0"
        style={{ backgroundImage: `url(${bgPattern})` }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            <Typewriter
              words={ ['FRONTEND DEVELOPER']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1200}
            />
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            I am <span className="font-bold">Jannatul Fardous Nila.</span>  I am a passionate web developer crafting elegant, fast, and accessible websites using modern frontend technologies.
          </p>

          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="https://docs.google.com/presentation/d/1kPXanc3s-hniWnG6Gf6C_RJm5FPpkYf1gdkdVehpQes/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center  pb-4">
        <div className=' absolute -inset-3 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-70'></div>
          <img
            src={headerImg}
            alt="Header"
            className=" relative z-10  w-72 md:w-96 rounded-full   object-cover border-2 border-gray-50 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
