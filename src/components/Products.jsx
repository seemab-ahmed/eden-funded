import React, { useRef, useState } from "react";
import GlobeImg from "../assets/images/globe.svg";
import ArrowLeft from "../assets/images/arrow-left.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const sliderRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
    setActiveButton("prev");
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
    setActiveButton("next");
  };

  const productLists = [
    { title: "Leverage", desc: "1:100" },
    { title: "Funded Account Delivery", desc: "Same Day" },
    { title: "Profit Target", desc: "10%" },
    { title: "Max Drawdown", desc: "8%" },
    { title: "Daily Drawdown", desc: "4%" },
    { title: "EA’s", desc: "Allowed" },
    { title: "News Trading", desc: "Allowed" },
    { title: "Profit Split", desc: "70%" },
    { title: "Minimum Days", desc: "None" },
    { title: "Price", desc: "$297" },
  ];

  const productsData = [
    { title: "Evaluation", amount: "$25,000" },
    { title: "Advanced", amount: "$50,000" },
    { title: "Pro", amount: "$100,000" },
    { title: "Elite", amount: "$200,000" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-20 max-md:py-12" id="challenges">
      <div className="container">
        {/* Title + Arrows */}
        <div className="mb-20 flex justify-between items-center max-md:mb-10">
          <h2 className="heading-2 text-customWhite max-md:text-[32px]">Products</h2>
          <div className="arrows flex gap-4">
            <button
              onClick={handlePrevClick}
              className={`w-[72px] h-[72px] flex items-center justify-center
              max-md:w-14 max-md:h-14
                ${
                activeButton === "prev"
                  ? "bg-customGreen"
                  : "bg-customTransparentWhite"
              } hover:bg-customGreen transition-all text-white rounded-full`}
            >
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
            <button
              onClick={handleNextClick}
              className={`w-[72px] h-[72px] flex items-center justify-center 
                max-md:w-14 max-md:h-14
                ${
                activeButton === "next"
                  ? "bg-customGreen"
                  : "bg-customTransparentWhite"
              } hover:bg-customGreen transition-all text-white rounded-full`}
            >
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {productsData.map((product, index) => (
            <div key={index} className="px-2">
              <div className="product-card p-8 bg-primaryLight border border-darkGray rounded-3xl max-md:p-4">
                <div className="flex items-center gap-5 mb-8">
                  <figure className="w-16 h-16 rounded-[16px] bg-customGreen flex items-center justify-center shadow-custom
                  max-md:w-14 max-md:h-14 max-md:p-1">
                    <img src={GlobeImg} alt="globe-img" />
                  </figure>
                  <h3 className="text-[32px] font-medium leading-tight text-customWhite max-md:text-[24px]">
                    {product.title}
                  </h3>
                </div>
                <span className="block text-base font-normal leading-snug uppercase text-customWhite mb-1">
                  1-Step
                </span>
                <span className="block text-[40px] font-semibold leading-tight text-customWhite mb-8 max-md:text-[32px]">
                  {product.amount}
                </span>
                <Link
                  to="/"
                  className="btn text-[#131414] bg-customGreen mb-6"
                >
                  Start Challenge
                </Link>
                <div className="flex items-center justify-center relative">
                  <span className="px-5 block bg-[#0a1e17] max-w-fit text-base font-normal leading-tight uppercase text-[#7B8581]">
                    {product.title}
                  </span>
                  <span className="absolute left-0 top-1/2 translate-y-1/2 w-full h-[1px] bg-[#464547] -z-[1]"></span>
                </div>
                <ul>
                  {productLists.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-3 mb-4"
                    >
                      <div className="flex items-center gap-3 max-md:gap-2">
                        <figure className="border border-[#313C38] rounded-full w-6 h-6 flex justify-center items-center max-md:w-5 max-md:h-5 max-md:p-[2px]">
                          <span className="w-3.5 h-3.5 rounded-full bg-customGreen max-md:w-3 max-md:h-3"></span>
                        </figure>
                        <h6 className="text-base font-normal leading-none text-[#7B8581] max-md:text-sm">
                          {item.title}
                        </h6>
                      </div>
                      <span className="text-base font-normal text-right leading-tight text-customWhite max-md:text-sm">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
