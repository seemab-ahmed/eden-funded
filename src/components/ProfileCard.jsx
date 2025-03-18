import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import ProfileGirlImg from "../assets/images/profile-img.webp";

const ProfileCard = () => {
  // Set up the intersection observer on the section element.
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the count once
    threshold: 0.3,    // Trigger when 30% of the section is visible
  });

  return (
    <section ref={ref} className="pb-[180px] max-lg:pb-20 max-md:pb-10">
      <div className="max-w-[1240px] w-[90%] mx-auto">
        <div className="rounded-[40px] p-12 grid grid-cols-[.32fr_1fr] max-2xl:grid-cols-[.36fr_1fr] max-lg:grid-cols-1 items-center gap-14 border border-[rgba(255,255,255,0.20)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[25px]">
          {/* Profile Image */}
          <div className="max-w-[256px] max-lg:mx-auto">
            <img src={ProfileGirlImg} alt="Profile" className="w-full" />
          </div>

          {/* User Info */}
          <div className="flex-1 text-white">
            <div className="flex items-center mb-[72px] gap-6 max-xl:mb-10 max-lg:mb-9 max-lg:justify-center max-sm:gap-3 max-sm:flex-wrap max-sm:justify-center">
              <h2 className="text-[32px] max-xl:text-[28px] font-medium max-xl-text-[26px] max-lg:text-[22px] max-sm:w-full max-sm:text-center">
                Joelle Kieting
              </h2>
              <span className="text-[#0EF3A5] text-[20px] w-3 h-3 leading-[12px]">
                ●
              </span>
              <button className="text-gray-300 border-b border-white hover:text-white text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[16px]">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center text-white text-sm max-w-[656px] max-lg:mx-auto max-sm:flex-col max-sm:gap-4 ">
              {/* Stat: Referrals */}
              <div className="flex flex-col items-center w-[100px]">
                <span className="font-extrabold text-[40px] max-xl:text-[30px] max-lg:text-[24px] leading-none italic block text-center">
                  {inView ? <CountUp end={17} duration={2} /> : "0"}
                </span>
                <p className="mt-4 font-syne text-base text-center">
                  Referrals
                </p>
              </div>
              <div className="bg-border-purple w-[1px] h-16 max-sm:w-[60%] max-sm:h-[1px] max-sm:bg-border-purple-sm"></div>

              {/* Stat: Customers */}
              <div className="flex flex-col items-center w-[100px]">
                <span className="font-extrabold text-[40px] max-xl:text-[30px] max-lg:text-[24px] leading-none  italic block text-center">
                  {inView ? <CountUp end={42} duration={2.5} /> : "0"}
                </span>
                <p className="mt-4 font-syne text-base text-center">
                  Customers
                </p>
              </div>
              <div className="bg-border-purple w-[1px] h-16 max-sm:w-[60%] max-sm:h-[1px] max-sm:bg-border-purple-sm"></div>

              {/* Stat: Clicks */}
              <div className="flex flex-col items-center w-[100px]">
                <span className="font-extrabold text-[40px] max-xl:text-[30px] max-lg:text-[24px] leading-none italic block text-center">
                  {inView ? <CountUp end={40} duration={2} /> : "0"}
                </span>
                <p className="mt-4 font-syne text-base  text-center">
                  Clicks
                </p>
              </div>
              <div className="bg-border-purple w-[1px] h-16 max-sm:w-[60%] max-sm:h-[1px] max-sm:bg-border-purple-sm"></div>

              {/* Stat: Unpaid Earnings */}
              <div className="flex flex-col items-center w-[150px]">
                <span className="font-extrabold text-[40px] max-xl:text-[30px] max-lg:text-[24px] leading-none italic block text-center">
                  {inView ? (
                    <CountUp
                      prefix="$"
                      start={7000}
                      end={7261}
                      separator=","
                      duration={3}
                    />
                  ) : (
                    "$0"
                  )}
                </span>
                <p className="mt-4 font-syne text-base leading-[23px] text-center">
                  Unpaid Earnings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
