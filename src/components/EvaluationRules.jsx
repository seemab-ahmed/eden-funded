import React from "react";
import EvalutionCard from "./ui/InfoCard";

const EvaluationRules = () => {
  const InfoCardData = [
    {
      title: "Profit Target",
      percentage: "8%, 5%",
      description:
        "The Profit Target denotes the mandatory profit level that must be achieved during either Phase 1 (8%) or Phase 2 (5%) of the Challenge. This calculation exclusively considers closed positions. It's important to note that reaching the Profit Target must align with the Minimum Trading Days rule.",
    },
    {
      title: "Max Overall Drawdown",
      percentage: "10%",
      description:
        "Trailing to the cumulative losses, and should these losses exceed 10% of the initial balance at any juncture, taking into account both open and closed positions as well as any associated trading fees such as spreads and commissions.",
    },
    {
      title: "Drawdown Type",
      percentage: "Max 10%",
      description:
        "The Drawdown Type determines the maximum percentage your account balance can decrease before breaching the challenge. Ensure proper risk management.",
    },
    {
      title: "Max Daily Drawdown",
      percentage: "5%",
      description:
        "This rule imposes a limitation on daily losses, capping them at a maximum of 5% of the initial account balance. It takes into account both open and closed positions and resets daily at midnight, aligning with the account balance at that specific time (5 PM EST).",
    },
    {
      title: "No Time Limits",
      description:
        "We believe in allowing you the freedom to trade at your own pace. That's why we have removed any time constraints on all assessments, giving you the flexibility to pass them at your leisure.",
    },
    {
      title: "Min Trading Days",
      percentage: "5",
      description:
        "Minimum Trading Days: Traders are required to engage in trading activities for a minimum of 5 days (completing at least one order on each of these trading days). It is not mandatory for these 5 days to be consecutive.",
    },
  ];
  return (
    <section className=" text-white py-16 relative z-[2] max-md:pt-28">
      <div
        className="max-w-[1620px] w-[90%] mx-auto"
      >
        <h2 className="text-5xl text-center mx-auto font-medium my-4 max-md:text-4xl w-full max-w-[850px] leading-[1.1] mb-[88px] max-md:mb-10">
        Our Standard/Swing Evaluation Rules
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 max-xl:gap-5 max-lg:gap-6  px-[3%] py-28 text-center rounded-[80px] 
                   bg-sec-radial backdrop-blur-[25px] border-2 border-[#fff] 
                   border-opacity-10 pt-[60px] pb-[105px] max-md:rounded-[30px]">
          {InfoCardData.map((item, index) => (
            <EvalutionCard
              key={index}
              // icon={DollarSign}
              title={item.title}
              percentage={item.percentage}
              description={item.description}
            />
          ))}
        <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>

        </div>
      </div>
    </section>
  );
};

export default EvaluationRules;
