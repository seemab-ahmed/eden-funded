import React from "react";
import WhyWeBestImg from "../assets/images/whywebest.png";
import { Link } from "react-router-dom";

const WhyWeBest = () => {
  return (
    <section className="">
    <div className="max-w-[1620px] w-[90%] mx-auto">
      <h2 className="text-white text-center text-5xl max-lg:text-4xl max-md:text-3xl font-medium leading-[1.3] mb-20">
      Why You Should partner with Us?
      </h2>
      <div
        className="rounded-[80px] p-10  max-xl:px-[3%] grid grid-cols-1 
                 md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                 bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                 border-opacity-10 text-white max-lg:rounded-[40px]"
      >
        <div className="max-md:order-2">
          <img src={WhyWeBestImg} alt="heart iamge" className="w-full" />
        </div>
        <div className="max-md:order-1 max-md:text-center ">
        <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
        Learn Why We're The Best
          </h3>
          <p className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px]
            font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto">
           We at UnionWealthsManagement are offering the highest commission
            percentage for every trader you refer us to, simply share your
            unique link with your audience and get paid when a trader joins on
            any of our trader programs.
          </p>
          <Link
            to="/"
            className="btn text-white  text-[16px] max-w-[150px] w-full mx-auto lg:mx-0  border-[#B6FFB9] border-opacity-5 border-2 my-6 bg-customGreen"
          >
            Start Now
          </Link>
        </div>
      <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
      </div>
    </div>
    </section>
    
      );
};

export default WhyWeBest;
