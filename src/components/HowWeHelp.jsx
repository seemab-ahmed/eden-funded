import React from "react";
import { Link } from "react-router-dom";
import CowImage from "../assets/images/cowImg.png";

const HowWeHelp = () => {
  return (
    <section className=" text-white py-28 max-md:py-12 ">
      <div
        className="flex flex-col items-center max-w-full w-[95%] mx-auto px-4 text-center rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5  p-10
        max-md:px-5"
      >
        <h2 className="text-5xl font-medium my-4 max-md:text-4xl">
          How We Help Empower Traders
        </h2>
        <p className="text-lg text-white text-opacity-50 mb-20 max-w-[585px] mx-auto max-md:text-base">
          How to become a Eden-fx trader
        </p>
        {/* Card */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-[97px] mt-6 max-w-[1500px]">
          <div
            className="max-w-[590px] max-md:p-5"
          >
            <h1 className="text-start text-[48px]">Why Our Assessment Process?</h1>
            <div
              className="flex justify-start flex-col p-[32px] pr-[80px] text-start rounded-[30px] border border-[#B6FFC0] border-opacity-5
            max-md:p-5 bg-[rgba(11,172,118,0.06)]" 
            >
              <p className="leading-[29px] text-[20px]">
                We've developed a distinctive Assessment Program designed to
                help achieve new or top-performing traders. We're keen to
                evaluate your skills and determine your potential for consistent
                profitability. Upon successful completion of our Assessment
                Program we will be happy to offer you a spot with our other
                Eden-FX funded traders.
              </p>
              <Link
                to="/"
                className="btn text-white text-[16px] max-w-[339px] w-full  border-[#B6FFB9] border-opacity-5 border-2 my-6"
              >
                Traders Login
              </Link>
            </div>
          </div>
            <img src={CowImage} alt="Cow" className="w-[761px]"/>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
