import React from "react";
import ScaleUpImg from "../assets/images/scaleupAboutImg.png";
import LightBg from "../assets/images/BG.png"

const ScaleUpAbout = () => {
    return (
        <section className=' px-14 text-white mt-[242px] mb-[180px]'>
    <div className='relative flex flex-wrap items-center max-w-[90%] mx-auto rounded-[80px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
       <img src={ScaleUpImg} alt="heart iamge" className='p-10 w-[758px] h-auto lg:h-[629px] ' />
       <div className='mx-3 lg-mx-0 w-full lg:w-[488px] lg:pl-[50px] text-center lg:text-start'>
           <h2 className='font-medium sm:text-xl md:text-2xl lg:text-[48px] leading-[29px] lg:leading-[62.5px]'>Scale Up To 2M</h2>
           <p className='text-sm md:text-[16px] lg:text-[18px] leading-[22px] lg:leading-[29px] py-[20px]'>We help you build the skill, maximize your profits and become the asset. Trade our funds and receive up to 90% profit!</p>
       </div>
       <img
          src={LightBg}
          alt="background-image"
          className="w-[] h-[] absolute top-0 left-0"
        />
       </div>
       </section> 
      )
};

export default ScaleUpAbout;
