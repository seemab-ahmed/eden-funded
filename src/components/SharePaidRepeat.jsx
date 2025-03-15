import React from 'react'

const SharePaidRepeat = () => {
    const tierOne = [
        "50 Referrals",
        "10% Commissions",
        "Coupon Remains At 5%",
    ];

    const tierTwo = [
        "100 Referrals",
        "15% Commissions",
        "Coupon Remains At 7.5%",
        "Free look Challenge",

    ];

    const tierThree = [
        "300 Referrals",
        "20% Commissions",
        "Coupon Remains At 10%",
        "$3000 Cash",
    ];

  return (
    <section className='px-14'>
        <div className='w-[95%] max-w-full mx-auto'>
            <h2 className='text-white text-center text-[48px] font-semibold leading-[62px] pb-[88px]'>
                Share, Get Paid, Repeat!
            </h2>
            <div className='w-[1621px] max-w-full mx-auto py-8 md:py-[50px] lg:py-[80px] px-[136px] bg-gradient-to-r from-green-900 via-green-700 to-green-900 rounded-[30px] border-2 border-[#B6FFB9] border-opacity-5 bg-[rgba(11,172,117,0.04)] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center'>
            <div className="bg-gradient-to-b from-green-950 to-green-700 p-6 rounded-[30px] shadow-lg w-full max-w-[424px] text-white text-center">
      <h2 className="text-[31px] font-[500px]  pb-[66px]">Tier 1</h2>
      <ul className="space-y-4">
        {tierOne.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-7 pt-3 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
            <div className="bg-gradient-to-b from-green-950 to-green-700  rounded-[30px] shadow-lg w-full max-w-[424px] text-white text-center">
      <h2 className="text-[31px] font-[500px] pt-10 pb-[66px]">Tier 2</h2>
      <ul className="space-y-4">
        {tierTwo.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-7 pt-2 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
            <div className="bg-gradient-to-b from-green-950 to-green-700 p-6 rounded-[30px] shadow-lg w-full max-w-[424px] text-white text-center">
      <h2 className="text-[31px] font-[500px]  pb-[66px]">Tier 3</h2>
      <ul className="space-y-4">
        {tierThree.map((item, index) => (
          <li
            key={index}
            className="border-t border-green-500 pb-7 pt-2 text-[20px] font-thin"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    </div>
        </div>
    </section>
  )
}

export default SharePaidRepeat
