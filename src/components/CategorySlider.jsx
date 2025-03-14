import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CategorySlider = () => {
  const items = ["All", "Best Selling Products", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health"];

  return (
    <div className="category-nav-slider text-center mt-5">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"  // Auto width for each slide
        spaceBetween={15}      // Space between slides
        loop={true}            // Enable looping
        navigation={{ nextEl: ".swiper-button-next-1", prevEl: ".swiper-button-prev-1" }} // Custom navigation
        grid={{
          rows: 1, // Display slides in 1 row
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <button className="btn btn-outline-primary custom-btn-slide">{item}</button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons Centered Below */}
      <div className="mt-3 position-relative">
        <button className="swiper-button-prev-1 btn btn-dark mx-2">Prev</button>
        <button className="swiper-button-next-1 btn btn-dark mx-2">Next</button>
      </div>
    </div>
  );
};

export default CategorySlider;
