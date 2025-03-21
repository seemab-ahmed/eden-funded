import React from "react";
import Logo from "../assets/images/eden-funding-logo.svg";
import TwitterLogo from "../assets/images/new-twitter-ft.svg";
import InstagramLogo from "../assets/images/instagram-ft.svg";
import YoutubeLogo from "../assets/images/youtube-ft.svg";
import FacebookLogo from "../assets/images/facebook-ft.svg";
import Powered from '../assets/images/powered.svg';
import Propicks from '../assets/images/propicks.svg';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const navLinks = [
    { name: "About Us", path: "/#about" },
    { name: "How it Works", path: "/#how-it-works" },
    // { name: "Challenges", path: "challenges" },
    { name: "FAQ", path: "/#faq" },
    { name: "Reviews", path: "/#reviews" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <footer className="pt-20 pb-14 max-md:pb-10">
      <div className="container relative">
        <div className="flex items-center justify-between gap-[60px] pb-6 border-b border-darkGray max-md:flex-col">
          <Link to="/">
            <img src={Logo} alt="Eden Funding Logo" className="w-32" />
          </Link>
          <nav>
            <ul className="flex items-center gap-10 max-md:flex-col max-md:gap-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <HashLink
                    to={item.path}
                    smooth={true} duration={500}
                    className="text-base font-normal leading-none text-white cursor-pointer"
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-10">
            <li>
              <Link to="/">
                <img src={TwitterLogo} alt="social-icons" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={InstagramLogo} alt="social-icons" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={FacebookLogo} alt="social-icons" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={YoutubeLogo} alt="social-icons" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-6 pb-6 lg:pb-16 flex items-center justify-between max-md:flex-col max-md:gap-1 max-md:pb-3">
          <Link to="https://eden-funding.com/tc/" target="_blank" className="text-sm font-normal leading-none text-[#6F7572]">
            Terms And Conditions
          </Link>
          <ul className="flex items-center gap-8 max-md:flex-col max-md:gap-1">
            <li>
              <Link
                to="https://eden-funding.com/privacy-policy/" target="_blank"
                className="text-sm font-normal leading-none text-[#6F7572]"
              >Privacy Policy</Link>
            </li>
            <li>
              <Link
                to="https://eden-funding.com/vfa/"
                target="_blank"
                className="text-sm font-normal leading-none text-[#6F7572]"
              >Virtual Funded Agreement</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-1.5 items-center  max-md:mx-auto max-md:mt-2 max-md:justify-center max-md:inset-0">
          <img src={Powered} alt="powered" className={`max-w-[90px] `} />
          <img src={Propicks} alt="propicks" className={`max-w-[25px]`} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
