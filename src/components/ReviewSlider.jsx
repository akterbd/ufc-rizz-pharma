import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import quate from "./../assets/img/quate.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarRating from "./StarRating";

const reviews = [
  { id: 1, name: "John Williams", designation:"Lead designer", rating:4, authorImg:"./src/assets/img/review-author.png", review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 2, name: "John Williams", designation:"Lead designer", rating:4, authorImg:"./src/assets/img/review-author.png", review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 3, name: "John Williams", designation:"Lead designer", rating:4, authorImg:"./src/assets/img/review-author.png", review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 4, name: "John Williams", designation:"Lead designer", rating:4, authorImg:"./src/assets/img/review-author.png", review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 5, name: "John Williams", designation:"Lead designer", rating:4, authorImg:"./src/assets/img/review-author.png", review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
];

const ReviewSlider = () => {
//   const isCentered = reviews.length < 6;

  return (
    <div className="review-slider">
      <h2>Hear What <span>Rizz</span> Patients Have To Say</h2>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-item">
                <div className="img">
                    <img src={quate} alt="quate" />
                </div>
                <div className="quate">{review.review}</div>
                <div className="review-star">
                  <StarRating value={Number(review.rating)} />
                </div>
                <div className="review-author">
                    <div className="author-img">
                        <img src={review.authorImg} alt="Author Img" />
                    </div>
                    <div className="author-info">
                        <h5>{review.name}</h5>
                        <p className="mb-0">{review.designation}</p>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
