import React from "react";
import { Link } from "react-router-dom";
import AstronautImg from "../assets/images/element-img.png";

const Elements = () => {
  return (
    <section className="overflow-hidden py-20 max-md:py-8" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-end max-md:grid-cols-1">
          <div className="max-md:hidden max-md:max-w-[350px]">
            <img src={AstronautImg} alt="astonaut-img" />
          </div>
          <div>
            <h2 className="heading-2 text-customWhite mb-5 max-md:text-[32px]">
              Program Elements
            </h2>
            <p className="para-1 text-customGray mb-4">
              Eden Funding by Blackridge is a prop trading firm offering a
              high-reward, simulated trading experience with virtual funds. As
              part of the Blackridge ecosystem
            </p>
            <p className="para-1 text-customGray mb-4">
              Traders can showcase their skills in a risk-free virtual
              environment and earn real rewards based on our performance
              commission of 70%.
            </p>
            <p className="para-1 text-customGray mb-4">
              After the 1-Step Challenge phase, successful traders unlock
              virtual funding ensuring a low-risk yet rewarding simulated
              trading experience up to 500k.
            </p>
            <p className="para-1 text-customGray mb-4">
              All accounts are accessible via MT5 on both PC and Mobile, so you
              can trade anytime, anywhere.
            </p>
            <Link
              to="/"
              className="btn bg-customTransparentWhite text-customLightGreen max-w-[263px] w-full h-[59px] max-md:max-w-[200px]"
            >
              Start Evaluation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elements;
