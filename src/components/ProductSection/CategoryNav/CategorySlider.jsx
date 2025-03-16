import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./category-slider.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory, getProducts } from "../../../store/slices/products/productThunk";

const CategorySlider = () => {
  const dispatch = useDispatch();
  const categoryLoading = useSelector((state) => state.categories.loading);
  const categoryList = useSelector((state) => state.categories.items);
  if (!categoryList) return;


  const items = ["All", "Best Selling Products", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleButtonClick = (index, slug) => {
    if(slug == "all"){
      dispatch(getProducts());
    } else {
      dispatch(getProductByCategory(slug));
    }
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
        {categoryList.map((item, index) => (
          <SwiperSlide key={index}>
            <button className={`custom-btn-slide ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleButtonClick(index, item.slug)}>
              {item.name}
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
