import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const ProductSlider = () => {
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="position-relative text-center">
      <Swiper
        modules={[Grid, Navigation]}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={30}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-item">{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-nav position-relative">
        <button className="swiper-button-prev btn btn-dark mx-2"></button>
        <button className="swiper-button-next btn btn-dark mx-2"></button>
      </div>
    </div>
  );
};

export default ProductSlider;
