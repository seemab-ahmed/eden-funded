import React from "react";
import CustomerGirl from "../assets/images/customerGirl.png";

const CustomerSupport = () => {
  return (
    <section className="py-[180px] max-lg:py-24 max-md:py-20">
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <div className="rounded-[80px] p-[26px_33px_27px_60px]  max-xl:p-[26px_3%] grid grid-cols-1 
                   md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                   bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                   border-opacity-10 text-white max-lg:rounded-[40px]">
        <div className=" max-md:text-center">
          <h2 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
          24/7 Customer Support
          </h2>
          <p className="text-xl leading-[1.4] font-normal mt-[20px] max-w-[488px]
            font-syne text-white max-md:mx-auto">
          With a team of over 15 live agents available around the clock, our response time consistently remains under 2 minutes, ensuring prompt assistance anytime, any day.
          </p>
        </div>
        <img
          src={CustomerGirl}
          alt="heart iamge"
          className=" "
        />
        <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>

        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
