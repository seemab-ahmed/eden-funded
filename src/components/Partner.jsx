import React from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div className="max-w-full w-[1132px] mx-auto mt-[180px] bg-cover bg-center flex flex-col items-center justify-center text-white rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,118,0.06)]">
      <h1 className="text-[48px] pt-[118px] pb-5 font-semibold">Be A Partner</h1>
      <p className=" w-[713px] text-[16px] text-center leading-5 font-medium">
        Help Grow The Eden-FX Family
      </p>
      <Link
        to="/"
        className="btn text-white text-[16px] max-w-[170px] w-full  border-[#B6FFB9] border-opacity-5 border-2 mt-[50px] mb-[117px] bg-[rgba(11,172,118,0.23)]"
      >
        Be a Partner
      </Link>
    </div>
  );
};

export default Partner;
