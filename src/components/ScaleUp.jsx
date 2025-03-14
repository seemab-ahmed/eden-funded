import React from 'react'
import { Link } from 'react-router-dom'

const ScaleUp = () => {
  return (
    <section className=" text-white py-28 max-md:py-12 ">
    <div
      className="flex flex-col items-center max-w-full w-[1132px] mx-auto px-4 text-center rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5  p-10
      max-md:px-5 bg-[#0b380d]"
    >
      <h2 className="text-[48px] font-semibold pt-[118px] pb-5 ">
      Scale Up To 2M
      </h2>
      <p className="text-[16px] text-white  pb-[50px] font-medium max-w-[700px] mx-auto max-md:text-base">
      We help you build the skill, maximize your profits and become the asset. Trade our funds and receive up to 90% profit!
      </p>
            <Link
              to="/"
              className="btn text-white text-[16px] px-8 py-4  border-[#B6FFB9] border-opacity-5 border-2 my-6"
            >
              Get Funned
            </Link>
          </div>
  </section>
  )
}

export default ScaleUp