import InfoCard from "./UI/InfoCard"

const ExpressRules = () => {
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
            title="Drawdown Type"
            percentage="Max 10%"
            description="The Drawdown Type determines the maximum percentage your account balance can decrease before breaching the challenge. Ensure proper risk management."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Drawdown Type"
            percentage="Max 10%"
            description="The Drawdown Type determines the maximum percentage your account balance can decrease before breaching the challenge. Ensure proper risk management."
          />
      <InfoCard
            // icon={DollarSign} 
            title="Drawdown Type"
            percentage="Max 10%"
            description="The Drawdown Type determines the maximum percentage your account balance can decrease before breaching the challenge. Ensure proper risk management."
          />
        </div>


      </div>
      </section>
  )
}

export default ExpressRules
