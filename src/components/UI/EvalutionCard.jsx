import React from "react";
import { motion } from "framer-motion";

const EvalutionCard = ({ animation, title, percentage, description }) => {
  // Text load variant for blurred-to-clear effect
  const textLoadVariant = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      transition: { duration: 2, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 bg-[rgba(255,255,255,0.10)] text-left text-white p-[48px_30px_64px] rounded-[24px] border relative border-[#0EF3A5] border-opacity-5 max-xl:p-[30px_20px_40px]"
    >
      <div className="bg-green-600 w-8 h-8 rounded-full flex items-start">
        {/* Optional Icon */}
      </div>
      <motion.h4
        className="text-[32px] font-medium mb-2 max-xl:text-[28px] max-lg:text-2xl max-xl:mb-0"
        variants={textLoadVariant}
      >
        {title}: <span className="text-white">{percentage}</span>
      </motion.h4>
      <motion.p
        className="text-[16px] leading-relaxed text-white font-syne max-w-[376px]"
        variants={textLoadVariant}
      >
        {description}
      </motion.p>
      <div className="absolute inset-[-1px_0_auto] w-[80%] h-[1px] bg-divider mx-auto block"></div>
      <div className="absolute inset-[auto_0_-1px] w-[80%] h-[1px] bg-divider mx-auto block"></div>
    </motion.div>
  );
};

export default EvalutionCard;
