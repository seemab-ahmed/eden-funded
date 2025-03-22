import React from "react";
import { motion } from "framer-motion";
// import DiscordBgImg from "../assets/images/discordCommunity.png";
import DiscordVideo from "../assets/video/discord.webm";

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
    <section className="relative z-[4] max-sm:pb-24">
      <div className="max-w-[1230px] w-[90%] mx-auto relative z-[4]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-white rounded-[32px] text-center 
           px-10 pt-[130px] max-lg:pt-[90px] pb-[100px] max-md:pt-[54px] max-sm:pt-10 max-[440px]:pt-[36px] max-md:px-5 bg-no-repeat
          max-lg:pb-20 max-md:pb-12 absolute left-0 right-0 top-[10%] mx-auto "
          // className="text-white rounded-[32px] text-center 
          // border border-[rgba(49,60,56,0.40)] px-10 py-[100px] max-md:px-5 bg-[rgba(11,172,117,0.05)] bg-no-repeat
          // max-lg:py-20 max-md:py-12"
          // style={{
          //   backgroundImage: `url(${DiscordBgImg})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <motion.span
            variants={fadeInUpVariant}
            className="text-lg font-syne leading-snug uppercase tracking-[0.9px]
            max-lg:text-[16px] text-[#FDFEFE] mb-4 max-md:mb-2 max-md:text-sm"
          >
            Your Journey Starts Here
          </motion.span>
          <motion.h2
            variants={fadeInUpVariant}
            className="text-[56px] font-semibold leading-[1.2] mb-8 max-[1400px]:mb-5 max-lg:mb-3 max-md:mb-3 text-[#FDFEFE]
            max-[1400px]:text-5xl max-lg:text-[30px] max-md:text-[28px] max-sm:text-[26px] max-sm:mb-0"
          >
            Join Our Discord Community
          </motion.h2>
          <motion.h3
            variants={fadeInUpVariant}
            className="text-[40px] font-medium text-white leading-[1.3]
            max-[1400px]:text-3xl max-lg:text-[25px] max-md:text-[20px]"
          >
            Dive Into Eden-FX
          </motion.h3>
          <motion.p
            variants={textLoadVariant}
            className="my-4 mx-auto text-center max-w-[694px] text-xl font-syne max-lg:text-base max-md:text-sm
            max-lg:my-3 max-md:mt-1 max-md:mb-2 max-[440px]:mt-7"
          >
            Sign up now to enter into our monthly $100k giveaway! And more
            exclusive giveaways, discounts & promotions.
          </motion.p>
          <motion.div
            variants={fadeInUpVariant}
            className="px-2 py-2 mx-auto flex flex-wrap items-center justify-between bg-white rounded-full overflow-hidden 
            shadow-lg text-sm w-full max-w-[531px] max-md:p-1"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 text-gray-700 outline-none max-w-[80%] max-md:max-w-[50%]"
            />
            <button className="btn bg-[#0EF3A5] text-black text-[16px] max-w-[184px] py-[15px] h-[55px] rounded-[50px] font-semibold max-lg:h-[40px] max-md:h-[38px]
            max-md:text-sm">
              Join Now
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative  w-full h-full block z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover mx-auto max-w-[1680px] xl:max-h-[600px]">
            <source src={DiscordVideo} type="video/webm" />
            <source src={DiscordVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
    </section>
  );
}
