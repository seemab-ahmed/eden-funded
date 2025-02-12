import React, { useState } from "react";
import PlusIcon from "../assets/images/plus-icon.svg";
import MinusIcon from "../assets/images/minus-icon.svg";

const faqData = [
  {
    question: "Trading Platforrn",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Maximum Allocation",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Payout Schedule",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Broker Condition",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Prohibited Countries",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "HFT Evaluation",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Daily Drawdown",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
  {
    question: "Total Drawdown",
    answer:
      "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 max-md:py-12" id="faq">
      <div className="container">
        <div className="text-center mb-20 max-md:mb-8">
          <h2 className="heading-2 text-customWhite mb-5 max-md:text-[32px]">
            Any Questions? Look Here
          </h2>
          <p className="para-1 text-customGray max-w-[720px] mx-auto">
            Get the answers you need and start your journey with
            confidence—everything you need to know is available right here for
            your success.
          </p>
        </div>
        <div className="p-10 pr-5 rounded-[32px] border border-[rgba(49,60,56,0.40)] max-w-[928px] w-full mx-auto max-md:p-4 max-md:pr-2 max-md:rounded-lg">
          <div className="faqs overflow-y-auto pr-5 max-md:pr-2">
            <div className="max-h-[820px] flex flex-col gap-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-primaryLight shadow-greenInset transition-all duration-300 max-md:p-4"
                >
                  <div
                    className="flex items-center justify-between gap-3 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5 className="text-2xl font-normal leading-none text-customWhite max-md:text-lg">
                      {faq.question}
                    </h5>
                    <figure className="max-md:w-7">
                      <img
                        src={openIndex === index ? MinusIcon : PlusIcon}
                        alt="toggle icon"
                      />
                    </figure>
                  </div>
                  <div
                    className={`transition-all duration-400 ease-in-out ${
                      openIndex === index
                        ? "opacity-100 max-h-screen visible"
                        : "opacity-0 max-h-0 invisible"
                    }`}
                  >
                    <p className="text-base font-normal leading-[150%] text-customGray pt-3 max-w-[576px] w-full max-md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
