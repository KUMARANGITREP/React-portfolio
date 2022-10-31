import React from 'react';
import './testmonials.css';
import AVATR1 from '../../assets/avatar1.jpg';
import AVATR2 from '../../assets/avatar2.jpg';
import AVATR3 from '../../assets/avatar3.jpg';
import AVATR4 from '../../assets/avatar4.jpg';

// // import Swiper core and required modules
// import { Pagination, Navigation } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const data = [
  {
    avatar: AVATR1,
    name: 'Tina snow',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, cum? Pariatur error repudiandae, itaque reiciendis amet minus id similique fugiat ratione perspiciatis, dolore quo ut optio. Harum nihil qui quasi',
  },
  {
    avatar: AVATR2,
    name: 'Shatta Wale',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, cum? Pariatur error repudiandae, itaque reiciendis amet minus id similique fugiat ratione perspiciatis, dolore quo ut optio. Harum nihil qui quasi',
  },
  {
    avatar: AVATR3,
    name: 'Kwame Despite',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, cum? Pariatur error repudiandae, itaque reiciendis amet minus id similique fugiat ratione perspiciatis, dolore quo ut optio. Harum nihil qui quasi',
  },
  {
    avatar: AVATR4,
    name: 'John Doe',
    review:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, cum? Pariatur error repudiandae, itaque reiciendis amet minus id similique fugiat ratione perspiciatis, dolore quo ut optio. Harum nihil qui quasi',
  },
];

const Testmonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
            fuga molestias, aliquam dolorem quos
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
            fuga molestias, aliquam dolorem quos
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="Avatar One" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
            fuga molestias, aliquam dolorem quos
          </small>
        </article> */}
      </Swiper>
    </section>
  );
};

export default Testmonials;
