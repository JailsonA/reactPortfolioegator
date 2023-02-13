import './testimonial.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
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
      <Swiper className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
      </Swiper>
    </section>
  );
}

export default Testimonial;