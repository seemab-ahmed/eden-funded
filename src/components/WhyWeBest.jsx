import React from "react";
import WhyWeBestImg from "../assets/images/whywebest.png";
import { Link } from "react-router-dom";

const WhyWeBest = () => {
  return (
    <section className="px-14 text-white mt-[180px]">
      <div className="flex items-center w-[1621px] max-w-full mx-auto rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]">
        <img
          src={WhyWeBestImg}
          alt="heart iamge"
          className="p-10 w-[758px] h-[629px] "
        />
        <div className="w-[488px] pl-[50px]">
          <h2 className="font-medium text-[48px] leading-[62.5px]">
            Learn Why We're The Best
          </h2>
          <p className="text-[18px] leading-[29px] font-[400] py-[20px]">
            We at UnionWealthsManagement are offering the highest commission
            percentage for every trader you refer us to, simply share your
            unique link with your audience and get paid when a trader joins on
            any of our trader programs.
          </p>
          <Link
            to="/"
            className="btn text-white text-[16px] max-w-[150px] w-full  border-[#B6FFB9] border-opacity-5 border-2 my-6 bg-customGreen"
          >
            Start Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyWeBest;
