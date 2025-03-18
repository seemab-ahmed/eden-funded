import React from "react";
import EdenFxImg from "../assets/images/EdenFxImg (2).png";

const EdenFx = () => {
  return (
      <section className="pt-[180px] max-lg:pt-24 max-md:pt-20">
        <div className="max-w-[1620px] w-[90%] mx-auto">
          <div
            className="rounded-[80px] p-[26px_33px_27px_60px]  max-xl:p-[26px_3%] grid grid-cols-1 
                   md:grid-cols-[.75fr_1fr] gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                   bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                   border-opacity-10 text-white max-lg:rounded-[40px]"
          >
            <div className=" max-md:ps-4">
              <h2 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[450px]">
              Eden-FX <br/>
              VIP Program
              </h2>
              <ul className="list-inside pl-2 my-5 font-syne text-[rgba(216,218,255,0.60)] text-lg" style={{ listStyleType: "square" }}>
            <li className="">Withdraw anytime</li>
            <li className=" my-1">Special promotions</li>
            <li className="">92% profit split</li>
          </ul>
          <h2 className="font-medium text-[24px] leading-[38.5px]">
            Requirement:
          </h2>
          <ul className="list-inside pl-2 mt-5 font-syne text-[rgba(216,218,255,0.60)] text-lg" style={{ listStyleType: "square" }}>
            <li >
              4 Profitable months with Eden-FX
            </li>
            <li className="text-[18px] leading-7">
              Minimum 5 payouts from Eden-FX
            </li>
          </ul>
            </div>
            <img src={EdenFxImg} alt="heart iamge" className="max-w-[758px] md:w-[90%] w-full" />
            <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
          </div>
        </div>
      </section>
  );
};

export default EdenFx;
