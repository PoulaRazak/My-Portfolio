import Facebook from '../../assets/icons/facebook.svg?react';
import Linkedin from '../../assets/icons/linkedin.svg?react';
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative m-4 border-b border-gray-300 pb-4 text-gray-600">

        {/* ===== Top bar ===== */}
        <div className="flex items-center justify-between">

          {/* Burger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo (in text on mobile – its natural place on desktop) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 cursor-pointer">
            <a href="/" className="border border-black rounded-full w-10 h-10 flex justify-center items-center">
              <h2 className="text-lg font-bold text-black font-serif cursor-pointer">PR</h2>
            </a>
          </div>

           <div onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <Icon icon="tdesign:mode-light" width="22" height="22" className="cursor-pointer text-yellow-400 hover:scale-110 transition-all duration-300"/>
                ) : (
                  <Icon icon="tdesign:mode-dark" width="22" height="22" className="cursor-pointer text-black hover:scale-110 transition-all duration-300" />
                )}
              </div>

          {/* ===== Desktop Navbar (as it is exactly) ===== */}
          <div className="hidden md:flex flex-row flex-wrap justify-between items-center w-full">

            <div className="flex flex-row gap-5 font-inter font-medium text-xs items-center">

              <div className="border-r-2 border-gray-300 pl-4 pr-4 ">
                <a href="/" className="border border-black rounded-full w-10 h-10 flex justify-center items-center">
                  <h2 className=" text-lg font-bold text-black font-serif cursor-pointer">PR</h2>
                </a>
              </div>

              <a href="#home" className="hover:text-black tracking-widest">HOME</a>
              <a href="#about" className="hover:text-black tracking-widest">ABOUT ME</a>
              <a href="#skills" className="hover:text-black tracking-widest">SKILLS</a>
              <a href="#projects" className="hover:text-black tracking-widest">PROJECTS</a>
              <a href="#services" className="hover:text-black tracking-widest">WORK</a>
              <a href="#contact" className="hover:text-black tracking-widest">CONTACT</a>
            </div>

            <div className="flex flex-row gap-2">
              
              <div onClick={() => setDarkMode(!darkMode)} className="m-auto">
                {darkMode ? (
                  <Icon icon="tdesign:mode-light" width="22" height="22" className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300"/>
                ) : (
                  <Icon icon="tdesign:mode-dark" width="22" height="22" className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                )}
              </div>
              
              <div className="flex flex-row gap-2  border-l-2 border-gray-300 pl-4">
              <a href="https://www.facebook.com/pepo.razak" target="_blank" className="hover:text-blue-600">
                <Facebook />
              </a>

              <a href="https://github.com/PoulaRazak" target="_blank" className="hover:text-black">
                <Icon icon="uil:github" width="24" height="24" />
              </a>

              <a href="https://www.linkedin.com/in/poula-razak-02a23b1b5" target="_blank" className="hover:text-blue-600">
                <Linkedin />
              </a>
              </div>
            </div>
          </div>

        </div>


        {/* ===== Mobile menu ===== */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 font-inter font-medium text-xs tracking-widest">

            <a href="#home" onClick={() => setOpen(false)} className="hover:text-black">HOME</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-black">ABOUT ME</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:text-black">SKILLS</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-black">PROJECTS</a>
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-black">WORK</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-black">CONTACT</a>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <a href="https://www.facebook.com/pepo.razak" target="_blank" className="hover:text-blue-600">
                <Facebook />
              </a>

              <a href="https://github.com/PoulaRazak" target="_blank" className="hover:text-black">
                <Icon icon="uil:github" width="24" height="24" />
              </a>

              <a href="https://www.linkedin.com/in/poula-razak-02a23b1b5" target="_blank" className="hover:text-blue-600">
                <Linkedin />
              </a>
            </div>

          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;