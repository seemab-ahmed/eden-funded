import React, { useState } from "react";
import { motion } from "framer-motion";
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

// Variant for fade in and move up
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// Text load variant: blurred-to-clear effect
const textLoadVariant = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 2, ease: "easeOut" }
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-20 max-md:py-12"
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="text-center mb-20 max-md:mb-8">
          <motion.h2
            className="heading-2 text-customWhite mb-5 max-md:text-[32px]"
          >
            Any Questions? Look Here
          </motion.h2>
          <motion.p
            className="para-1 text-customGray max-w-[720px] mx-auto"
            variants={fadeInUpVariant}
          >
            Get the answers you need and start your journey with confidence—everything you need to know is available right here for your success.
          </motion.p>
        </div>
        <motion.div
          className="p-10 pr-5 rounded-[32px] border border-[rgba(49,60,56,0.40)] max-w-[928px] w-full mx-auto max-md:p-4 max-md:pr-2 max-md:rounded-lg"
          variants={fadeInUpVariant}
        >
          <div className="faqs overflow-y-auto pr-5 max-md:pr-2">
            <div className="max-h-[820px] flex flex-col gap-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-primaryLight shadow-greenInset transition-all duration-300 max-md:p-4"
                 
                >
                  <div
                    className="flex items-center justify-between gap-3 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <motion.h5
                      className="text-2xl font-normal leading-none text-customWhite max-md:text-lg"
                      variants={textLoadVariant}
                    >
                      {faq.question}
                    </motion.h5>
                    <figure className="max-md:w-7">
                      <img
                        src={openIndex === index ? MinusIcon : PlusIcon}
                        alt="toggle icon"
                      />
                    </figure>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                    animate={
                      openIndex === index
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <motion.p
                      className="text-base font-normal leading-[150%] text-customGray pt-3 max-w-[576px] w-full max-md:text-sm"
                      variants={textLoadVariant}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faqs;
