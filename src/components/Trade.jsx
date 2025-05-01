import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import TradeBg from "../assets/images/trade-bg.png";
import DiscordVideo from "../assets/video/discord.webm";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const textLoadVariant = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 2, ease: "easeOut" } 
  },
};

const Trade = () => {
  return (
    <motion.section
      className="py-20 max-md:py-12 relative overflow-hidden"
      id="trade"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUpVariant}
    >
      <div className="container relative z-[10]">
        <motion.div
          className="py-[100px] px-10 text-center max-xl:py-10 max-lg:pt-[2%] max-md:px-6 max-md:pb-0 max-[420px]:pt-5  bg-cover bg-no-repeat max-sm:-mt-5"
          // className="rounded-[32px] py-[100px] px-10 bg-primaryLight border border-darkGray text-center max-md:px-6 max-md:py-10 bg-cover bg-no-repeat"
          // style={{ backgroundImage: `url(${TradeBg})` }}
          variants={fadeInUpVariant}
        >
          <motion.span
            className="text-lg font-normal leading-none text-customWhite 
            max-lg:text-base max-lg:mb-2 uppercase tracking-[0.9px] mb-4 max-md:text-sm max-sm:mb-1"
            variants={textLoadVariant}
          >
            Trade with Eden
          </motion.span>
          <motion.h2
            className="heading-2 text-5xl text-customWhite max-lg:text-4xl 
            mb-4 max-md:text-[30px] max-md:mb-2 max-sm:text-[26px] max-sm:leading-tight"
            variants={textLoadVariant}
          >
            Industry Leading Program Models
          </motion.h2>
          <motion.p
            className="text-customGray max-w-[600px] text-lg max-md:text-base w-full mx-auto mb-8 max-lg:mb-4
            max-sm:text-sm  max-[420px]:mt-7"
            variants={fadeInUpVariant}
          >
            Unlock up to 600K in maximum simulated funding and elevate your trading potential with expert strategies.
          </motion.p>
          <motion.div variants={fadeInUpVariant}>
            <Link
              to="https://dashboard.eden-fx.com/auth/sign-in"
              target="_blank"
              className="btn text-customDark max-w-[330px] w-full mx-auto bg-customGreen max-lg:h-[50px] max-md:h-[44px]"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 w-full h-full block z-0">
      <video autoPlay loop muted playsInline className="w-[100vw] h-auto object-cover mx-auto max-w-[1680px] xl:max-h-[600px]">
      <source src={DiscordVideo} type="video/webm" />
      <source src={DiscordVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </motion.section>
  );
};

export default Trade;
