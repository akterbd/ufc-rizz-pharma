import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./product-slider.scss";
import ProductItem from "../../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import Loading from "../../Loader/Loading";

const ProductSlider = () => {
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
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween:"15" },
          480: { slidesPerView: 2, spaceBetween:"15" },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {productLoading ? <Loading /> : productList.map((item, index) => (
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
