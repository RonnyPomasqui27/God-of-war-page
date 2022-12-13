import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/video.css'

import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Navigation, EffectFade } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

const Videos = () => {
  return (
    <>
      <NavBar />
      <main className='videos '>
        <section className='video_principal'>
          <iframe width="460" height="290" className='video' src="https://www.youtube.com/embed/jb0LtQBNqhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section className='videos_carousel'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            effect
            speed={800}
            slidesPerView={2.5}
            loop
          >
            <SwiperSlide>
              <iframe width="430" height="260" className='video' src="https://www.youtube.com/embed/VxaOciV2u_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe width="430" height="260" className='video' src="https://www.youtube.com/embed/6WfSiMir0H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe width="430" height="260" className='video' src="https://www.youtube.com/embed/1LwLuI8DGlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe width="430" height="260" className='video' src="https://www.youtube.com/embed/JE6iXP1BXjo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Videos;