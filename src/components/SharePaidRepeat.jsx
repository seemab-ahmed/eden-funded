import React from "react";
import globeBg from "../assets/images/globe-cut.webp";
import { motion } from "framer-motion";

const SharePaidRepeat = () => {
  const tierOne = ["50 Referrals", "10% Commissions", "Coupon Remains At 5%"];
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

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textLoadVariant = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="text-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUpVariant}
    >
      <motion.div className="max-w-[1620px] w-[90%] mx-auto">
        <motion.h2
          className="text-5xl font-medium text-center max-md:text-4xl w-full max-w-[850px] leading-[1.2] relative z-[3] mx-auto"
          variants={textLoadVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Share, Get Paid, Repeat!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-xl:gap-6 relative z-[2]
          max-w-full mt-[83px] pt-[73px] pb-[80px] mx-auto px-[5%] text-center rounded-[80px] max-md:rounded-[40px]
          bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] border-opacity-10 bg-no-repeat max-2xl:px-[3%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[tierOne, tierTwo, tierThree].map((tier, i) => (
            <motion.div
              key={i}
              className="p-[40px_28px_28px] rounded-[40px] text-white text-center bg-no-repeat bg-card-bg
              border border-[#B6D3FF] border-opacity-10 flex flex-col"
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h4
                className="text-[31px] font-medium mb-[66px] max-xl:mb-11 max-lg:mb-9 max-md:mb-6 max-2xl:text-[28px] max-xl:text-2xl max-lg:text-xl"
                variants={textLoadVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Tier {i + 1}
              </motion.h4>

              <motion.ul className="flex flex-col gap-3">
                {tier.map((item, index) => (
                  <motion.li
                    key={index}
                    className="pt-3 pb-1 text-xl font-normal font-syne relative border-t border-[#0EF3A5] border-opacity-5"
                    variants={fadeInUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.span
                      variants={textLoadVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {item}
                    </motion.span>
                    <div className="absolute inset-[-1px_0_auto] w-[90%] h-[1px] bg-divider mx-auto block "></div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Globe Background */}
      <div
        className="w-[50%] max-w-[525px] inset-[-25%_0_auto_auto] absolute z-[1]
        max-xl:inset-[-15%_0_auto_auto] max-lg:inset-[-10%_0_auto_auto]"
      >
        <img src={globeBg} alt="globe bg" />
      </div>
    </motion.section>
  );
};

export default SharePaidRepeat;
