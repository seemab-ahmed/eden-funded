import React from "react";
import { Link } from "react-router-dom";
import WorkImg from "../assets/images/work-astronut.svg";
import SmileIcon from "../assets/images/smile.svg";
import ShareIcon from "../assets/images/share.svg";
import TradeIcon from "../assets/images/trade.svg";

const HowItsWork = () => {
  const workCards = [
    {
      icon: SmileIcon,
      title: "Take a Challenge",
      para: "Take a challenge and push your limits beyond expectations.",
    },
    {
      icon: ShareIcon,
      title: "Unlock Capital",
      para: "Unlock capital and seize new opportunities for growth and success.",
    },
    {
      icon: TradeIcon,
      title: "Trade & Get Paid",
      para: "Trade & Get Paid—turn your skills into earnings with every transaction.",
    },
  ];
  return (
    <section className="py-20 max-md:py-12" id="how-it-works">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-0">
          <div className="max-md:flex max-md:flex-col">
            <div className="max-md:order-2">
              <h2 className="heading-2 mb-4 max-md:text-[32px]">
                How It Works
              </h2>
              <p className="para-1 text-customGray mb-8">
                Your Skills with Our Risk. You're not liable for any losses.
              </p>
              <ul className="grid grid-cols-2 max-w-[365px] gap-3 mb-16">
                <li>
                  <Link
                    to="/"
                    className="btn text-customDark bg-customGreen px-10"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="btn text-customLightGreen bg-customTransparentWhite px-10"
                  >
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>
            <img
              src={WorkImg}
              className="max-md:order-1 max-md:mb-6 max-md:max-w-[350px] float-animation"
              style={{ transform: "rotateY(-180deg)" }}
              alt="work-img"
            />
          </div>
          <div className="grid gap-4">
            {workCards.map((item, index) => (
              <div
              key={index}
                className="p-10 bg-primaryLight border border-darkGray rounded-[32px] max-w-[485px] ml-auto w-full
              max-md:p-6 max-md:ml-0"
              >
                <figure
                  className="w-16 h-16 rounded-full bg-customGreen flex items-center justify-center shadow-custom mb-12 
                max-md:mb-4 max-md:w-12 max-md:h-12"
                >
                  <img src={item.icon} alt="icon" />
                </figure>
                <h3 className="text-4xl font-medium text-customWhite leading-tight mb-4 max-md:mb-2 max-md:text-2xl">
                  {item.title}
                </h3>
                <p className="para-1 text-customGray">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HowItsWork;
