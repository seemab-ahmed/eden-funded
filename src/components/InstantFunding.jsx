import React, { useState } from "react";
import { motion } from "framer-motion";
import Line from "../assets/images/mid-line.svg";
import InstantImg from "../assets/images/instant-card.webp";
import { Link } from "react-router-dom";

const Tabs = [" HFT Series", "Instant"];
const Steps = ["Instant", "1-Step"];
const tabPriceData = {
  " HFT Series": ["$25k", "$50k", "$100k", "$200k", "$300k"],
  Instant: ["$100k"],
};

// Smooth fade in & move up variant
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Text load variant: blurred-to-clear effect with longer duration
const textLoadVariant = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 2, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const InstantFunding = () => {
  const [activeTab, setActiveTab] = useState(" HFT Series");
  const [Step, setStep] = useState("Instant");
  const [Price, setPrice] = useState(tabPriceData[" HFT Series"][0]);

  return (
    <motion.section
      className="py-28 max-md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container max-w-[1620px]">
        <motion.div className="text-center" variants={fadeInUpVariant}>
          <motion.h2 className="heading-2 text-5xl text-customWhite mb-4 max-md:text-[32px]">
            {activeTab === "Instant"
              ? "Unlock Sim-Funded Accounts"
              : "Unlock Instant Funding"}
          </motion.h2>
          <motion.p className="text-[#CFD6D3] text-xl leading-[1.5] max-w-[754px] w-full mx-auto mb-10 max-md:text-base">
            Choose your path to funding—complete a challenge or get instant
            access to capital and start trading today!
          </motion.p>
        </motion.div>
      </div>

      {/* Tabs */}
      <motion.div className="w-[95%] mx-auto" variants={fadeInUpVariant}>
        <motion.ul
          className="grid grid-cols-2 mb-10 sm:grid-cols-2 gap-6 mx-auto max-w-[348px] p-2 rounded-[80px] border border-[rgba(255,255,255,0.05)]"
          variants={containerVariants}
        >
          {Tabs.map((instanttab) => (
            <motion.li
              key={instanttab}
              className={`px-8 rounded-[58px] h-[50px] flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out font-medium ${
                activeTab === instanttab
                  ? "text-customDark bg-customGreen"
                  : "text-customLightGreen"
              }`}
              onClick={() => setActiveTab(instanttab)}
            >
              <motion.span>{instanttab}</motion.span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)] backdrop-blur-[25px] p-10 max-md:px-5"
          variants={fadeInUpVariant}
        >
          <motion.div
            className="rounded-[160px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)] p-5 flex justify-between items-center flex-wrap max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6 max-lg:rounded-3xl"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-wrap max-sm:justify-center max-md:gap-y-4"
              variants={fadeInUpVariant}
            >
              {Steps.map((tab) => (
                <motion.button
                  key={tab}
                  className={`relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center transition-all duration-500 ease-in-out text-base text-center leading-none font-medium max-xl:px-4 max-xl:h-11 max-md:px-4 max-md:h-10 border max-md:text-sm ${
                    Step === tab
                      ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                      : "text-[#D8FFDA99] border-transparent bg-transparent"
                  }`}
                  onClick={() => setStep(tab)}
                >
                  {tab}
                  {tab === "Instant" && (
                    <motion.span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max max-xl:text-[10px] max-xl:h-5 max-xl:-top-3"
                      variants={textLoadVariant}
                    >
                      New
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap max-sm:justify-center max-md:gap-y-4"
              variants={fadeInUpVariant}
            >
              {tabPriceData[activeTab].map((pricetab) => (
                <motion.button
                  key={pricetab}
                  className={`relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center transition-all duration-500 ease-in-out text-base text-center leading-none font-medium max-xl:px-4 max-xl:h-11 max-md:px-4 max-md:h-10 border max-md:text-sm ${
                    Price === pricetab
                      ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                      : "text-[#D8FFDA99] border-transparent bg-transparent"
                  }`}
                  onClick={() => setPrice(pricetab)}
                >
                  {pricetab}
                  {pricetab === "$100k" && (
                    <motion.span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max max-xl:text-[10px] max-xl:h-5 max-xl:-top-3"
                      variants={textLoadVariant}
                    >
                      New
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"
            variants={fadeInUpVariant}
          >
            <motion.div
              className="flex flex-col justify-center items-start gap-[40px] p-[32px] rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)] max-md:p-5"
              variants={fadeInUpVariant}
            >
              <motion.div variants={fadeInUpVariant}>
                <motion.h3
                  className="text-white text-[40px] font-medium leading-[130%] max-xl:text-[36px] max-md:text-3xl max-sm:text-2xl"
                  variants={textLoadVariant}
                >
                  {activeTab === "Instant" ? 
                  "Unlock Instant Funding" : "1-Step HFT Series Challenge"}
                  
                </motion.h3>
                <motion.p
                  className="text-[rgba(216,255,218,0.60)] text-[18px] font-normal leading-[160%] max-w-[490px] mt-2 max-md:text-base"
                  variants={fadeInUpVariant}
                >
                  Choose your path to funding—complete a challenge or get
                  instant access to capital and start trading today!
                </motion.p>
              </motion.div>

              <motion.ul
                className="flex flex-col w-full gap-8 max-md:gap-4"
                variants={containerVariants}
              >
                <motion.li
                  className="flex justify-between items-center w-full"
                  variants={fadeInUpVariant}
                >
                  <span
                    className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs"
                    variants={textLoadVariant}
                  >
                    Maximum Daily Loss
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10 text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                    variants={textLoadVariant}
                  >
                    4% daily loss
                  </span>
                </motion.li>
                <motion.li
                  className="flex justify-between items-center w-full"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Maximum Loss
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10 text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    8% max loss
                  </span>
                </motion.li>
                <motion.li
                  className="flex justify-between items-center w-full"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Account Leverage
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10 text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    1:100 leverage
                  </span>
                </motion.li>
                <motion.li
                  className="flex justify-between items-center w-full"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Payouts
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10 text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    Bi-Weekly
                  </span>
                </motion.li>
                <motion.li
                  className="flex justify-between items-center w-full"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Profit Split
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10 text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                  {activeTab === "Instant" 
                  ? "Up tp 95%"
                  : "50 / 70 / 80"
                  }
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="flex flex-col overflow-hidden rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]"
              variants={fadeInUpVariant}
            >
              <motion.div
                className="w-full h-[247px] bg-cover max-sm:h-[200px]"
                style={{
                  background: `linear-gradient(180deg, rgba(24, 56, 25, 0.00) 0%, rgba(71, 193, 81, 0.30) 100%), 
                              linear-gradient(0deg, rgba(51, 158, 32, 0.20) 0%, rgba(51, 158, 32, 0.20) 100%), 
                              url(${InstantImg}) 0px -257.014px / 100% 230.162% no-repeat`,
                }}
                variants={fadeInUpVariant}
              ></motion.div>
              <motion.div
                className="mt-[38px] p-8 max-md:px-5 max-sm:mt-0"
                variants={fadeInUpVariant}
              >
                <motion.div
                  className="flex justify-between items-center gap-2 max-sm:flex-col max-sm:justify-center"
                  variants={fadeInUpVariant}
                >
                  <motion.p
                    className="text-[rgba(216,255,218,0.60)] text-[16px] font-normal leading-[160%] max-w-[442px] max-sm:text-sm max-sm:text-center"
                    variants={fadeInUpVariant}
                  >
                    Bypass the challenge and receive instant funding. Begin your
                    journey as an Aquo Trader today, manage risks carefully, and
                    enjoy up to a 95% profit share.
                  </motion.p>
                  {activeTab === "Instant" && (
                    <motion.div
                      className="flex flex-col items-end gap-[4px] p-[12px_24px] rounded-[16px] border border-white border-opacity-5 bg-[rgba(11,172,117,0.02)] mt-[-39px] max-sm:mt-0"
                      // variants={fadeInUpVariant}
                    >
                      <motion.div
                        className="flex items-center gap-2 justify-end max-sm:justify-center"
                        // variants={fadeInUpVariant}
                      >
                        <motion.span
                          className="text-white text-right text-[24px] font-bold leading-[130%]"
                          // variants={textLoadVariant}
                        >
                          $42
                        </motion.span>
                        <motion.span
                          className="text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium leading-[130%] line-through"
                          // variants={fadeInUpVariant}
                        >
                          $60
                        </motion.span>
                      </motion.div>
                      <motion.span
                        className="text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium leading-[130%]"
                        // variants={fadeInUpVariant}
                      >
                        For $2.5k Account
                      </motion.span>
                    </motion.div>
                    )}
                </motion.div>
                <motion.ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
                  variants={containerVariants}
                >
                  <motion.li variants={fadeInUpVariant}>
                    <Link
                        to="https://dashboard.eden-fx.com/auth/sign-up"
                  target="_blank"
                      className="btn font-syne text-customLightGreen bg-customTransparentWhite px-10"
                    >
                      Learn more
                    </Link>
                  </motion.li>
                  <motion.li variants={fadeInUpVariant}>
                    <Link
                      to="https://dashboard.eden-fx.com/auth/sign-up"
                  target="_blank"
                      className="btn font-syne text-customDark bg-customGreen px-10"
                    >
                      Get Funded
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default InstantFunding;
