import React from "react";
import CustomerGirl from "../assets/images/customerGirl.png";

const CustomerSupport = () => {
  return (
    <section className="px-14 text-white mt-[180px] mb-[180px]">
      <div className="flex items-center justify-between w-[1621px] max-w-full mx-auto rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]">
        <div className="w-[488px] pl-[50px]">
          <h2 className="font-medium text-[48px] leading-[62.5px]">
          24/7 Customer <br/>Support
          </h2>
          <p className="text-[18px] leading-[29px] font-[400] py-[20px]">
          With a team of over 15 live agents available around the clock, our response time consistently remains under 2 minutes, ensuring prompt assistance anytime, any day.
          </p>
        </div>
        <img
          src={CustomerGirl}
          alt="heart iamge"
          className="p-10 w-[758px] h-[629px] "
        />
      </div>
    </section>
  );
};

export default CustomerSupport;
