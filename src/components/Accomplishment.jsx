import React from "react";
import AccomplishmentImg from "../assets/images/ASAP Trade (3).png";

const Accomplishment = () => {
  return (
    <section className="">
    <div className="max-w-[1620px] w-[90%] mx-auto">
      <h2 className="text-white text-center text-5xl max-lg:text-4xl max-md:text-3xl font-medium leading-[1.3] mb-20">
      Eden-FX Trader Certificates
      </h2>
      <div
        className="rounded-[80px] p-10  max-xl:px-[3%] grid grid-cols-1 
                 md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                 bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                 border-opacity-10 text-white max-lg:rounded-[40px]"
      >
        <div className="max-md:order-2">
          <img src={AccomplishmentImg} alt="heart iamge" className="w-full" />
        </div>
        <div className="max-md:order-1 max-md:text-center">
        <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
          Here is our traders accomplishment
          </h3>
          <p className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px]
            font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto">
            Take a look at the incredible accomplishments of our thriving
            traders and celebrate their success with us.
          </p>
        </div>
      <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
      </div>
    </div>
  </section>

  );
};
export default Accomplishment;
