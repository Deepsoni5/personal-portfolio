import React from "react";
import "./testimonials.css";
import data from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="container testimonials__container mySwiper"
      >
        {data.map(({ id, name, review, avatar }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
