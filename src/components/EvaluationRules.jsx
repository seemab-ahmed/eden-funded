import React from 'react'
import InfoCard from './UI/InfoCard';

const EvaluationRules = () => {
    return (
<section className=" text-white py-28 max-md:py-12 ">
    <div
      className="flex flex-col items-center max-w-full w-[95%] mx-auto px-4 text-center border-opacity-5  p-10
      max-md:px-5"
    >
      <h2 className="text-5xl font-medium my-4 max-md:text-4xl w-full max-w-[850px] leading-[62px] pb-[88px]">
      How Does Our Prime Challenge Compare With Other Companies?
      </h2>
      <div className='flex flex-wrap justify-center gap-6 items-center max-w-full pt-[73px] pb-[80px] w-[95%] mx-auto px-4 text-center rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-op bg-[rgba(11,172,117,0.04)]'>
       
      <InfoCard
            // icon={DollarSign} 
            title="Profit Target:"
            percentage=" 8%, 5%"
            description="The Profit Target denotes the mandatory profit level that must be achieved during either Phase 1 (8%) or Phase 2 (5%) of the Challenge. This calculation exclusively considers closed positions. It's important to note that reaching the Profit Target must align with the Minimum Trading Days rule."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Max Overall Drawdown:"
            percentage="10%"
            description="Trailing to the cumulative losses, and should these losses exceed 10% of the initial balance at any juncture, taking into account both open and closed positions as well as any associated trading fees such as spreads and commissions."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Drawdown Type"
            percentage="Max 10%"
            description="The Drawdown Type determines the maximum percentage your account balance can decrease before breaching the challenge. Ensure proper risk management."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Max Daily Drawdown: "
            percentage="5%"
            description="This rule imposes a limitation on daily losses, capping them at a maximum of 5% of the initial account balance. It takes into account both open and closed positions and resets daily at midnight, aligning with the account balance at that specific time (5 PM EST)"
          />
      <InfoCard
            // icon={DollarSign} 
            title="No Time Limits"
            // percentage="Max 10%"
            description="We believe in allowing you the freedom to trade at your own pace. That's why we have removed any time constraints on all assessments, giving you the flexibility to pass them at your leisure."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Min Trading Days:"
            percentage="5"
            description="Minimum Trading Days: Traders are required to engage in trading activities for a minimum of 5 days (completing at least one order on each of these trading days). It is not mandatory for these 5 days to be consecutive."
          />
        </div>


      </div>
      </section>
      );
}

export default EvaluationRules
