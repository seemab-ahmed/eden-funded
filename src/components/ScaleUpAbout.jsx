import React from "react";
import ScaleUpImg from "../assets/images/scaleupAboutImg.png";

const ScaleUpAbout = () => {
    return (
        <section className='px-14 text-white mt-[242px] mb-[180px]'>
        <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pb-[88px]'>
        Why You Should partner with Us?
           </h2>
    <div className='flex items-center w-[1621px] max-w-full mx-auto rounded-[80px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
       <img src={ScaleUpImg} alt="heart iamge" className='p-10 w-[758px] h-[629px] ' />
       <div className='w-[488px] pl-[50px]'>
           <h2 className='font-medium text-[48px] leading-[62.5px]'>Here is our traders accomplishment</h2>
           <p className='text-[18px] leading-[29px] font-[400] py-[20px]'>Take a look at the incredible accomplishments of our thriving traders and celebrate their success with us.</p>
       </div>
       </div>
       </section> 
      )
};

export default ScaleUpAbout;
