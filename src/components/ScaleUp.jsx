import React from "react";
import { Link } from "react-router-dom";
import Planet from "../assets/images/2m-globe.webp";


const ScaleUp = () => {
  return (
    <section className="relative">
      <div className="py-[147px] max-lg:py-20 bg-[rgba(157,255,222,0.04)] backdrop-blur-[20px] ">
      <div className="max-w-[1132px] w-[90%] mx-auto">
        <div className="rounded-[10px] relative bg-sec-radial backdrop-blur-[5px] bg-[rgba(157,255,222,0.04)]
        pt-[118px] pb-[87px] text-white max-md:py-12 px-[3%] text-center z-[1]">
        <h2 className="font-bold text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2]">Scale Up To 2M</h2>
      <p className="mt-5 mb-[50px] max-w-[713px] text-base text-center leading-tight font-medium mx-auto font-syne">
        We help you build the skill, maximize your profits and become the asset.
        Trade our funds and receive up to 90% profit!
      </p>
      <Link
        to="/"
        className="btn text-white text-[16px] max-w-[158px] w-full border-[rgba(14,242,165,0.30)]
                           border mt-6 bg-btn-bg relative z-[5] mx-auto font-bold"
      >
        Get Funned
      </Link>
      <div className="absolute inset-[0px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
        </div>
      </div>
      </div>
      <div className="w-[40%] max-w-[440px] inset-[auto_auto_-27%_0] absolute z-[-1]
      max-xl:inset-[auto_auto_-20%_0] max-lg:inset-[auto_auto_-15%_0]">
        <img src={Planet} alt="Planet" />
      </div>
    </section>
  );
};

export default ScaleUp;
