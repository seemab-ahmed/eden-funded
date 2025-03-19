import React from "react";
import ScaleUpImg from "../assets/images/scaleupAboutImg.png";
import Planet from "../assets/images/2m-globe.webp";
import Robot from "../assets/images/Vector-about.svg";

const ScaleUpAbout = () => {
    return (
        <section className="py-[180px] relative">
            <div className="max-w-[1620px] w-[90%] mx-auto">
                <div className="rounded-[80px] p-10 max-xl:px-[3%] grid grid-cols-1 
                    md:grid-cols-2 gap-[90px] max-2xl:gap-12 max-xl:gap-9 items-center
                    bg-sec-radial backdrop-blur-[25px] border-2 border-[#B6D3FF] 
                    border-opacity-10 text-white max-lg:rounded-[40px] relative z-10">
                    
                    <div className="max-md:order-2">
                        <img src={ScaleUpImg} alt="Scale Up" className="w-full" />
                    </div>
                    
                    <div className="max-md:order-1 max-md:text-center">
                        <h3 className="font-medium text-5xl max-lg:text-4xl max-md:text-3xl leading-[1.2] max-w-[488px] max-md:mx-auto">
                            Scale Up To 2M
                        </h3>
                        <p className="text-[18px] leading-[1.4] font-normal mt-[20px] max-w-[488px]
                            font-syne text-[rgba(216,218,255,0.60)] max-md:mx-auto">
                            We help you build the skill, maximize your profits and become the asset. Trade our funds and receive up to 90% profit!
                        </p>
                    </div>

                    {/* Horizontal Line */}
                    <div className="absolute top-[-2px] inset-x-0 w-[80%] h-[2px] bg-line-bg mx-auto block max-md:w-[60%]"></div>
                </div>
            </div>

            {/* Planet Image - Left Side */}
            <div className="absolute left-[5px] bottom-[-140px] w-[40%] max-w-[680px] z-[-1] 
                max-xl:bottom-[-80px] max-lg:bottom-[-60px]">
                <img src={Planet} alt="Planet" className="w-full" />
            </div>

            {/* Robot Image - Right Side */}
            <div className="absolute right-0 top-[-200px] bottom-[-100px] w-[30%] max-w-[580px] z-[-1] 
                max-xl:bottom-[-80px] max-lg:bottom-[-60px]">
                <img src={Robot} alt="Robot" className="w-full" />
            </div>
        </section>
    );
};

export default ScaleUpAbout;
