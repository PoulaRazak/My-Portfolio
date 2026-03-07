import Facebook from '../../assets/icons/facebook.svg?react';
import Linkedin from '../../assets/icons/linkedin.svg?react';
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative m-4 pb-4" style={{ borderBottom: '1px solid var(--border-medium)', color: 'var(--icon-color)' }}>

        {/* ===== Top bar ===== */}
        <div className="flex items-center justify-between">

          {/* Burger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden" style={{ color: 'var(--text)' }}
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
            <a href="/" className="rounded-full w-10 h-10 flex justify-center items-center" style={{ border: '1px solid var(--text)' }}>
              <h2 className="text-lg font-bold font-serif cursor-pointer" style={{ color: 'var(--text)' }}>PR</h2>
            </a>
          </div>

          <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='md:hidden'>
            {theme === 'dark' ? (
              <Icon icon="tdesign:mode-light" width="22" height="22" className="cursor-pointer text-yellow-400 hover:scale-110 transition-all duration-300" />
            ) : (
              <Icon icon="tdesign:mode-dark" width="22" height="22" className="cursor-pointer text-black hover:scale-110 transition-all duration-300" />
            )}
          </div>
          {/* ===== Desktop Navbar (as it is exactly) ===== */}
          <div className="hidden md:flex flex-row flex-wrap justify-between items-center w-full">

            <div className="flex flex-row gap-5 font-inter font-medium text-xs items-center">

              <div className="pl-4 pr-4" style={{ borderRight: '2px solid var(--border-medium)' }}>
                <a href="/" className="rounded-full w-10 h-10 flex justify-center items-center" style={{ border: '1px solid var(--text)' }}>
                  <h2 className="text-lg font-bold font-serif cursor-pointer" style={{ color: 'var(--text)' }}>PR</h2>
                </a>
              </div>

              <a href="#home" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>HOME</a>
              <a href="#about" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>ABOUT ME</a>
              <a href="#skills" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>SKILLS</a>
              <a href="#projects" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>PROJECTS</a>
              <a href="#services" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>WORK</a>
              <a href="#contact" className="tracking-widest hover:opacity-70 transition-opacity" style={{ color: 'var(--icon-color)' }}>CONTACT</a>
            </div>

            <div className="flex flex-row gap-2">

              <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="m-auto">
                {theme === 'dark' ? (
                  <Icon icon="tdesign:mode-light" width="22" height="22" className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300" />
                ) : (
                  <Icon icon="tdesign:mode-dark" width="22" height="22" className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-all duration-300" />
                )}
              </div>

              <div className="flex flex-row gap-2 pl-4" style={{ borderLeft: '2px solid var(--border-medium)' }}>
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
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-4 font-inter font-medium text-xs tracking-widest" style={{ color: 'var(--icon-color)' }}>

            <a href="#home" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">HOME</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">ABOUT ME</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">SKILLS</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">PROJECTS</a>
            <a href="#services" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">WORK</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity">CONTACT</a>

            <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
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