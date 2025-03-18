import React from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <section className="relative">
    <div className="py-[147px] max-lg:py-20 bg-[rgba(157,255,222,0.04)] backdrop-blur-[20px] ">
    <div className="max-w-[1132px] w-[90%] mx-auto">
      <div className="rounded-[10px] relative bg-sec-radial backdrop-blur-[5px] bg-[rgba(157,255,222,0.04)]
      pt-[118px] pb-[107px] text-white max-md:py-12 px-[3%] text-center z-[1]">
      <h2 className="font-bold text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2]">Be A Partner</h2>
    <p className="mt-5 mb-[50px] max-w-[713px] text-base text-center leading-tight font-medium mx-auto font-syne">
    Help Grow The Eden-FX Family
    </p>
    <Link
      to="/"
      className="btn text-white text-[16px] max-w-[168px] w-full border-[rgba(14,242,165,0.30)]
                         border mt-6 bg-btn-bg relative z-[5] mx-auto font-bold"
    >
      Be a Partner
    </Link>
    <div className="absolute inset-[0px_0_auto] w-[97%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
      </div>
    </div>
    </div>
    
  </section>
  );
};

export default Partner;
