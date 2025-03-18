import React from "react";
import ChallengeGrph from "../assets/images/challengeGraph.png";

const StartChallenge = () => {
  return (
    <section className=" pb-[180px] pt-[120px] max-lg:py-20 max-md:py-12 ">
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <h2 className="text-white text-center text-5xl max-lg:text-4xl max-md:text-3xl font-medium leading-[1.3] mb-[16px]">
          The Steps to Become a Eden-FX Trader
        </h2>
        <p className="text-lg text-center font-syne leading-relaxed max-md:text-base text-[rgba(255,255,255,0.50)] mb-[88px] max-md:mb-10">
          Swift and effortless: Obtain your trading credentials and commence
          trading in under a minute.
        </p>
        <div
          className="rounded-[80px] p-10  max-xl:px-[3%] grid grid-cols-1 
                   md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                   bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                   border-opacity-10 text-white max-lg:rounded-[40px]"
        >
          <div className="max-md:order-2">
            <img src={ChallengeGrph} alt="heart iamge" className="w-full" />
          </div>
          <div className="max-md:order-1 max-md:text-center">
            <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
              Starting Your Challenge
            </h3>
            <p className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px]
            font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto">
              You have the opportunity to show your trading potential and work
              towards achieving the profit target. There's no imposed time
              limit; you only need to trade for a minimum of 5 trading days. The
              key is to maintain profitability while staying within the maximum
              drawdown limit.
            </p>
          </div>
        <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
        </div>
      </div>
    </section>
  );
};

export default StartChallenge;
