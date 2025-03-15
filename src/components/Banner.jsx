import React from "react";
import { Link } from "react-router-dom";
import YoutubeLogo from "../assets/images/twitter.svg";
import FacebookLogo from "../assets/images/instagram.svg";
import TwitterLogo from "../assets/images/youtube.svg";
import InstagramLogo from "../assets/images/facebook.svg";
import ArrowDown from "../assets/images/scroll-down.svg";
import BannerImg from "../assets/images/banner-bg.webp";
import starImage from "../assets/images/dots-bg.webp";

const Banner = ({
  preheader = "Welcome to Eden Funding",
  heading = "Unlock Up To 500k",
  description = "In Simulated Funding, Powered By MT5",
  btnText = "Start",
  isHome = false,
}) => {
  return (
    <section
      className="flex justify-center items-center pt-28 xl:pt-[176px] pb-10 xl:pb-[100px] max-md:pb-14 bg-cover bg-no-repeat relative lg:h-[100vh] lg:max-h-[870px]"
      style={{
        background: `#091612`,
        backgroundImage: `
          linear-gradient(to bottom, rgba(9, 22, 18, 0) 0%, #091612 80%), 
          url(${BannerImg})`,
        backgroundPosition: "center center, center 10%",
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="container relative h-full z-[3] flex justify-center items-center flex-col">
        <div className="max-w-[1000px] w-[90%] mx-auto py-10 lg:py-16 xl:py-[90px] px-14 max-md:px-0 max-md:w-full">
          {/* Social Icons */}
          <ul className="absolute top-0 right-0 gap-2.5 hidden lg:grid">
            <li>
              <Link to="/">
                <img src={TwitterLogo} alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={InstagramLogo} alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={YoutubeLogo} alt="Youtube" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={FacebookLogo} alt="Facebook" />
              </Link>
            </li>
          </ul>

          {/* Banner Content */}
          <div className={`text-center ${isHome? "max-w-[365px]" : ""} mx-auto w-full`}>
            <span className="stroke-text text-sm md:text-base xl:text-lg font-normal leading-tight tracking-[0.9px] uppercase text-customWhite mb-3">
              {preheader}
            </span>
            <h1 className="text-5xl xl:text-[74px] font-medium leading-[1.1] text-customWhite mb-3 max-md:text-[36px]">
              {heading}
            </h1>
            <p className="text-lg xl:text-xl font-normal leading-snug text-customGray mb-8">
              {description}
            </p>
            <Link
              to="/"
              className="btn max-w-[228px] mx-auto h-14 bg-customGreen font-bold"
            >
              {btnText}
            </Link>
          </div>

          {/* Extra List (only on Home Page) */}
          {isHome && (
            <ul className="py-3 px-8 bg-customTransparentWhite flex items-center justify-center max-w-fit mx-auto gap-2.5 rounded-full mt-10 xl:mt-14 max-md:flex-col max-md:items-start max-md:rounded-lg max-md:px-3">
              <li className="flex gap-2.5 items-center text-base xl:text-[22px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full"></span>
                Total Payouts
              </li>
              <li className="flex gap-2.5 items-center text-base xl:text-[22px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full"></span>
                Payout Processing Time
              </li>
              <li className="flex gap-2.5 items-center text-base xl:text-[22px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full"></span>
                Challenge To Funded: Same Day
              </li>
            </ul>
          )}

          {/* Scroll Down Arrow */}
          <Link
            to="/"
            className="absolute left-0 bottom-0 items-center animate-bounce delay-700 hidden lg:flex"
          >
            <img src={ArrowDown} alt="Scroll Down" />
          </Link>
        </div>
      </div>

      {/* Star Image Overlay */}
      <div
        className="w-full h-full inset-0 absolute z-1"
        style={{
          backgroundImage: `url(${starImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "repeat",
        }}
      ></div>
    </section>
  );
};

export default Banner;
