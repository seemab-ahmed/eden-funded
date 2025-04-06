import React, { useState } from "react";
import { motion } from "framer-motion";
// import Line from "../assets/images/mid-line.svg";
import InstantImg from "../assets/images/transform-Img.webp";
import bgTab1 from "../assets/images/bg-tab-1.svg";
import bgTab2 from "../assets/images/bg-tab-2.svg";
import { Link } from "react-router-dom";

const Tabs = ["1-STEP HFT", "EDEN VIP"];
const Steps = ["Instant", "1-Step"];
const tabPriceData = {
  "1-STEP HFT": ["$10k", "$25k", "$50k", "$100k", "$200k", "$300k"],
  "EDEN VIP": ["$100k"],
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
  const [activeTab, setActiveTab] = useState("1-STEP HFT");
  const [Step, setStep] = useState("Instant");
  const [Price, setPrice] = useState(tabPriceData["1-STEP HFT"][0]);

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
            {activeTab === "EDEN VIP"
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
      <motion.div
        className=" max-w-[1260px] w-[95%] mx-auto relative"
        variants={fadeInUpVariant}
      >
        <div className="flex flex-wrap gap-2 justify-between relative z-10 max-md:flex-col-reverse max-md:gap-4 max-md:justify-center max-md:items-center">
          <motion.div
            className="flex flex-wrap max-sm:justify-center max-md:gap-y-4  max-md:gap-2"
            variants={fadeInUpVariant}
          >
            {Steps.map((tab) => (
              <motion.button
                key={tab}
                className={`relative px-[100px] py-[10px] border-opacity-5 h-[76px] flex items-center justify-center transition-all duration-500 ease-in-out text-base text-center leading-none font-medium max-xl:px-20 max-md:px-4 max-md:h-10 border max-md:text-sm ${
                  Step === tab
                    ? "border-transparent border-opacity-5 text-white rounded-[40px] border-b-transparent max-lg:bg-[rgba(255,255,255,0.10)] max-lg:border-[rgba(255,255,255,0.10)]"
                    : "text-[#fff] border-transparent bg-transparent rounded-[40px] "
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
          <motion.ul
            className="grid grid-cols-2 mb-2.5 sm:grid-cols-2 gap-0 max-w-[336px] p-2 rounded-[50px] border border-[#D9D9D9]"
            variants={containerVariants}
          >
            {Tabs.map((instanttab) => (
              <motion.li
                key={instanttab}
                className={`px-8 rounded-[58px] h-[50px] flex items-center justify-center  max-md:h-11 max-md:px-4
                  cursor-pointer transition-all duration-500 ease-in-out font-medium text-customLightGreen max-md:text-sm
                   ${
                    activeTab === instanttab
                      ? "text-customDark bg-customGreen"
                      : "bg-black"
                  }`}
                onClick={() => setActiveTab(instanttab)}
              >
                <motion.span>{instanttab}</motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative z-10 rounded-[30px]  border-opacity-5  p-10 pt-4 max-md:px-5
          max-lg:bg-[255,255,255,0.20] max-lg:border-white"
          variants={fadeInUpVariant}
        >
          <motion.div
            className="rounded-[160px] border border-[#D9D9D9] border-opacity-50 bg-[rgba(11,172,117,0.02)] p-1 
            flex justify-between items-center flex-wrap max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6 max-lg:rounded-3xl"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-wrap w-full justify-between max-md:gap-y-4"
              variants={fadeInUpVariant}
            >
              {tabPriceData[activeTab].map((pricetab) => (
                <motion.button
                  key={pricetab}
                  className={`relative px-8 py-[10px] h-[46px] rounded-[58px] flex items-center justify-center transition-all duration-500 ease-in-out 
                    text-base text-center leading-none font-medium max-xl:px-4 max-xl:h-11 max-md:px-4 max-md:h-10 max-md:text-sm flex-1 ${
                      Price === pricetab
                        ? " text-[#0F0F0F] bg-[#0EF3A5]"
                        : "text-[#fff] border-transparent bg-transparent"
                    }`}
                  onClick={() => setPrice(pricetab)}
                >
                  {pricetab}
                  {pricetab === "$100k" && (
                    <motion.span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none px-2 flex items-center absolute left-0 right-0 mx-auto top-[-14px] max-w-max max-xl:text-[10px] max-xl:h-5 max-xl:-top-3"
                      variants={textLoadVariant}
                    >
                      Most Popular
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
              className="flex flex-col justify-center items-start gap-[20px] p-[32px] rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)] max-md:p-5"
              variants={fadeInUpVariant}
            >
              <motion.div variants={fadeInUpVariant}>
                <motion.h3
                  className="text-white text-[24px] font-medium leading-[130%] max-xl:text-[36px] max-md:text-3xl max-sm:text-2xl"
                  variants={textLoadVariant}
                >
                  {activeTab === "EDEN VIP"
                    ? "Unlock Instant Funding"
                    : "1-Step HFT Challenge"}
                </motion.h3>
                <motion.p
                  className="text-[rgba(216,255,218,0.60)] text-[15px] font-normal leading-[160%] max-w-[490px] max-md:text-base"
                  variants={fadeInUpVariant}
                >
                  Choose your path to funding—complete a challenge or get
                  instant access to capital and start trading today!
                </motion.p>
              </motion.div>

              <motion.ul
                className="flex flex-col w-full gap-2.5 font-poppins"
                variants={containerVariants}
              >
                <motion.li
                  className="flex justify-between items-center w-full bg-[rgba(255,255,255,0.05)] py-3 px-4 rounded-[35px]"
                  variants={fadeInUpVariant}
                >
                  <span
                    className="text-white text-[14px] leading-[100%] max-sm:text-xs"
                    variants={textLoadVariant}
                  >
                    Maximum Daily Loss
                  </span>

                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] text-center text-white text-[14px] leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                    variants={textLoadVariant}
                  >
                    4% daily loss
                  </span>
                </motion.li>

                <motion.li
                  className="flex justify-between items-center w-full bg-[rgba(255,255,255,0.05)] py-3 px-4 rounded-[35px]"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[14px] leading-[100%] max-sm:text-xs">
                    Maximum Loss
                  </span>

                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] text-center text-white text-[14px] leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    8% max loss
                  </span>
                </motion.li>

                <motion.li
                  className="flex justify-between items-center w-full bg-[rgba(255,255,255,0.05)] py-3 px-4 rounded-[35px]"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[14px] leading-[100%] max-sm:text-xs">
                    Account Leverage
                  </span>

                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] text-center text-white text-[14px] leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    1:100 leverage
                  </span>
                </motion.li>

                <motion.li
                  className="flex justify-between items-center w-full bg-[rgba(255,255,255,0.05)] py-3 px-4 rounded-[35px]"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[14px] leading-[100%] max-sm:text-xs">
                    Payouts
                  </span>

                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] text-center text-white text-[14px] leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    Every 5 days
                  </span>
                </motion.li>

                <motion.li
                  className="flex justify-between items-center w-full bg-[rgba(255,255,255,0.05)] py-3 px-4 rounded-[35px]"
                  variants={fadeInUpVariant}
                >
                  <span className="text-white text-[14px] leading-[100%] max-sm:text-xs">
                    Profit Split
                  </span>

                  <span className="flex flex-col justify-center items-center gap-[10px] h-[32px] text-center text-white text-[14px] leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3">
                    {activeTab === "EDEN VIP" ? "Up to 80%" : "75%"}
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
            {/* col Right Tbs */}
            <motion.div
              className="flex flex-col "
              variants={fadeInUpVariant}
            >
              <motion.div
                className="w-full h-[247px] bg-cover max-sm:h-[200px] overflow-hidden rounded-[35px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]"
                style={{
                  background: `                        
                              url(${InstantImg}) center / cover no-repeat`,
                }}
                variants={fadeInUpVariant}
              ></motion.div>
              <motion.div
                className="mt-[20px] p-8 max-md:px-5 max-sm:mt-0 overflow-hidden rounded-[35px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]"
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
                    journey as an Eden-Fx today, manage risks carefully, and
                    enjoy up to 80% for 1-step
                  </motion.p>
                  {activeTab === "EDEN VIP" && (
                    <motion.div className="flex flex-col items-end gap-[4px] p-[12px_24px] rounded-[16px] border border-white border-opacity-5 bg-[rgba(11,172,117,0.02)] mt-[-39px] max-sm:mt-0">
                      <motion.div className="flex items-center gap-2 justify-end max-sm:justify-center">
                        <motion.span className="text-white text-right text-[24px] font-bold leading-[130%]">
                          $697
                        </motion.span>
                      </motion.div>
                      <motion.span className="text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium leading-[130%]">
                        For $100k Account
                      </motion.span>
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  className="mt-8"
                  variants={fadeInUpVariant}
                >
                    <Link
                      to="https://dashboard.eden-fx.com/auth/sign-up"
                      target="_blank"
                      className="btn font-syne text-customDark bg-customGreen px-10"
                    >
                      Get Funded
                    </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Background 1 */}
        <div className="max-lg:hidden"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgTab1})`,
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: Step === "Instant" ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 0,
          }}
        />
        {/* Background 2 */}
        <div  className="max-lg:hidden"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgTab2})`,
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: Step === "Instant" ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 0,
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default InstantFunding;
