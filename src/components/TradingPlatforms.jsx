import React from "react";
import { motion } from "framer-motion";
import PlatformImg from "../assets/images/platform-5bg.webp";
import PayoutBg from "../assets/images/payout-bg.webp";
import Shield from "../assets/images/shield.png";
import Etherum from "../assets/images/ethereum.png";
import check from "../assets/images/check.svg";
import { Link } from "react-router-dom";

// Simple fade-in variant (no movement or scaling)
const simpleFadeVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Text load variant for blurred-to-clear effect
const textLoadVariant = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const TradingPlatforms = () => {
  return (
    <motion.section
      className="py-28 max-md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="max-w-full w-[96%] mx-auto px-4 text-center max-md:w-[90%]">
        <motion.h2
          className="text-5xl text-[#FDFEFE] font-medium mb-4 max-md:text-4xl"
          variants={simpleFadeVariant}
        >
          The Eden Funding Experience
        </motion.h2>
        {/* Section Subtitle */}
        {/* <motion.p
          className="text-lg text-white text-opacity-50 mb-20 max-w-[754px] mx-auto max-md:text-base max-md:mb-10"
          variants={simpleFadeVariant}
        >
          PropPalace offers top—tier trading platforms with fast transactions,
          advanced tools, and expert support empowering you to trade with
          confidence and precision
        </motion.p> */}
        {/* Platform 5 Card */}
        <motion.div
          className="rounded-[48px] p-10 min-h-[409px] flex flex-col items-center justify-center max-md:min-h-72 max-md:p-6 max-md:rounded-3xl"
          style={{
            background: ` linear-gradient(180deg, rgba(24, 26, 56, 0.00) 0%, #181A38 100%), 
            linear-gradient(0deg, rgba(32, 158, 51, 0.32) 0%, rgba(32, 158, 51, 0.32) 100%), 
            url(${PlatformImg})  50% / cover no-repeat, rgba(121, 255, 157, 0.04)`,
          }}
          variants={simpleFadeVariant}
        >
          <motion.span
            className="bg-gradient-to-b from-[#14FF57] to-[#01FE34] 
            bg-clip-text text-transparent text-6xl font-medium text-center font-syne max-md:text-4xl"
            variants={simpleFadeVariant}
          >
            Platform 5
          </motion.span>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {/* Card 1 */}
          <motion.div
            className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-gradient-to-b from-[#1CFF14] to-[#01FE1A] 
            2xl:pl-[52px] xl:pl-[30px]  max-lg:p-[00px_0px_0px] md:pl-7  max-md:p-[40px_20px_0] 2xl:min-h-[409px] 
            grid 2xl:grid-cols-[1fr_0.95fr]  xl:grid-cols-[1fr_0.75fr] lg:grid-cols-1 md:grid-cols-[1fr_0.75fr] max-md:grid-cols-1 xl:gap-6  items-center
            max-md:rounded-3xl"
            style={{
              background: `url(${PayoutBg})no-repeat center / cover`,
            }}
            variants={simpleFadeVariant}
          >
            <div className="xl:py-16 flex flex-col justify-center">
              <motion.h4
                className="text-[#FDFEFE] text-left 2xl:text-4xl xl:text-3xl max-xl:text-[28px] max-lg:text-3xl font-medium leading-[1.2] mb-3"
                variants={simpleFadeVariant}
              >
                Payout Guarantee
              </motion.h4>
              <motion.p
                className="text-[#CFD6D3] text-xl leading-[1.4] text-left max-2xl:text-lg max-md:text-base"
                variants={simpleFadeVariant}
              >
                At Eden Funding, we value your time and success. That’s why we
                guarantee you'll receive your payment within 72 hours, or we’ll
                add an extra $500 to your payout
              </motion.p>
            </div>
            <motion.div
              className="max-lg:mx-auto block"
              variants={simpleFadeVariant}
            >
              <img src={Shield} alt="shield" />
            </motion.div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="rounded-[48px] border border-[#B6FFB9] border-opacity-10
            bg-[rgba(255,255,255,0.02)] p-8 2xl:min-h-[409px] shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
            backdrop-blur-[210px] flex flex-col justify-center max-md:rounded-3xl max-md:px-4"
            variants={simpleFadeVariant}
          >
            <motion.h4
              className="text-white text-left  text-[28px] max-lg:text-2xl font-medium leading-[1.2] mb-8"
              variants={simpleFadeVariant}
            >
              Fast & Reliable Payouts
            </motion.h4>
            <motion.div
              className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div
                className="rounded-[28px] border border-[#b6ffc6] border-opacity-10 
    bg-white/5 shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
    backdrop-blur-[210px] p-4 flex items-center justify-center"
                variants={simpleFadeVariant}
              >
                <motion.img
                  src={Etherum}
                  alt="eterum"
                  animate={{
                    filter: [
                      "brightness(1)",
                      "brightness(1.5)",
                      "brightness(1)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <motion.div
                className="relative overflow-hidden rounded-[28px] border border-[#b6ffc6] 
                border-opacity-10 bg-[rgb(255,255,255,0.05)] shadow-[inset_0px_24px_24px_-10px_rgba(1,132,254,0.04)] 
                backdrop-blur-[210px] p-[50px_24px_24px] flex flex-col justify-end gap-3"
                variants={simpleFadeVariant}
              >
                {/* Upgrades Block with text load animation */}
                <motion.span
                  className="text-sm text-[#0F0F0F] h-[44px] px-[26px] bg-[#0EF3A5] absolute top-0 left-0 flex items-center 
                rounded-[28px_0_28px_0]"
                  variants={textLoadVariant}
                >
                  Upgrades
                </motion.span>
                <motion.div
                  className="rounded-[80px] bg-white/10 backdrop-blur-[27px] px-2.5 py-2  
                  flex gap-2 text-sm text-white w-full"
                  variants={textLoadVariant}
                >
                  <img src={check} alt="check" />
                  <span>Industury Leading Commission splits</span>
                </motion.div>
                <motion.div
                  className="rounded-[80px] bg-white/10 backdrop-blur-[27px] px-2.5 py-2  
                  flex gap-2 text-sm text-white w-full"
                  variants={textLoadVariant}
                >
                  <img src={check} alt="check" />
                  <span>HFT Enabled</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.ul
              className="grid grid-cols-1  sm:grid-cols-2  gap-6 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.li variants={simpleFadeVariant}>
                <Link
                  to="/payouts"
                  target="_blank"
                  className="btn font-syne text-customDark bg-customGreen px-10"
                >
                  More Payouts
                </Link>
              </motion.li>
              <motion.li variants={simpleFadeVariant}>
                <Link
                  to="https://dashboard.eden-fx.com/auth/sign-up"
                  target="_blank"
                  className="btn font-syne text-customLightGreen bg-customTransparentWhite px-10"
                >
                  Join Eden
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TradingPlatforms;
