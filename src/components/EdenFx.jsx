import React from 'react'
import EdenFxImg from "../assets/images/EdenFxImg (2).png"

const EdenFx = () => {
  return (
    <section className='px-14 text-white mt-[180px]'>
    <div className='flex items-center justify-between w-[1621px] max-w-full mx-auto rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
        <div className='w-[488px] pl-[40px]'>
            <h2 className='font-medium text-[48px] leading-[62.5px]'>Eden-FX <br/>VIP Program</h2>
            <ul class="list-inside pl-2 py-5" Style="list-style-type: square;">
  <li className='text-[18px] leading-7'>Withdraw anytime</li>
  <li className='text-[18px] leading-7 py-1'>Special promotions</li>
  <li className='text-[18px] leading-7'>92% profit split</li>
</ul>
            <h2 className='font-medium text-[24px] leading-[38.5px]'>Requirement:</h2>
            <ul class="list-inside pl-2 py-5" Style="list-style-type: square;">
            <li className='text-[18px] leading-7 pb-1'>4 Profitable months with Eden-FX</li>
            <li className='text-[18px] leading-7'>Minimum 5 payouts from Eden-FX</li>
</ul>
        </div>
        <img src={EdenFxImg} alt="heart iamge" className='py-10 pr-[136px] w-[758px] h-[629px] ' />
        </div>
        </section>
  )
}

export default EdenFx
