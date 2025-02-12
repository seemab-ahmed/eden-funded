import React from "react";
import { Link } from "react-router-dom";
import AstronautImg from "../assets/images/evaluation-astronaut.svg";
import EvaluationImg from "../assets/images/evaluation-new.png";

const Evaluation = () => {
  return (
    <section className="overflow-hidden pb-20 max-md:pb-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-end max-md:grid-cols-1">
          <div>
            <h2 className="heading-2 mb-5 max-md:text-[32px]">
              1- Step Evaluation
            </h2>
            <p className="para-1 mb-4">
              Pass The Challenge, Unlock Virtual Funding. Complete the 10%
              profit goal while managing 4% daily and 8% total drawdown during
              the training stages.
            </p>
            <p className="para-1 mb-4">
              Funded accounts are a monetized demo account with a 70% lifetime
              profit split.
            </p>
            <p className="para-1 mb-4">
              Commission-eligible simulated funds are unlocked the same-day
              after passing your challenge.
            </p>
            <p className="para-1 mb-4">
              HFT passing is allowed, for a limited time.
            </p>
            <Link
              to="/"
              className="btn bg-customTransparentWhite text-customLightGreen max-w-[263px] w-full max-md:max-w-[200px]"
            >
              Start Evaluation
            </Link>
          </div>
          <div className="-mr-[45%] max-md:m-0 max-md:max-w-[350px] relative">
            <img src={EvaluationImg} alt="evaluation-img" />
            <img src={AstronautImg} alt="evaluation-img" className="absolute left-0 right-0 top-1/4 -translate-y-1/2 mx-auto float-animation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
