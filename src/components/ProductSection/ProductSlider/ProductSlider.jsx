import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./product-slider.scss";
import ProductItem from "../../ProductItem/ProductItem";
import { useSelector } from "react-redux";

const ProductSlider = () => {
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  const productLoading = useSelector((state) => state.products.loading);
  const productList = useSelector((state) => state.products.items);
  if (!productList) return;

  return (
    <div className="position-relative product-slider">
      <Swiper
        modules={[Grid, Navigation]}
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={30}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductItem {...item} />
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
