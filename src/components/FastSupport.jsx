import React from 'react'
import FastSupportImg from "../assets/images/fastSupportimg.png"

const FastSupport = () => {
  return (
    <section className='px-14 text-white mt-[180px] mb-[180px]'>
         <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pb-[88px]'>
         Why You Should partner with Us?
            </h2>
    <div className='flex items-center w-[1621px] max-w-full mx-auto rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
        <img src={FastSupportImg} alt="heart iamge" className='p-10 w-[758px] h-[629px] ' />
        <div className='w-[488px] pl-[50px]'>
            <h2 className='font-medium text-[48px] leading-[62.5px]'>Fast Support</h2>
            <p className='text-[18px] leading-[29px] font-[400] py-[20px]'>We understand how at times you need answers fast! Thats why we operate 24/7 7 days a week, and a support team just for our partners!</p>
        </div>
        </div>
        </section> 
  )
}

export default FastSupport
