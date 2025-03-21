import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/eden-funding-logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Payouts", path: "/payouts" },
    { name: "Refer & Earn", path: "/refer-earn" },
    // For FAQ, use home page with a hash to the FAQ section.
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <header className="absolute left-0 top-0 w-full z-50 py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-10 xl:gap-[60px]">
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={Logo}
              alt="Eden Funding Logo"
              className="w-full max-w-36"
            />
          </NavLink>

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
          <nav
            className={`flex items-center justify-center flex-col py-4 lg:rounded-[80px] 
              lg:border lg:border-white lg:border-opacity-10 max-xl:py-3
              lg:flex-row gap-5 lg:gap-0 max-w-[557px] max-xl:max-w-[420px] max-lg:max-w-[calc(100%-200px)] 
              w-full fixed lg:static top-0 transition-all duration-500 h-full lg:h-auto
              max-lg:bg-primaryLight lg:bg-[rgba(14,243,165,0.10)] backdrop:blur-lg z-10 lg:z-auto
              max-lg:pt-28 max-lg:justify-start ${
                menuOpen ? "right-0" : "-right-full"
              } lg:flex`}
            style={{ backdropFilter: `blur(14px)` }}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-5 xl:gap-10">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {item.name === "FAQ" ? (
                    <HashLink
                      smooth
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm xl:text-base font-normal leading-none text-white cursor-pointer"
                    >
                      {item.name}
                    </HashLink>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm xl:text-base font-normal leading-none text-white cursor-pointer"
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            {/* Bottom Buttons for Mobile */}
            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:hidden">
              <li>
                <NavLink
                  to="https://dashboard.eden-fx.com/auth/sign-up"
                  target="_blank"
                  className="btn bg-gradient-to-b from-[rgba(11,49,36,0.20)] to-[rgba(15,164,113,0.20)] 
                    border border-[rgba(14,242,165,0.30)] text-white h-14 max-xl:h-11"
                  onClick={() => setMenuOpen(false)}
                >
                  Enter the Portal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://dashboard.eden-fx.com/auth/sign-in"
                  target="_blank"
                  className="btn bg-[rgba(52,20,57,0.04)] text-white h-14 border border-white border-opacity-10
                    max-xl:h-11"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Desktop Buttons */}
          <ul className="flex flex-col lg:flex-row items-center gap-4 max-lg:hidden">
            <li>
              <NavLink
                to="https://dashboard.eden-fx.com/auth/sign-up"
                  target="_blank"
                className="btn bg-gradient-to-b from-[rgba(11,49,36,0.20)] to-[rgba(15,164,113,0.20)] 
                    border border-[rgba(14,242,165,0.30)] text-white h-14 max-xl:h-11 max-xl:px-5"
                onClick={() => setMenuOpen(false)}
              >
                Enter the Portal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://dashboard.eden-fx.com/auth/sign-in"
                  target="_blank"
                className="btn bg-[rgba(52,20,57,0.04)] text-white h-14 border border-white border-opacity-10
                    max-xl:h-11 max-xl:px-5"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
