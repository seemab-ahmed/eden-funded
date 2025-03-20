import React, { useState } from "react";
import { motion } from "framer-motion";
import PlusIcon from "../assets/images/plus-icon.svg";
import MinusIcon from "../assets/images/minus-icon.svg";

const faqData = [
  {
    question: "Trading Platform",
    answer: "All accounts (Evaluation and Funded) are provided via MT5. Your account can be accessed via PC and Mobile."
  },
  {
    question: "Maximum Allocation",
    answer: "Maximum allocation is 500k. With our largest account size being 100k, you can access 5X accounts at this size. There are no limits on funded accounts as long as you contain your total funding at 500k or less."
  },
  {
    question: "Payout Schedule",
    answer: "Payouts are eligible via crypto every 14 days, with the schedule starting with your first funded account trade."
  },
  {
    question: "Broker Conditions",
    answer: "CHALLENGE PHASE: HFT Allowed, Spread: 0.1, Commission: $2, Leverage: 1:100. VIRTUAL FUNDED TRADER: Spread: 0.1, Commission: $5, Leverage: 1:30."
  },
  {
    question: "Prohibited Countries",
    answer: "We cannot accept traders residing in the United States, Cuba, Iran, North Korea, Myanmar, Russia (or the Crimea, Donetsk, or Luhansk regions of Ukraine), Somalia and Syria."
  },
  {
    question: "HFT Evaluation",
    answer: "HFT is allowed to pass the challenge. When using HFT, traders can access the funded stage same-day. HFT passes are allowed for a limited time only."
  },
  {
    question: "Daily Drawdown",
    answer: "The daily drawdown is 4%. This 4% is trailing equity based as it trails your highest equity point by 4% and is reset daily at market rollover time."
  },
  {
    question: "Total Drawdown",
    answer: "The total drawdown is 8%. This 8% is trailing equity based as it trails your highest equity point by 8% and does not reset. Losing 8% from your highest equity of the account results in a breach."
  },
  {
    question: "Consistency Metric",
    answer: "A single trading day or series of winning trades within a trading day shall not be responsible for 25% or more of the total payout request. No single trading day or series of winning trades within a trading day should account for more than 25% of the total profit in the funded account at the time of the payout request. Any trading days representing 25% or more of the total trading profit will be simultaneously deducted from the total profit amount when calculating payout eligibility. Example: For a $1000 payout request, no trading day should contribute more than $250. If the consistency deductions exceed the total profit, the account may reset, or the profit split will be adjusted to 50% for future payouts. This 50% profit split remains until the funded account fails, at which point a new evaluation account is required. Upon resetting with a new evaluation, the original 70% profit split terms will resume, with all consistency rules applied. This is our only consistency rule but should be closely adhered to for seamless payout approvals. For the best experience with Eden Funding, we encourage you to spread your profit across multiple trading days. This approach not only aligns with the consistency rule but also enhances your payout potential."
  },
  {
    question: "News Trading",
    answer: "All forms of news trading is allowed. We do not place restrictions around trading fundamentals."
  },
  {
    question: "Purchasing Options",
    answer: "Eden Funding accepts signups via crypto or credit/debit card."
  },
  {
    question: "Copy Trading",
    answer: "Copy trading internally with your own funded accounts up to 500k is permitted. Copy trading or hedging with other users on our platform will lead to a violation and void of your funded account. Any form of 3rd party funded account management via EA’s or Manual Trading is not allowed."
  },
  {
    question: "Evaluation Passing Services",
    answer: "Utilization of passing services during the demo/evaluation stage is allowed."
  },
  {
    question: "Payout Processing Time",
    answer: "Payout processing time is 1-3 Business Days via cryptocurrency. We will strive to overdeliver and process every payment faster. Our payouts team operates 7 days per week."
  },
  {
    question: "Profit Cap",
    answer: "When HFT is used to pass the challenge, the profit cap is 5% of your initial account balance. On a single 100k account, the maximum payout request would be 5k, or $3,500 after the 70% profit split. In summary, the most that can be requested for a payout at one time is $25,000 under maximum allocation conditions of 500k. $25,000 x 0.70 = $17,500 maximum withdrawal at once. This 5% cap applies relative to your account size when HFT is used to pass the challenge stage."
  },
  {
    question: "Sustainability",
    answer: "Our team’s deep network in the prop firm space gives us access to data and insider knowledge from top-performing HFT firms. We’ve crafted our programs not only for sustainability but to outperform traditional prop firms and deliver greater opportunities for growth. With a internal network of team members responsible for over $30,000,000 in collective payouts to the prop industry, we have a proven track record at hand."
  },
  {
    question: "500k Maximum Allocation (Important)",
    answer: "Please note that your funded accounts MUST have the same strategy applied on each simultaneously if you have multiple funded accounts. Clients who must use a trade copier and trade the exact strategy on all accounts when multiple accounts are acquired. Funded accounts under one user must utilize the same strategy via a trade copier. This is to prevent hedging, variance, and is implemented for risk management purposes."
  },
  {
    question: "EA Terms",
    answer: "As a respected participant of Eden Funding, you have the freedom to employ a variety of Expert Advisors (EAs) and indicators to enhance your trading methods. Our platform is compatible with: Risk management tools, Automated trading systems, Third-party bots. Note: While third-party EAs are allowed, using them in a way that mirrors the trading strategies of other users, especially by using similar EAs, could be considered copy trading. To maintain the originality of your trading style, we encourage the customization of EA configuration files. Restrictions on Specific Expert Advisors (EAs): To maintain a fair trading environment, certain EAs are not allowed on funded accounts. These include, but are not limited to: Reverse arbitrage EAs, High-frequency trading (HFT) bots, Hedge arbitrage EAs, Latency arbitrage EAs, Tick scalping EAs, Direct trade copying from other users. Penalties for Rule Violations: Using any prohibited EAs constitutes a breach of our platform’s policies and will result in: Immediate account closure. This action will be taken without prior warning. Usage of an automated trading bot during the funded stage is allowed but will apply a 50% profit (reduction from normal 70%) split cap on any payouts earned with the use of your EA."
  },
  {
    question: "Payout Method",
    answer: "Payouts are processed via BTC (Bitcoin Network) and USD-T (ERC-20)."
  },
  {
    question: "HFT Limited Access",
    answer: "HFT passing is an exclusive offer and remains available for a limited time."
  },
  {
    question: "Get Assistance",
    answer: "For support, please email our team at support@eden-funding.com."
  },
  {
    question: "Request Your Payout",
    answer: "If it has been 14 calendar days since your first funded account trade and all terms have been followed throughout your trading period, please email support@eden-funding.com from your account registered email. In this email, please state the following: 1. I would like to request a payout. 2. MT5 account number 3. Payout details. (Wallet address). Our team will respond with your payout review or approval file. Once confirmed our team will process the payment within 1-3 business days."
  },
  {
    question: "Weekend Trading",
    answer: "Weekend trading is not allowed."
  },
  {
    question: "Real/Demo Servers",
    answer: "All MT5 accounts, including those used for evaluations, are provided through a “real” server. Please note that while your evaluation account is hosted on this server, HFT (High-Frequency Trading) remains enabled to facilitate passing the evaluation."
  },
  {
    question: "HFT Concept",
    answer: "Traders Often Focus on US30 during the NY session with an optimized Set File HFT EA to fast-track Phase 1 and unlock virtual funding efficiently."
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
