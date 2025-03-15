import React from "react";
import { Link } from "react-router-dom";

const ScaleUp = () => {
  return (
    <div className="max-w-full w-[1230px] mx-auto bg-cover bg-center flex flex-col items-center justify-center text-white rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 py-24  p-10 max-md:px-5 bg-[rgba(11,172,118,0.06)]">
      <h1 className="text-[56px] font-semibold mt-4">Scale Up To 2M</h1>
      <p className="pt-5 pb-[50px] w-[713px] text-[16px] text-center leading-5 font-medium">
        We help you build the skill, maximize your profits and become the asset.
        Trade our funds and receive up to 90% profit!
      </p>
      <Link
        to="/"
        className="btn text-white text-[16px] max-w-[339px] w-full  border-[#B6FFB9] border-opacity-5 border-2 my-6 bg-[rgba(11,172,118,0.23)]"
      >
        Traders Login
      </Link>
    </div>
  );
};

export default ScaleUp;
