import React from "react";
import SuccessStorieImg from "../assets/images/succesgraph (3).png";
import globeBg from "../assets/images/earthAbout.webp";

const SuccessStories = () => {
  return (
    <section className="relative">
      {/* Globe Background */}
      <div className="absolute w-[50%] max-w-[580px] right-0 top-[-50%] z-[-1] 
        max-xl:top-[-15%] max-lg:top-[-10%]">
        <img src={globeBg} alt="globe background" className="w-full" />
      </div>

      <div className="max-w-[1620px] w-[90%] mx-auto pb-[180px] relative z-10">
        <div
          className="rounded-[80px] p-10 max-xl:px-[3%] grid grid-cols-1 
                     md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                     bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                     border-opacity-10 text-white max-lg:rounded-[40px]"
        >
          <div className="max-md:order-2">
            <img src={SuccessStorieImg} alt="Success graph" className="w-full" />
          </div>
          <div className="max-md:order-1 max-md:text-center">
            <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
              Many success stories.. Are you next?
            </h3>
          </div>
          <div className="absolute bottom-0 inset-x-0 w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
