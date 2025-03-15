import React from 'react'
import SuccessStorieImg from "../assets/images/succesgraph (3).png"

const SuccessStories = () => {
  return (
    <section className='px-14 text-white mt-[168px] mb-[180px]'>
<div className='flex items-center w-[1621px] max-w-full mx-auto rounded-[80px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)]'>
   <img src={SuccessStorieImg} alt="heart iamge" className='p-10 w-[758px] h-[629px] ' />
   <div className='w-[488px] pl-[50px]'>
       <h2 className='text-white font-saira text-[48px] font-medium leading-[62px]'>Many success stories.. Are you next?</h2>
   </div>
   </div>
   </section> 
  )
}

export default SuccessStories
