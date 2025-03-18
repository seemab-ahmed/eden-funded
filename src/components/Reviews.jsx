import React, { useRef, useState } from "react";
import StarImg from "../assets/images/star.svg";
import ArrowLeft from "../assets/images/arrow-left.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import AustraliaFlag from "../assets/images/australia-flag.svg";
import IndiaFlag from "../assets/images/india-flag.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
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

  const reviewsData = [
    {
      review:
        "Customer service is 10/10, the moment you put a ticket in you get a reply immediately. Their spreads are amazing. The prices are very affordable. This is hands down the best prop firm I have ever stumbled across!",
      name: "John S.",
      flag: AustraliaFlag,
    },
    {
      review:
        "AquaFunded is one of the best funding companies, there are no hidden rules that harm traders, there are no SL and lot rules. Payouts are fast and the support service is very friendly and responds quickly. AquaFunded is the best, I love it",
      name: "Ravi K.",
      flag: IndiaFlag,
    },
    {
      review:
        "Customer service is 10/10, the moment you put a ticket in you get a reply immediately. Their spreads are amazing. The prices are very affordable. This is hands down the best prop firm I have ever stumbled across!",
      name: "John S.",
      flag: AustraliaFlag,
    },
    {
      review:
        "AquaFunded is one of the best funding companies, there are no hidden rules that harm traders, there are no SL and lot rules. Payouts are fast and the support service is very friendly and responds quickly. AquaFunded is the best, I love it",
      name: "Ravi K.",
      flag: IndiaFlag,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "80px",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: "20px", } },
    ],
  };

  return (
    <section className="reviews py-20 max-md:py-12" id="reviews">
      <div className="container">
        {/* Title + Arrows */}
        <div className="mb-20 flex justify-between items-center">
          <h2 className="heading-2 text-customWhite max-md:text-[24px]">
            What Traders Say <br /> About Eden-funding
          </h2>
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
          {reviewsData.map((review, index) => (
            <div key={index} className="px-2">
              <div className="reviews-card p-8 min-h-[335px] bg-primaryLight border border-darkGray rounded-3xl max-md:p-4
              flex flex-col justify-between ">
                <div>
                <div className="flex items-center gap-3 mb-8">
                  <img src={StarImg} alt="star-img" />
                  <img src={StarImg} alt="star-img" />
                  <img src={StarImg} alt="star-img" />
                  <img src={StarImg} alt="star-img" />
                  <img src={StarImg} alt="star-img" />
                </div>
                <p className="para-1 text-customGray mb-6">"{review.review}"</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium leading-none text-[#9EA3A1] max-md:text-lg">
                    – {review.name}
                  </span>
                  <img src={review.flag} alt="flag" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
