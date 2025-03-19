import React from "react";
import { motion } from "framer-motion";
import DiscordBgImg from "../assets/images/discordCommunity.png";

export default function DiscordCommunity() {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

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

  return (
    <section className="relative z-[4]">
      <div className="max-w-[1230px] w-[90%] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-white rounded-[32px] text-center 
          border border-[rgba(49,60,56,0.40)] px-10 py-[100px] max-md:px-5 bg-[rgba(11,172,117,0.05)] bg-no-repeat
          max-lg:py-20 max-md:py-12"
          style={{
            backgroundImage: `url(${DiscordBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.span
            variants={fadeInUpVariant}
            className="text-lg font-syne leading-snug uppercase tracking-[0.9px] text-[#FDFEFE] mb-4 max-md:mb-3 max-md:text-base"
          >
            Your Journey Starts Here
          </motion.span>
          <motion.h2
            variants={fadeInUpVariant}
            className="text-[56px] font-semibold leading-[1.2] mb-8 max-lg:mb-6 max-md:mb-5 text-[#FDFEFE]
            max-xl:text-5xl max-lg:text-4xl max-md:text-3xl"
          >
            Join Our Discord Community
          </motion.h2>
          <motion.h3
            variants={fadeInUpVariant}
            className="text-[40px] font-medium text-white leading-[1.3]
            max-xl:text-4xl max-lg:text-3xl max-md:text-2xl"
          >
            Dive Into Eden-FX
          </motion.h3>
          <motion.p
            variants={textLoadVariant}
            className="my-4 mx-auto text-center max-w-[694px] text-xl font-syne max-lg:text-lg max-md:text-base"
          >
            Sign up now to enter into our monthly $100k giveaway! And more
            exclusive giveaways, discounts & promotions.
          </motion.p>
          <motion.div
            variants={fadeInUpVariant}
            className="px-2 py-2 mx-auto flex items-center justify-between bg-white rounded-full overflow-hidden shadow-lg text-sm w-full max-w-[531px]"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 text-gray-700 outline-none max-w-[80%] max-md:max-w-[50%]"
            />
            <button className="btn bg-[#0EF3A5] text-black text-[16px] max-w-[184px] py-[15px] h-[55px] rounded-[50px] font-semibold">
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
