import React from "react";
import { Link } from "react-router-dom";
import TradeBg from "../assets/images/trade-bg.png";

const Trade = () => {
  return (
    <section className="py-20 max-md:py-12">
      <div className="container">
        <div className="rounded-[32px] py-[100px] px-10 bg-primaryLight border border-darkGray text-center max-md:px-6 max-md:py-10 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${TradeBg})` }}>
          <span className="text-lg font-normal leading-none text-customWhite uppercase tracking-[0.9px] mb-4 max-md:text-base">
            Trade Smart
          </span>
          <h2 className="heading-2 text-5xl text-customWhite mb-4 max-md:text-[32px]">
            HFT Series 1-Step Evaluation
          </h2>
          <p className="text-customGray max-w-[600px] w-full mx-auto mb-8">
            Unlock up to 500K in maximum simulated funding and elevate your
            trading potential with expert strategies.
          </p>
          <Link
            to="/"
            className="btn text-customDark max-w-[330px] w-full mx-auto bg-customGreen"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trade;
