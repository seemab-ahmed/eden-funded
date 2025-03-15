import React from "react";
import { Link } from "react-router-dom";
import CowImage from "../assets/images/cowImg.png";

const HowWeHelp = () => {
  return (
    <section className=" relative z-index-50 ">
      <div className="max-w-[1620px] w-[90%] mx-auto rounded-[80px] bg-[rgba(121,152,255,0.04)] backdrop-blur-[25px]">

      <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pt-[88px] pb-[16px]'>
         How We Help  Empower Traders
            </h2>
            <p className='text[18px] text-white leading-[28px] text-center pb-[88px]'>How to become a Eden-fx trader</p>
            <div className="flex items-center justify-between text-white">
        <div className="w-[580px] pl-[50px]">
          <h2 className="font-medium text-[48px] leading-[62.5px]">
            Why Our Assessment Process?
          </h2>
          <div className="rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 pl-4 pr-6 bg-[rgba(11,172,118,0.14)]">
          <p className="text-[18px] w-[430px] leading-[29px] font-[400] py-[20px]">
            We've developed a distinctive Assessment Program designed to help
            achieve new or top-performing traders. We're keen to evaluate your
            skills and determine your potential for consistent profitability.
            Upon successful completion of our Assessment Program we will be
            happy to offer you a spot with our other Eden-FX funded traders.
          </p>
          <Link
            to="/"
            className="btn text-white text-[16px] max-w-[339px] w-full  border-[#B6FFB9] border-opacity-5 border-2 my-6 bg-[rgba(11,172,118,0.23)]"
          >
            Traders Login
          </Link>
          </div>
        </div>
        <img
          src={CowImage}
          alt="heart iamge"
          className="p-10 w-[761px] h-[513px] "
        />
        </div>
        </div>
    </section>
  );
};

export default HowWeHelp;
