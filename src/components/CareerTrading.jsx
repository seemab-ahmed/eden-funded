import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import starImage from "../assets/images/dots-bg.webp";

// Variants for animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CareerTrading = ({ mode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  // progress now represents the profit rate in percentage
  const [progress, setProgress] = useState(7.8);
  // accountSize will be controlled by both plus/minus and the slider
  const [accountSize, setAccountSize] = useState(200000);
  const [animate, setAnimate] = useState(true);

  // A constant factor to tie profit rate to account size so that:
  // accountSize = profitRate * factor. With initial values: 200000 = 7.8 * factor.
  const factor = 200000 / 7.8;

  // Define filled and track colors (using the old color scheme)
  const filledColor = "#0EF3A5";
  const trackColor = "rgba(255,255,255,0.10)";

  // Turn off the animation after the initial count up duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 4000); // 4 seconds matching the CountUp duration
    return () => clearTimeout(timer);
  }, []);

  const handleSliderChange = (event) => {
    const newProgress = parseFloat(event.target.value);
    setProgress(newProgress);
    setAccountSize(Math.round(newProgress * factor));
  };

  const handleIncrement = () => {
    setAccountSize((prev) => {
      const newSize = prev + 1; // Increase by 1 (as per current logic)
      setProgress(newSize / factor);
      return newSize;
    });
  };

  const handleDecrement = () => {
    setAccountSize((prev) => {
      const newSize = prev - 1 < 0 ? 0 : prev - 1;
      setProgress(newSize / factor);
      return newSize;
    });
  };

  // Compute slider background style for filled portion
  const sliderBackground = {
    background: `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${
      (progress / 15) * 100
    }%, ${trackColor} ${(progress / 15) * 100}%, ${trackColor} 100%)`,
  };

  return (
    <section
      ref={ref}
      className="pt-[60px] pb-20 max-md:py-10 bg-[rgb(9,22,18)] relative"
    >
      <div
        className="px-[3%] py-28 text-center
                   bg-sec-radial backdrop-blur-[25px] border-y-2 border-[#fff] 
                   border-opacity-10 pt-[60px] pb-[105px]"
      >
        <div className=" max-w-[1490px] mx-auto ">
          {/* Wrap the two-column grid in a motion.div to stagger child animations */}
          <motion.div
            className="grid grid-cols-[.9fr_1fr] gap-20 items-center max-xl:gap-14 max-lg:gap-9 max-lg:grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Account Size Card */}
            <motion.div
              className={`p-[10px] rounded-[24px] relative z-[5] text-center border border-solid border-[rgba(255,255,255,0.10)] max-lg:order-2 bg-[rgba(157,255,222,0.04)] text-white`}
              variants={fadeInUp}
            >
              <div
                className={` h-full p-8 rounded-[20px] text-center border border-solid border-[rgba(255,255,255,0.10)] flex flex-col gap-2.5 backdrop-blur-[7.5px] justify-between items-center bg-[rgba(255,255,255,0.10)] bg-no-repeat`}
                style={{ backdropFilter: "blur(7.5px)" }}
              >
                <div className="flex items-center justify-between w-full font-inter">
                  <h3 className="text-2xl font-semibold text-center mx-auto">
                    Account Size
                  </h3>
                </div>

                <div
                  className={`w-full flex justify-between items-center gap-3 p-4 rounded-[16px] border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.30)] backdrop-blur-[5px]`}
                >
                  <div
                    onClick={handleIncrement}
                    className={`pb-2 text-[30px] leading-none flex items-center justify-center cursor-pointer rounded-full w-[40px] h-[40px] shadow-iconWhite bg-[rgba(255,255,255,0.04)] backdrop-blur-[2.5px]`}
                  >
                    +
                  </div>
                  <div className="flex flex-col items-center">
                    <span className={`text-sm mb-3 block text-white`}>
                      Account Size
                    </span>
                    <span className="text-[20px] leading-tight font-semibold">
                      $
                      {animate ? (
                        <CountUp
                          start={0}
                          end={accountSize}
                          duration={4}
                          separator=","
                        />
                      ) : (
                        accountSize.toLocaleString()
                      )}
                    </span>
                  </div>
                  <div
                    onClick={handleDecrement}
                    className={`pb-2 text-[30px] leading-none flex items-center justify-center cursor-pointer rounded-full w-[40px] h-[40px] shadow-iconWhite bg-[rgba(255,255,255,0.04)] backdrop-blur-[2.5px]`}
                  >
                    -
                  </div>
                </div>
                <div
                  className={`w-full p-4 rounded-[16px] border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.30)] backdrop-blur-[5px]`}
                >
                  <span className={`text-sm mb-3 block text-white opacity-60`}>
                    Profit Rate
                  </span>
                  {/* Slider with filled background and label positioned above the thumb */}
                  <div className="relative mt-2.5">
                    {/* Label above the slider thumb */}
                    <span
                      style={{
                        position: "absolute",
                        left: `${(progress / 15) * 100}%`,
                        top: "-10px",
                        transform: "translateX(-50%)",
                        fontSize: "6px",
                        padding: "2px 4px",
                      }}
                      className={`bg-[#0EF3A5] text-black font-bold rounded-full`}
                    >
                      {progress.toFixed(1)}%
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.1"
                      value={progress}
                      onChange={handleSliderChange}
                      className="w-full h-[6px] appearance-none rounded-[100px] cursor-pointer"
                      style={sliderBackground}
                    />
                  </div>
                </div>
                <div
                  className={`p-4 w-full rounded-[16px] border border-[rgba(255,255,255,0.10)] bg-[rgba(0,0,0,0.30)] backdrop-blur-[5px]`}
                >
                  <span className={`text-sm mb-3 block text-white`}>
                    Take Home
                  </span>
                  <span className="text-[20px] leading-tight font-semibold">
                    $
                    <CountUp end={"200000"} duration={4} separator="," />
                    /Month
                  </span>
                </div>
                <div className="absolute top-[-1px] right-0 left-0 mx-auto w-[60%] h-[1px] bg-line-bg"></div>
                <div className="absolute bottom-[-1px] left-0 right-0 mx-auto w-[60%] h-[1px] bg-line-bg"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="max-lg:flex max-lg:flex-col max-lg:items-center text-left max-lg:text-center max-lg:order-1"
              variants={fadeInUp}
            >
              <span
                className="font-syne text-lg leading-snug tracking-[0.9px] uppercase text-white stroke-1 stroke-[#0EF3A5]"
                style={{
                  WebkitTextStrokeWidth: "0.5px",
                  WebkitTextStrokeColor: "#0EF3A5",
                }}
              >
                A Full Time Career
              </span>
              <h2
                className={`text-[50px] leading-tight font-semibold tracking-[-0.5px] max-lg:text-4xl text-white`}
              >
                How Much Can You Earn As A Eden Trader?
              </h2>
              <p
                className={`text-sm leading-[1.71] mx-auto mt-[10px] text-white font-syne
              `}
              >
                On average our top traders earn 7.8% you take home 90% of those
                profits
              </p>
              <div className="flex gap-[10px] mt-8 max-lg:justify-center">
                <Link
                  to="/"
                  className="btn max-w-[170px] max-lg:mx-auto h-14 bg-customGreen font-semibold text-[16px]
                  "
                >
                  Start Trading
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Star Image Overlay */}
      <div
        className="w-full h-full inset-0 absolute z-[3] pointer-events-none"
        style={{
          backgroundImage: `url(${starImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "repeat",
        }}
      ></div>
      {/* Slider Thumb Styles */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${filledColor};
          cursor: pointer;
          margin-top: -2px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${filledColor};
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default CareerTrading;
