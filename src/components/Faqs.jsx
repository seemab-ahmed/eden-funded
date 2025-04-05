import React, { useState } from "react";
import { motion } from "framer-motion";
import PlusIcon from "../assets/images/plus-icon.svg";
import MinusIcon from "../assets/images/minus-icon.svg";

const faqData = [
  {
    question: "What is Eden Funding?",
    answer: "A forex prop firm offering a monetized and scaled sim-trading experience. Trade by the rules, get paid performance commissions in crypto."
  },
  {
    question: "What's the maximum allocation?",
    answer: "$600,000 across all account types."
  },
  {
    question: "How are payouts sent?",
    answer: "BTC or USD-T (ERC-20)."
  },
  {
    question: "How fast are payouts processed?",
    answer: "1–3 business days. Most are processed same day."
  },
  {
    question: "What platform do you use?",
    answer: "Platform 5 — Accessible via mobile MT5 or PC."
  },
  {
    question: "Are U.S. traders allowed?",
    answer: "Yes. U.S. access is now open under Eden 2.0."
  },
  {
    question: "Payout Schedule",
    answer: "1-Step Accounts: Bi-Weekly, Every 14 Calendar Days (50/70/80+ split). EDEN VIP: Every 5 business days (75% lifetime split)."
  },
  {
    question: "Restricted Countries",
    answer: "Cuba, Iran, North Korea, Myanmar, Russia (incl. Crimea, Donetsk, Luhansk), Somalia, Syria."
  },
  {
    question: "Daily Drawdown",
    answer: "4% trailing equity. Resets daily at market rollover."
  },
  {
    question: "Total Drawdown",
    answer: "8% trailing equity. Does not reset."
  },
  {
    question: "Consistency Rule",
    answer: "No single day or group of trades can make up more than 20% of your total payout request. Example: For a $1,000 payout, no day should contribute over $200. Consistency violations are deducted from payouts. If deductions exceed profits, the account resets. This metric automatically sets the tone that 5 minimum trading days are required per payout. Best results come from consistent, spaced-out profits."
  },
  {
    question: "News Trading",
    answer: "Fully allowed."
  },
  {
    question: "Profit Cap",
    answer: "5% of starting balance before commission split. \nEx: $300K account = $15,000 cap before profit split."
  },
  {
    question: "Get Help",
    answer: "Email: support@eden-fx.com\nLive Chat: Intercom (bottom-right of our site)\nDiscord: Members-only ticket system"
  },
  {
    question: "Request a Payout",
    answer: "Send an email to support@eden-fx.com from your registered email.\n Include:\n 1. 'I would like to request a payout'\n 2. Your MT5 account number\n3. Wallet address\n Stop trading after sending the request.\nPayouts processed within 1–3 business days."
  },
  {
    question: "Weekend Trading",
    answer: "Not allowed."
  },
  {
    question: "Choose Your Path",
    answer: "Eden offers two distinct ways forward:\n\nEDEN 1-STEP – Built for long-game traders who want to scale. Access up to $300K, scale into higher splits (50/70/80+), and grow into serious rewards — all through a restriction-free, EA-friendly evaluation. Payouts eligible bi-weekly.\n\nEDEN VIP – Built for speed. A capped $100K instant-funded account with 75% lifetime commissions and eligible payouts every 5 business days. Fast. Simple. No warm-up."
  }
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
            FAQ
          </motion.h2>
          <motion.p
            className="para-1 text-customGray max-w-[720px] mx-auto"
            variants={fadeInUpVariant}
          >
            Get the answers you need and start your journey with confidence—everything you need to know, right here.
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
                      className=" whitespace-pre-line text-base font-normal leading-[150%] text-customGray pt-3 max-w-[576px] w-full max-md:text-sm"
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
