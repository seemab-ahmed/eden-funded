import React from "react";
import Logo from "../assets/images/eden-funding-logo.svg";
import TwitterLogo from "../assets/images/new-twitter-ft.svg";
import InstagramLogo from "../assets/images/instagram-ft.svg";
import YoutubeLogo from "../assets/images/youtube-ft.svg";
import FacebookLogo from "../assets/images/facebook-ft.svg";
import { Link } from "react-scroll";

const Footer = () => {
  const navLinks = [
    { name: "About Us", path: "about" },
    { name: "How it Works", path: "how-it-works" },
    { name: "Challenges", path: "challenges" },
    { name: "FAQ", path: "faq" },
    { name: "Reviews", path: "reviews" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <footer className="pt-20">
      <div className="container">
        <div className="flex items-center justify-between gap-[60px] pb-6 border-b border-darkGray max-md:flex-col">
          <Link to="/">
            <img src={Logo} alt="Eden Funding Logo" className="w-32" />
          </Link>
          <nav>
            <ul className="flex items-center gap-10 max-md:flex-col max-md:gap-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    smooth={true} duration={500}
                    className="text-base font-normal leading-none text-white cursor-pointer"
                  >
                    {item.name}
                  </Link>
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
        <div className="pt-6 pb-11 flex items-center justify-between max-md:flex-col max-md:gap-1 max-md:pb-3">
          <span className="text-sm font-normal leading-none text-[#6F7572]">
            Terms And Conditions
          </span>
          <ul className="flex items-center gap-8 max-md:flex-col max-md:gap-1">
            <li>
              <Link
                to="/"
                className="text-sm font-normal leading-none text-[#6F7572]"
              >Privacy Policy</Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm font-normal leading-none text-[#6F7572]"
              >Virtual Funded Agreement</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
