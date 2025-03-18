import React from 'react'
import PlatformImg from "../assets/images/platform-5bg.webp";
import PayoutBg from "../assets/images/payout-bg.webp";
import Shield from "../assets/images/shield.png";
import Etherum from "../assets/images/ethereum.png";
import check from "../assets/images/check.svg";
import { Link } from 'react-router-dom';

const TradingPlatforms = () => {
  return (
    <section className="py-28 max-md:py-12">
      <div className="max-w-full w-[96%] mx-auto px-4 text-center max-md:w-[90%]">
      <h2 className="text-5xl text-[#FDFEFE] font-medium mb-4 max-md:text-4xl">
      Trading Platforms
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg text-white text-opacity-50 mb-20 max-w-[754px] mx-auto max-md:text-base max-md:mb-10">
        PropPalace offers top—tier trading platforms with fast transactions, advanced tools, and expert 
        support empowering you to trade with confidence and precision
        </p>
        <div className="rounded-[48px] p-10 min-h-[409px] flex flex-col items-center justify-center max-md:min-h-72 max-md:p-6 max-md:rounded-3xl"
        style={{
            background: ` linear-gradient(180deg, rgba(24, 26, 56, 0.00) 0%, #181A38 100%), 
            linear-gradient(0deg, rgba(32, 158, 51, 0.32) 0%, rgba(32, 158, 51, 0.32) 100%), 
            url(${PlatformImg})  50% / cover no-repeat, rgba(121, 255, 157, 0.04)`
        }}>
            <span className="bg-gradient-to-b from-[#14FF57] to-[#01FE34] 
            bg-clip-text text-transparent text-6xl font-medium text-center font-syne max-md:text-4xl">Platform 5</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            <div className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-gradient-to-b from-[#1CFF14] to-[#01FE1A] 
            2xl:pl-[52px] xl:pl-[30px]  max-lg:p-[00px_0px_0px] md:pl-7  max-md:p-[40px_20px_0] 2xl:min-h-[409px] 
            grid 2xl:grid-cols-[1fr_0.95fr]  xl:grid-cols-[1fr_0.75fr] lg:grid-cols-1 md:grid-cols-[1fr_0.75fr] max-md:grid-cols-1 xl:gap-6  items-center
            max-md:rounded-3xl"
            style={{
                background: `url(${PayoutBg})no-repeat center / cover`
            }}>
                <div className='xl:py-16 flex flex-col justify-center'>
                    <h4 className='text-[#FDFEFE] text-left 2xl:text-4xl xl:text-3xl max-xl:text-[28px] max-lg:text-3xl font-medium leading-[1.2] mb-3 '>Payout Guarantee</h4>
                    <p className='text-[#CFD6D3] text-xl leading-[1.4] text-left max-2xl:text-lg max-md:text-base'>At Eden Funding, we value your time and success. That’s why we guarantee you'll receive your payment within 72 hours, or we’ll add an extra $500 to your payout</p>
                </div>
                <div className='max-lg:mx-auto block'>
                    <img src={Shield} alt="shield" />
                </div>
            </div>
            <div className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-[rgba(255,255,255,0.02)] p-8 2xl:min-h-[409px] shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
            backdrop-blur-[210px] flex flex-col justify-center max-md:rounded-3xl max-md:px-4">
            <h4 className='text-white text-left  text-[28px] max-lg:text-2xl font-medium leading-[1.2] mb-8 '>Fast & Reliable Payouts</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-6">
                <div className='rounded-[28px] border border-[#b6ffc6] border-opacity-10 
                bg-white/5 shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
                backdrop-blur-[210px] p-4 flex items-center justify-center'>
                    <img src={Etherum} alt="eterum" />
                </div>
                <div className='relative overflow-hidden rounded-[28px] border border-[#b6ffc6] 
                border-opacity-10 bg-[rgb(255,255,255,0.05)] shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
                backdrop-blur-[210px] p-[50px_24px_24px] flex flex-col justify-end gap-3'>
                <span className='text-sm text-[#0F0F0F] h-[44px] px-[26px] bg-[#0EF3A5] absolute top-0 left-0 flex items-center 
                rounded-[28px_0_28px_0]'>Upgrades</span>
                <div className="rounded-[80px] bg-white/10 backdrop-blur-[27px] px-2.5 py-2  
                flex gap-2 text-sm text-white w-full">
                <img src={check} alt="check" />
                <span>Huge profit splits</span>
                </div>
                <div className="rounded-[80px] bg-white/10 backdrop-blur-[27px] px-2.5 py-2  
                flex gap-2 text-sm text-white w-full">
                <img src={check} alt="check" />
                <span>HFT allowed to pass</span>
                </div>
                </div>
            </div>
            <ul className="grid grid-cols-1  sm:grid-cols-2  gap-6 mt-8">
                            <li>
                              <Link
                                to="/"
                                className="btn font-syne text-customDark bg-customGreen px-10"
                              >
                                More Payouts
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                className="btn font-syne text-customLightGreen bg-customTransparentWhite px-10"
                              >
                                Get Funded
                              </Link>
                            </li>
                          </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TradingPlatforms
