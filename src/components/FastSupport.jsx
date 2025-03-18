import React from 'react'
import FastSupportImg from "../assets/images/fastSupportimg.png"
import Planet from "../assets/images/2m-globe.webp";

const FastSupport = () => {
  return (
        <section className=" py-[180px] max-lg:py-20  max-md:py-12 relative">
        <div className="max-w-[1620px] w-[90%] mx-auto">
          <h2 className="text-white text-center text-5xl max-lg:text-4xl max-md:text-3xl font-medium leading-[1.3] mb-[88px] max-md:mb-10">
          Why You Should partner with Us?
          </h2>
          
          <div
            className="rounded-[80px] p-10  max-xl:px-[3%] grid grid-cols-1 
                     md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                     bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                     border-opacity-10 text-white max-lg:rounded-[40px]"
          >
            <div className="max-md:order-2">
              <img src={FastSupportImg} alt="heart iamge" className="w-full" />
            </div>
            <div className="max-md:order-1 max-md:text-center">
              <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
              Fast Support
              </h3>
              <p className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px]
              font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto">
                We understand how at times you need answers fast! Thats why we operate 24/7 7 days a week, and a support team just for our partners!
              </p>
            </div>
          <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
          </div>
        </div>
        <div className="w-[40%] max-w-[440px] inset-[auto_auto_-4%_0] absolute z-[-1]
    max-xl:inset-[auto_auto_-2%_0] max-lg:inset-[auto_auto_0%_0]">
      <img src={Planet} alt="Planet" />
    </div>
      </section>
  )
}

export default FastSupport
