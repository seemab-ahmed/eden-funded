import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import YoutubeLogo from "../assets/images/twitter.svg";
import FacebookLogo from "../assets/images/instagram.svg";
import TwitterLogo from "../assets/images/youtube.svg";
import InstagramLogo from "../assets/images/facebook.svg";
// import starImage from "../assets/images/dots-bg.webp";
import BannerVideo from "../assets/video/banner_video.webm"; 

const MotionLink = motion(Link);

const socialIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Banner = ({
  preheader = "Welcome to Eden Funding",
  heading = "Unlock Up To 600k",
  description = "In Simulated Funding, Powered By Platform 5",
  btnText = "Start",
  isHome = false,
  ParaWidth = "max-w-[100%]"
}) => {
  return (
    <section className="relative flex justify-center items-center pt-28 xl:pt-[176px] pb-10 xl:pb-[100px] max-md:pb-14 bg-cover bg-no-repeat lg:h-[calc(100vh - 100px)] lg:max-h-[870px] lg:min-h-[700px]">
      

      <div className="container relative h-full z-[3] flex justify-center items-center flex-col">
        <div className="max-w-[1000px] w-[90%] mx-auto py-10 lg:py-16 xl:py-[90px] px-14 max-lg:px-0 max-md:w-full">
          {/* Social Icons */}
          <motion.ul
            className="absolute top-0 right-0 gap-2.5 hidden lg:grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.li variants={socialIconVariants}>
              <Link to="/">
                <img src={TwitterLogo} alt="Twitter" />
              </Link>
            </motion.li>
            <motion.li variants={socialIconVariants}>
              <Link to="/">
                <img src={InstagramLogo} alt="Instagram" />
              </Link>
            </motion.li>
            <motion.li variants={socialIconVariants}>
              <Link to="/">
                <img src={YoutubeLogo} alt="Youtube" />
              </Link>
            </motion.li>
            <motion.li variants={socialIconVariants}>
              <Link to="/">
                <img src={FacebookLogo} alt="Facebook" />
              </Link>
            </motion.li>
          </motion.ul>

          {/* Banner Content */}
          <div className={`text-center ${isHome ? "max-w-[365px]" : ""} mx-auto w-full`}>
            <motion.span
              className="stroke-text text-sm md:text-base xl:text-lg font-normal leading-tight tracking-[0.9px] uppercase text-customWhite mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {preheader}
            </motion.span>
            <motion.h1
              className="text-5xl xl:text-[74px] font-medium leading-[1.1] text-customWhite mb-3 max-md:text-[36px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className={`text-lg xl:text-xl font-syne font-normal leading-snug text-customGray mb-8 mx-auto ${ParaWidth}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              {description}
            </motion.p>
            <MotionLink
              to="https://dashboard.eden-fx.com/auth/sign-in"
              target="_blank"
              className="btn max-w-[228px] mx-auto h-14 bg-customGreen font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
              {btnText}
            </MotionLink>
          </div>
          {/* Extra List (only on Home Page) */}
        {isHome && (
            <ul className="py-3 px-8 bg-customTransparentWhite flex flex-wrap 
            items-center justify-center max-w-max  mx-auto gap-2.5 rounded-full 
            mt-10 xl:mt-14 max-md:flex-col max-md:items-start max-md:rounded-lg 
            max-lg:px-6 max-md:px-3">
              <li className="flex items-center text-base xl:text-[18px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full mr-2.5"></span>
                Total Payouts  <motion.span
      className="text-customGreen ms-1"
      animate={{ color: ['#0ef3a5', '#FFFFFF', '#0ef3a5'] }} 
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      $183,000
    </motion.span>
              </li>
              <li className="flex  items-center text-base xl:text-[18px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full mr-2.5"></span>
                Payout Processing Time <motion.span className="text-customGreen ms-1"
                 animate={{ color: ['#0ef3a5', '#FFFFFF', '#0ef3a5'] }} 
                 transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>11 hours</motion.span>
              </li>
              <li className="flex items-center text-base xl:text-[18px] font-normal leading-tight text-white">
                <span className="w-3 h-3 bg-customGreen rounded-full mr-2.5"></span>
                Challenge To Funded: Same Day
              </li>
            </ul>
          )}
        </div>
        
      </div>

      {/* Star Image Overlay */}
      {/* <div
        className="w-full h-full inset-0 absolute z-1"
        style={{
          backgroundImage: `url(${starImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "repeat",
        }}
      ></div> */}
      <div className="absolute inset-0 w-full h-full block">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center">
      <source src={BannerVideo} type="video/webm" />
      <source src={BannerVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </section>
  );
};

export default Banner;