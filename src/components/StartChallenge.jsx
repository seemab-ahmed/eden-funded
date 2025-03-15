import React from 'react'
import ChallengeGrph from "../assets/images/challengeGraph.png"

const StartChallenge = () => {
  return (
    <section className='px-14 text-white mt-[180px] mb-[180px]'>
         <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pb-[16px]'>
         The Steps to Become a Eden-FX Trader
            </h2>
            <p className='text[18px] leading-[28px] text-center pb-[88px]'>Swift and effortless: Obtain your trading credentials and commence trading in under a minute.</p>
    <div className='flex items-center w-[1621px] max-w-full mx-auto rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
        <img src={ChallengeGrph} alt="heart iamge" className='p-10 w-[758px] h-[629px] ' />
        <div className='w-[570px] pl-[50px]'>
            <h2 className='font-medium text-[48px] leading-[62.5px]'>Starting Your Challenge</h2>
            <p className='text-[18px] leading-[29px] font-[400] py-[20px]'>You have the opportunity to show your trading potential and work towards achieving the profit target. There's no imposed time limit; you only need to trade for a minimum of 5 trading days. The key is to maintain profitability while staying within the maximum drawdown limit.</p>
        </div>
        </div>
        </section> 
  )
}

export default StartChallenge
