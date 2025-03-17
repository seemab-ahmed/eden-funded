import React from "react";
import SuccessStorieImg from "../assets/images/succesgraph (3).png";
import EarthBgImg from "../assets/images/earthAbout.webp";
import LightBg from "../assets/images/BG.png"

const SuccessStories = () => {
  return (
    <section className="relative text-white mb-[60px] md:mb[100px] lg:mb-[180px] ">
      <div className=" flex flex-wrap items-center max-w-[90%] mx-auto  w-full p-10 rounded-[80px] border-2 bg-opacity-10 border-[#B6FFB9] border-opacity-5 bg-[#1E7759] z-50">
        <img
          src={SuccessStorieImg}
          alt="heart iamge"
          className="w-[758px] h-auto lg:h-[629px] z-20"
        />
        <div className="w-full lg:w-[488px] ml-0 lg:ml-[90px] pt-6 lg:mt-0 z-20">
          <h2 className=" text-white font-medium sm:text-xl md:text-2xl lg:text-[48px] leading-[29px] lg:leading-[62.5px] z-40 lg:text-start text-center">
            Many success stories.. Are you next?
          </h2>
        </div>
        <div className="absolute inset-[-1px_0_auto] w-[70%] h-[2px] z-10 bg-border-line mx-auto"></div>
        <img
          src={LightBg}
          alt="background-image"
          className="w-[] h-[] absolute top-0 left-0 z-0"
        />
        
      </div>
      <img
          src={EarthBgImg}
          alt="Earth-image"
          className="w-[380px] h-auto absolute top-[-300px] right-0 z-0"
        />
    </section>
  );
};

export default SuccessStories;
