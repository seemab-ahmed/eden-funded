import React from "react";
import { motion } from "framer-motion";
import CowImage from "../assets/images/cowImg.webp";
import starImage from "../assets/images/dots-bg.webp";
import globeBg from "../assets/images/globe-works.webp";
import GradientCircle from "../assets/images/help-circle.svg";
import { Link } from "react-router-dom";

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const HowWeHelp = () => {
  return (
    <motion.section 
      className="relative bg-[rgb(9,22,18)] z-0 pb-16 max-lg:pb-10 max-md:pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUpVariant}
    >
      <motion.div 
        className="relative z-[2] max-w-[1620px] w-[90%] mx-auto rounded-[80px] bg-[rgba(121,152,255,0.04)] backdrop-blur-[25px] border-2 border-[#B6D3FF] border-opacity-10 pt-[60px] pb-[105px] px-[4%] max-md:rounded-[30px]"
        variants={fadeInUpVariant}
      >
        {/* Help top */}
        <motion.div className="relative z-[4]" variants={fadeInUpVariant}>
          <motion.h2 
            className="text-white text-center text-[48px] font-medium leading-[130%] mb-[16px] max-lg:text-4xl max-md:text-3xl"
            variants={fadeInUpVariant}
          >
            How We Help Empower Traders
          </motion.h2>
          <motion.p 
            className="text-[18px] text-[#CFD6D3] leading-[1.4] text-center"
            variants={fadeInUpVariant}
          >
            How to become a Eden-fx trader
          </motion.p>
        </motion.div>

        {/* Help grid */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-[.8fr_1fr] gap-[90px] items-center text-white mt-32 max-xl:gap-16 max-xl:items-end max-xl:mt-20"
          variants={containerVariants}
        >
          {/* Assessment Left Content */}
          <motion.div variants={fadeInUpVariant}>
            <motion.h3 
              className="font-medium text-5xl leading-tight mb-5 relative z-[4] max-2xl:text-4xl max-xl:text-3xl max-md:text-2xl"
              variants={fadeInUpVariant}
            >
              Why Our Assessment Process?
            </motion.h3>
            <motion.div className="relative" variants={fadeInUpVariant}>
              <div className="overflow-hidden rounded-[28px] p-[30px] border border-[#B6D3FF] border-opacity-20 bg-[rgba(255,255,255,0.02)] backdrop-blur-[210px]">
                <motion.p 
                  className="text-xl font-syne text-white max-w-[490px] leading-[1.45] font-normal relative z-[4] max-xl:text-lg max-md:text-base"
                  variants={textLoadVariant}
                >
                  We've developed a distinctive Assessment Program designed to help achieve new or top-performing traders. We're keen to evaluate your skills and determine your potential for consistent profitability. Upon successful completion of our Assessment Program we will be happy to offer you a spot with our other Eden-FX funded traders.
                </motion.p>
                <motion.div variants={fadeInUpVariant}>
                  <Link
                    to="/"
                    className="btn text-white text-[16px] max-w-[339px] w-full border-[rgba(14,242,165,0.30)] border mt-6 bg-btn-bg relative z-[5]"
                  >
                    Traders Login
                  </Link>
                </motion.div>
                {/* Decorative Gradient Circle */}
                <div className="absolute inset-[auto_0_0_auto] w-[200px] block pointer-events-none">
                  <img
                    src={GradientCircle}
                    alt="gradient Circle"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute inset-[0px_0_auto] w-[80%] h-[1px] bg-line-bg mx-auto block"></div>
              <div className="absolute inset-[auto_0_0px] w-[80%] h-[1px] bg-line-bg mx-auto block"></div>
            </motion.div>
          </motion.div>
          {/* Right Content: Image */}
          <motion.div variants={fadeInUpVariant}>
            <img src={CowImage} alt="heart iamge" className="w-full h-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Star Image Overlay */}
      <div
        className="w-full h-full inset-0 absolute z-[3] pointer-events-none"
        style={{
          backgroundImage: `url(${starImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Globe Background */}
      <div className="w-[50%] max-w-[830px] inset-[-25%_0_auto_auto] absolute z-[1] max-xl:inset-[-15%_0_auto_auto] max-lg:inset-[-10%_0_auto_auto]">
        <img src={globeBg} alt="globe bg" />
      </div>
    </motion.section>
  );
};

export default HowWeHelp;
