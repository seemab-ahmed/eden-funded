import EvalutionCard from "./UI/EvalutionCard";

const ExpressRules = () => {
  return (
    <section className=" text-white py-28 max-md:py-12 ">
      <div className="max-w-[1620px] w-[90%] mx-auto">
        <h2 className="text-5xl font-medium mx-auto text-center max-md:text-4xl w-full max-w-[850px] leading-[1.1] mb-[88px] max-md:mb-10">
          Out One-Step Express Rules
        </h2>
      </div>

      <div
        className=" px-[3%] py-28 text-center
                   bg-sec-radial backdrop-blur-[25px] border-y-2 border-[#fff] 
                   border-opacity-10 pt-[60px] pb-[105px]"
      >
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 max-xl:gap-5 max-lg:gap-6 
       max-w-[1490px] mx-auto"
        >
          <EvalutionCard
            // icon={DollarSign}
            title="One Target"
            percentage="10%"
            description="The Profit Target denotes the mandatory profit level in our 1-step challenge that must be achieved is only 10%. This calculation exclusively considers closed positions. It's important to note that reaching the Profit Target must align with the Minimum Trading Days rule."
          />
          <EvalutionCard
            // icon={DollarSign}
            title="Max Overall Drawdown"
            percentage="4%"
            description="Trailing to the cumulative losses, and should these losses exceed 6% of the initial balance at any juncture, taking into account both open and closed positions as well as any associated trading fees such as spreads and commissions."
          />
          <EvalutionCard
            // icon={DollarSign}
            title="Max Overall Drawdown"
            percentage="6%"
            description="This rule imposes a limitation on daily losses, capping them at a maximum of 4% of the initial account balance. It takes into account both open and closed positions and resets daily at midnight, aligning with the account balance at that specific time (5 PM EST)"
          />
        </div>
        <div className="absolute inset-[-2px_0_auto] w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
      </div>
    </section>
  );
};

export default ExpressRules;
