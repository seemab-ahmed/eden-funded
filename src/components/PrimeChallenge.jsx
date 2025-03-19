import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/eden-funding-logo.svg";
import Planet from "../assets/images/planet.webp";

// Data arrays
const instantFunding = [
  "Profit Target",
  "Drawdown Type",
  "Free Education",
  "Min Trading Days",
  "Scaling Plan",
  "Payouts",
  "100k Evolution",
];
const withEden = [
  "6-8%",
  "Balance Based",
  "✓",
  "0 Min Trading Days",
  "95% Profit Split",
  "Every 8 Days (Prime)",
  "$399",
];
const withOther = [
  "10%",
  "Equity Based",
  "X",
  "5 Min Trading Days",
  "80% Profit Split",
  "30 Days",
  "$599",
];

// Framer Motion variants
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

const PrimeChallenge = () => {
  return (
    <motion.section
      className="text-white py-[120px] max-md:py-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUpVariant}
    >
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <motion.h2
          className="text-5xl font-medium text-center max-md:text-4xl w-full max-w-[850px] leading-[1.2] mx-auto"
          variants={fadeInUpVariant}
        >
          How Does Our Prime Challenge Compare With Other Companies?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-xl:gap-6 relative z-[2] max-w-full mt-[83px] pt-[73px] pb-[80px] mx-auto px-[5%] text-center rounded-[80px] max-md:rounded-[40px] bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] border-opacity-10 bg-no-repeat max-2xl:px-[3%]"
          variants={containerVariants}
        >
          {/* Card 1: Unlock Instant Funding */}
          <motion.div
            className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg border border-[#B6D3FF] border-opacity-10 flex flex-col justify-between"
            variants={fadeInUpVariant}
          >
            <motion.h4
              className="text-[31px] font-medium mb-[20px] max-2xl:text-[28px] max-xl:text-2xl max-lg:text-xl"
              variants={textLoadVariant}
            >
              Unlock Instant Funding
            </motion.h4>
            <motion.ul className="flex flex-col gap-3" variants={containerVariants}>
              {instantFunding.map((item, index) => (
                <motion.li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                  variants={textLoadVariant}
                >
                  <span >{item}</span>
                  <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Card 2: When You Trade With (Eden Funding) */}
          <motion.div
            className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg border border-[#B6D3FF] border-opacity-10 flex flex-col justify-between"
            variants={fadeInUpVariant}
          >
            <motion.h4 className="text-[20px]" variants={textLoadVariant}>
              When You Trade With
            </motion.h4>
            <motion.img
              src={Logo}
              alt="Eden Funding Logo"
              className="w-32 mx-auto pt-2 pb-3"
              variants={fadeInUpVariant}
            />
            <motion.ul className="flex flex-col gap-3" variants={containerVariants}>
              {withEden.map((item, index) => (
                <motion.li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                  variants={textLoadVariant}
                >
                  <span>{item}</span>
                  <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Card 3: When You Trade With (Other) */}
          <motion.div
            className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg border border-[#B6D3FF] border-opacity-10 flex flex-col justify-between"
            variants={fadeInUpVariant}
          >
            <motion.h4 className="text-xl mb-4" variants={textLoadVariant}>
              When You Trade With
            </motion.h4>
            <motion.h5
              className="text-center text-[31px] font-medium mb-4 max-2xl:text-[28px] max-xl:text-2xl max-lg:text-xl"
              variants={textLoadVariant}
            >
              Other
            </motion.h5>
            <motion.ul className="flex flex-col gap-3" variants={containerVariants}>
              {withOther.map((item, index) => (
                <motion.li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                  variants={textLoadVariant}
                >
                  <span>{item}</span>
                  <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          {/* Decorative Line */}
          <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
        </motion.div>
      </div>
      <div className="w-[50%] max-w-[830px] inset-[auto_auto_-10%_0] absolute z-[0] max-xl:inset-[auto_auto_-10%_0] max-lg:inset-[auto_auto_-6%_0]">
        <img src={Planet} alt="Planet" />
      </div>
    </motion.section>
  );
};

export default PrimeChallenge;
