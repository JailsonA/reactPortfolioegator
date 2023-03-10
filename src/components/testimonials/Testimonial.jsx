import './testimonial.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/* import './styles.css'; */

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const data = [
    {
      avatar: AVT1,
      name: "Carol Tavares",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum neque quas quae vero itaque, asperiores aliquid nulla error. Fugit aperiam harum quidem reiciendis est commodi quo non dolores explicabo."
    },
    {
      avatar: AVT2,
      name: "Wagner Baptista",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum neque quas quae vero itaque, asperiores aliquid nulla error. Fugit aperiam harum quidem reiciendis est commodi quo non dolores explicabo."
    },
    {
      avatar: AVT3,
      name: "Junior Andrade",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum neque quas quae vero itaque, asperiores aliquid nulla error. Fugit aperiam harum quidem reiciendis est commodi quo non dolores explicabo."
    },
    {
      avatar: AVT4,
      name: "Patricia Tavares",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum neque quas quae vero itaque, asperiores aliquid nulla error. Fugit aperiam harum quidem reiciendis est commodi quo non dolores explicabo."
    }
  ]

  return (
    <section id='testimonials' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/*alteramos o div por swiper */}
      <Swiper className="container testimonial_container mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              /* alteramos o article por swiperslide */
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            );
          })
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}

export default Testimonial;