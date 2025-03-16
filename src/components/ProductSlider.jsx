import React from "react";
import addToCartDark from "@/assets/img/add-to-cart-dark.svg";
import rizzReta from "@/assets/img/Rizz-Reta-GLP3-24mg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const ProductSlider = () => {
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="position-relative product-slider">
      <Swiper
        modules={[Grid, Navigation]}
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={30}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-item">
              <div className="badge-product">Research use only</div>
              <div className="product-info">
                <div className="product-thumb">
                  <img src={rizzReta} alt="Product" />
                </div>
                <div className="product-title">Retarutide</div>
              </div>
              <div className="price-area">
                <div className="price">$39.99/per month</div>
                <div className="add-to-cart">
                  <img src={addToCartDark} alt="Add to Cart" />
                </div>
              </div>              
            </div>
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
