import EvalutionCard from "./ui/InfoCard"

const ExpressRules = () => {
  return (
    <section className=" text-white py-28 max-md:py-12 ">
    <div
      className="flex flex-col items-center max-w-full w-[1621px] mx-auto px-4 text-center border-opacity-5  p-10
      max-md:px-5"
    >
      <h2 className="text-5xl font-medium my-4 max-md:text-4xl w-full max-w-[850px] leading-[62px] pb-[88px]">
      Out One-Step Express Rules
      </h2>
      <div className='flex flex-wrap justify-center gap-6 items-center max-w-full pt-[73px] pb-[80px] w-[95%] mx-auto px-4 text-center rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-op bg-[rgba(11,172,117,0.04)]'>
       
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


      </div>
      </section>
  )
}

export default ExpressRules
