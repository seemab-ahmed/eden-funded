import React from 'react'
import AccomplishmentImg from "../assets/images/ASAP Trade (3).png"
import LightBg from "../assets/images/BG.png"

const Accomplishment = () => {
  return (
    <section className=' px-14 text-white max-w-[90%] mx-auto  w-full mb-[60px] md:mb-[100px] lg:mb-[180px]'>
    <h2 className='text-white text-center mx-2 sm:text-[28px] md:text-[32px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[62px] mb-[30px] md:mb-[50px] lg:mb-[88px]'>
    Eden-FX Trader Certificates
       </h2>
<div className='relative flex flex-wrap items-center justify-center lg:justify-start w-[1621px] max-w-full mx-auto rounded-[80px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
   <img src={AccomplishmentImg} alt="heart iamge" className='p-10 w-[961px] h-auto lg:h-[540px] z-50 ' />
   <div className='mx-3 lg-mx-0 w-full lg:w-[488px] lg:pl-[50px] text-center lg:text-start'>
       <h3 className='font-medium sm:text-xl md:text-2xl lg:text-[48px] lg:leading-[62.5px]  leading-[28.5px]'>Here is our traders accomplishment</h3>
       <p className='text-sm md:text-[16px] lg:text-[18px] leading-[22px] lg:leading-[29px] py-[20px]'>Take a look at the incredible accomplishments of our thriving traders and celebrate their success with us.</p>
   </div>
   <img
          src={LightBg}
          alt="background-image"
          className="w-[] h-[] absolute top-0 left-0"
        />
   </div>
   </section> 
  )
}

export default Accomplishment
