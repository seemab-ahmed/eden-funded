import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/eden-funding-logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", path: "about" },
    { name: "How it Works", path: "how-it-works" },
    { name: "Challenges", path: "challenges" },
    { name: "FAQ", path: "faq" },
    { name: "Reviews", path: "reviews" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className="absolute left-0 top-0 w-full z-10 py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-10 xl:gap-[60px]">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Eden Funding Logo" className="w-32" />
          </Link>

          {/* Hamburger Button - Appears at lg */}
          <button
            className="lg:hidden text-white z-20 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>

          {/* Main Navigation */}
          <div
            className={`flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 max-w-[calc(100%-150px)] xl:max-w-[calc(100%-200px)] w-full fixed lg:static top-0 transition-all duration-500 h-full lg:h-auto bg-primaryLight lg:bg-transparent backdrop:blur-lg z-10 lg:z-auto  ${
              menuOpen ? "right-0" : "-right-full"
            } lg:flex`} style={{backdropFilter: `blur(14px)`}}
          >
            <nav>
              <ul className="flex flex-col lg:flex-row items-center gap-5 xl:gap-10">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      smooth={true} duration={500}
                      className="text-sm xl:text-base font-normal leading-none text-white cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex flex-col lg:flex-row items-center gap-4">
              <li>
                <Link
                  to="/"
                  className="btn bg-[rgba(255,255,255,0.05)] text-white h-11"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="btn bg-[#0EF3A5] text-[#131414] h-11"
                  onClick={() => setMenuOpen(false)}
                >
                  Start Challenge
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
