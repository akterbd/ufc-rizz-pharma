import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import quate from "@/assets/img/quate.svg";
import authorPhoto from "@/assets/img/review-author-img.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./review-slider.scss";
import StarRating from "./StarRating";
import Heading from "../Heading/Heading";

const reviews = [
  { id: 1, name: "John Williams", designation:"Lead designer", rating:4, authorImg:authorPhoto, review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 2, name: "John Williams", designation:"Lead designer", rating:4, authorImg:authorPhoto, review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 3, name: "John Williams", designation:"Lead designer", rating:4, authorImg:authorPhoto, review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 4, name: "John Williams", designation:"Lead designer", rating:4, authorImg:authorPhoto, review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
  { id: 5, name: "John Williams", designation:"Lead designer", rating:4, authorImg:authorPhoto, review: "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously." },
];

const ReviewSlider = () => {
  return (
    <section className="reviews">
      <div className="review-slider">
        <Heading>Hear What <span>Rizz</span> Patients Have To Say</Heading>
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          initialSlide={2}
          spaceBetween={20}
          // loop={true}
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
    </section>
  );
};

export default ReviewSlider;
