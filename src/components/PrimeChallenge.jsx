import React from "react";
import Logo from "../assets/images/eden-funding-logo.svg";
import Planet from "../assets/images/planet.webp";

const PrimeChallenge = () => {
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

  return (
    <section className=" text-white py-[120px] max-md:py-12 relative">
      <div className="max-w-[1620px] w-[90%] mx-auto ">
        <h2 className="text-5xl font-medium text-center max-md:text-4xl w-full max-w-[850px] leading-[1.2] mx-auto">
          How Does Our Prime Challenge Compare With Other Companies?
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-xl:gap-6 relative z-[2]
      max-w-full mt-[83px] pt-[73px] pb-[80px] mx-auto px-[5%] text-center rounded-[80px] max-md:rounded-[40px]
      bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] border-opacity-10 bg-no-repeat"
        >
          <div className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg
          border border-[#B6D3FF] border-opacity-10">
            <h2 className="text-[31px] font-medium  mb-[66px]">
              Unlock Instant Funding
            </h2>
            <ul className="flex flex-col gap-3">
              {instantFunding.map((item, index) => (
                <li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                >
                  <span>{item}</span>
              <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block "></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg
          border border-[#B6D3FF] border-opacity-10 flex flex-col justify-between">
            <h2 className="text-[20px] ">When You Trade With</h2>
            <img
              src={Logo}
              alt="Eden Funding Logo"
              className="w-32 mx-auto pt-2 pb-3"
            />
            <ul className="flex flex-col gap-3">
              {withEden.map((item, index) => (
                <li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                >
                  <span>{item}</span>
                  <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block "></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg
          border border-[#B6D3FF] border-opacity-10 flex flex-col justify-between">
            <h2 className="text-xl mb-4">When You Trade With</h2>
            <h1 className="text-center text-[31px] font-[500] pb-4">Other</h1>
            <ul className="flex flex-col gap-3">
              {withOther.map((item, index) => (
                <li
                  key={index}
                  className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                >
                  <span>{item}</span>
                  <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block "></div>
                </li>
              ))}
            </ul>
          </div>
        <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>

        </div>
      </div>
      <div className="w-[50%] max-w-[830px] inset-[auto_auto_-10%_0] absolute z-[0]
      max-xl:inset-[auto_auto_-10%_0] max-lg:inset-[auto_auto_-6%_0]">
        <img src={Planet} alt="Planet" />
      </div>
    </section>
  );
};

export default PrimeChallenge;
