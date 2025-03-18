import React from 'react'
import EdenFxImg from "../assets/images/EdenFxImg (2).png"
import Robot from "../assets/images/Vector-about.svg"

const EdenFx = () => {
  return (
<section className="pt-[180px] relative">
<div className="max-w-[1620px] w-[90%] mx-auto">
    <div className="rounded-[80px] p-10 max-xl:px-[3%] grid grid-cols-1 
        md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
        bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
        border-opacity-10 text-white max-lg:rounded-[40px] relative z-10">  
        <div className="max-md:order-1 max-md:text-center">
        <h2 className='font-medium text-[48px] leading-[130%]'>Eden-FX <br/>VIP Program</h2>
            <ul class="list-inside pl-2 py-5" Style="list-style-type: square;">
  <li className='text-[18px] leading-[160%]'>Withdraw anytime</li>
  <li className='text-[18px] leading-[160%] py-1'>Special promotions</li>
  <li className='text-[18px] leading-[160%]'>92% profit split</li>
</ul>
            <h2 className='font-medium text-[24px] leading-[160%]'>Requirement:</h2>
            <ul class="list-inside pl-2 py-5" Style="list-style-type: square;">
            <li className='text-[18px] leading-[160%] pb-1'>4 Profitable months with Eden-FX</li>
            <li className='text-[18px] leading-[160%]'>Minimum 5 payouts from Eden-FX</li>
</ul>
        </div>
        <div className="max-md:order-2">
            <img src={EdenFxImg} alt="Scale Up" className="w-full " />
        </div>
        {/* Horizontal Line */}
        <div className="absolute top-[-2px] inset-x-0 w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
    </div>
</div>


{/* Robot Image - Right Side */}
<div className="absolute right-0 top-[-200px] bottom-[-100px] w-[30%] max-w-[580px] z-[-1] 
    max-xl:bottom-[-80px] max-lg:bottom-[-60px]">
    <img src={Robot} alt="Robot" className="w-full" />
</div>
</section>
);

}

export default EdenFx
