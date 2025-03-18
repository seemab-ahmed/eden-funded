import React, { useState } from "react";
import Line from "../assets/images/mid-line.svg";
import InstantImg from "../assets/images/instant-card.webp";
import { Link } from "react-router-dom";

const Tabs = ["Standard", "Pro"];
const Steps = ["Instant", "Step 1", "Step 2", "Step 3"];
const Prices = ["$2.5", "$5k", "$10k", "$25k", "$50k", "$100k"];

const InstantFunding = () => {
  const [activeTab, setActiveTab] = useState("Standard");
  const [Step, setStep] = useState("Instant");
  const [Price, setPrice] = useState("$2.5");
  return (
    <section className="py-28 max-md:py-12">
      <div className="container max-w-[1620px]">
        <div className="text-center">
          <h2 className="heading-2 text-5xl text-customWhite mb-4 max-md:text-[32px]">
            Unlock Instant Funding
          </h2>
          <p className="text-[#CFD6D3] text-xl leading-[1.5] max-w-[754px] w-full mx-auto mb-10
          max-md:text-base">
            Choose your path to funding—complete a challenge or get instant
            access to capital and start trading today!
          </p>
        </div>
      </div>
      {/* tabs  */}
      <div className="w-[95%] mx-auto">
        <ul className="grid grid-cols-2 mb-10  sm:grid-cols-2  gap-6 mx-auto max-w-[269px] p-2 rounded-[80px] border border-[rgba(255,255,255,0.05)]
        ">
          {Tabs.map((instanttab) => (
            <li
              key={instanttab}
              className={` px-8 rounded-[58px] h-[50px] flex items-center justify-center  cursor-pointer transition-all duration-500 ease-in-out font-medium
          ${
            activeTab === instanttab
              ? "text-customDark bg-customGreen"
              : "text-customLightGreen"
          }`}
              onClick={() => setActiveTab(instanttab)}
            >
              {instanttab}
            </li>
          ))}
        </ul>
        <div className="rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)] backdrop-blur-[25px] p-10
        max-md:px-5">
          <div className="rounded-[160px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)] p-5 flex justify-between items-center flex-wrap
          max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-6 max-lg:rounded-3xl">
            <div className="flex flex-wrap max-sm:justify-center max-md:gap-y-4">
              {Steps.map((tab) => (
                <button
                  key={tab}
                  className={` relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center 
            transition-all duration-500 ease-in-out text-base text-center leading-none font-medium
            max-xl:px-4 max-xl:h-11 max-md:px-4 max-md:h-10 border max-md:text-sm
              ${
              Step === tab
                ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                : "text-[#D8FFDA99] border-transparent bg-transparent"
            }`}
                  onClick={() => setStep(tab)}
                >
                  {tab}
                  {tab === "Instant" && (
                    <span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none 
    px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max 
    max-xl:text-[10px] max-xl:h-5 max-xl:-top-3"
                    >
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap max-sm:justify-center max-md:gap-y-4">
              {Prices.map((pricetab) => (
                <button
                  key={pricetab}
                  className={` relative px-8 py-[10px] h-[53px] rounded-[58px] flex items-center justify-center 
            transition-all duration-500 ease-in-out text-base text-center leading-none font-medium
            max-xl:px-4 max-xl:h-11 max-md:px-4 max-md:h-10 border max-md:text-sm  ${
              Price === pricetab
                ? "border-white border-opacity-5 text-white bg-[rgba(121,255,139,0.04)]"
                : "text-[#D8FFDA99] border-transparent bg-transparent"
            }`}
                  onClick={() => setPrice(pricetab)}
                >
                  {pricetab}
                  {pricetab === "$100k" && (
                    <span
                      className="bg-[#0EF3A5] text-[#0F0F0F] rounded-[80px] h-[21px] text-[11px] leading-none 
    px-2 flex items-center absolute left-0 right-0 mx-auto top-[-11px] max-w-max
     max-xl:text-[10px] max-xl:h-5 max-xl:-top-3"
                    >
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col justify-center items-start gap-[40px] p-[32px] rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]
            max-md:p-5">
              <div>
                <h3 className="text-white text-[40px] font-medium leading-[130%] max-xl:text-[36px] max-md:text-3xl max-sm:text-2xl">
                  Unlock Instant Funding
                </h3>
                <p className="text-[rgba(216,255,218,0.60)]  text-[18px] font-normal leading-[160%] max-w-[490px] mt-2
                max-md:text-base">
                  Choose your path to funding—complete a challenge or get
                  instant access to capital and start trading today!
                </p>
              </div>
              <ul className="flex flex-col w-full gap-8 max-md:gap-4">
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Maximum Daily Loss
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                  >
                    3%
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Maximum Loss
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                  >
                    5%
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Account Leverage
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                  >
                    1:50
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Payouts
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%]">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                  >
                    Bi-Weekly
                  </span>
                </li>
                <li className="flex justify-between items-center w-full">
                  <span className="text-white text-[16px] font-medium leading-[100%] max-sm:text-xs">
                    Profit Split
                  </span>
                  <div className="w-full max-w-[60%] max-xl:max-w-[40%] ">
                    <img src={Line} alt="line" className="w-full min-h-[1px]" />
                  </div>
                  <span
                    className="flex flex-col justify-center items-center gap-[10px] h-[32px] px-[16px] py-[4px] rounded-[80px] bg-white/10
                  text-center text-white text-[16px] font-medium leading-[100%] whitespace-nowrap max-sm:text-xs max-sm:h-7 max-sm:px-3"
                  >
                    Up tp 95%
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col  overflow-hidden  rounded-[30px] border border-[#B6FFC0] border-opacity-5 bg-[rgba(11,172,117,0.02)]">
              <div
                className="w-full h-[247px] bg-cover max-sm:h-[200px]"
                style={{
                  background: `linear-gradient(180deg, rgba(24, 56, 25, 0.00) 0%, rgba(71, 193, 81, 0.30) 100%), 
                             linear-gradient(0deg, rgba(51, 158, 32, 0.20) 0%, rgba(51, 158, 32, 0.20) 100%), 
                             url(${InstantImg}) 0px -257.014px / 100% 230.162% no-repeat`,
                }}
              ></div>
              <div className="mt-[38px] p-8 max-md:px-5 max-sm:mt-0">
                <div className="flex justify-between items-center gap-2 max-sm:flex-col max-sm:justify-center">
                <p className="text-[rgba(216,255,218,0.60)]  text-[16px] font-normal leading-[160%] max-w-[442px] max-sm:text-sm max-sm:text-center">
                  Bypass the challenge and receive instant funding. Begin your
                  journey as an Aquo Trader today, manage risks carefully, and
                  enjoy up to a 95% profit share.
                </p>
                <div className="flex flex-col flex-end gap-[4px] p-[12px_24px] rounded-[16px] border 
                border-white border-opacity-5 bg-[rgba(11,172,117,0.02)] mt-[-39px] max-sm:mt-0">
                <div className="flex items-center gap-2 justify-end max-sm:justify-center">
                <span className="text-white text-right text-[24px] font-bold leading-[130%]">
                $42
                </span>
                {/* cut price  */}
                <span className="
                text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium 
                leading-[130%] line-through">
                  $60
                  </span>
                </div>
                <span className="text-[rgba(216,255,222,0.40)] text-right text-[16px] font-medium leading-[130%]">For $2.5k Account</span>
                </div>
                </div>
                <ul className="grid grid-cols-1  sm:grid-cols-2  gap-6 mt-8">
                <li>
                    <Link
                      to="/"
                      className="btn font-syne text-customLightGreen bg-customTransparentWhite px-10"
                    >
                      Learn more
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="btn font-syne text-customDark bg-customGreen px-10"
                    >
                      
                      Get Funded
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantFunding;
