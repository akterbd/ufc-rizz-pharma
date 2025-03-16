import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./category-slider.scss";

const CategorySlider = () => {
  const items = ["All", "Best Selling Products", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="category-nav-slider text-center mt-5">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={15}
        navigation={{ nextEl: ".swiper-button-next-1", prevEl: ".swiper-button-prev-1" }}
        grid={{
          rows: 1,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <button className={`custom-btn-slide ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleButtonClick(index)}>
              {item}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev-1 btn btn-dark mx-2"></button>
      <button className="swiper-button-next-1 btn btn-dark mx-2"></button>
    </div>
  );
};

export default CategorySlider;
