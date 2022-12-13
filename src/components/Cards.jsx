import React from 'react';
import '../styles/cards.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Cards = () => {

  // if(scrollY >= 11){
  //   const swipper = document.querySelector('.card_container')
  //   swipper.classList.add('character')
  //   console.log('fincionasd')
  // }

  return (
    <section className='card_container' data-aos="fade-down">
      <h2 className='link'>Los Heroes de los 2 mundos.</h2>
      <div className="cards_character">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <div className="Swipper_info">
              <img src="https://actugeekgaming.com/wp-content/uploads/2021/09/God-of-War-Ragnarok-Angrboda-1.jpg" alt="" className='card_character' />
              <div className="swipper_character">
                <p>
                  Angrboda o Angerboda (“la que trae pesar”) es una gigante. Es mencionada en la
                  Edda poética en la Völuspá corta​ y en algunas ediciones, incluido en el
                  Hyndluljóð, como la madre de Fenrir junto a Loki. Además ella es la madre
                  de Jörmungandr, la serpiente de Midgard, y Hel, la regente del inframundo.
                </p>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo' />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="Swipper_info">
              <img src="https://static1-es.millenium.gg/articles/4/41/01/4/@/211930-atreus-article_m-1.JPG" alt="" className='card_character' />
              <div className="swipper_character">
                <p>
                  Atreus es el hijo que Kratos tuvo con una mujer llamada Faye cuando éste emigró
                  a tierras nórdicas. Atreus fue criado por Faye, quien le enseñó a cazar y todo
                  lo que una madre podría enseñarle a su hijo, Kratos sin embargo, se mantenía
                  distante de su propio hijo para ocultarle su verdadera naturaleza: semidiós.
                </p>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Swipper_info">
              <img src="https://pbs.twimg.com/media/E-7j1B_XoAQREOg.jpg" alt="" className='card_character' />
              <div className="swipper_character">
                <p>
                  Freya había sido la líder de los dioses Vanir, y había accedido a casarse con
                  Odín para traer la paz entre los Vanir y los Aesir, quienes estaban en guerra.
                  Durante ese tiempo se convirtió en la reina de las Valquirias.
                </p>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Swipper_info">
              <img src="https://sm.ign.com/ign_es/gallery/e/every-char/every-character-in-god-of-war-ragnarok_bzf9.jpg" alt="" className='card_character' />
              <div className="swipper_character">
                <p>
                  Kratos ha tenido un largo viaje hasta los eventos de Ragnarok. Primero,
                  estuvo ligado a los dioses griegos y pasó algunas décadas entre ellos
                  hasta los incidentes finales de Dios de la guerra 3 (2010). Después de
                  eso, no hubo señales de Kratos durante muchos años hasta que regresó a
                  Dios de la guerra (2018) en un mundo completamente nuevo.
                </p>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Swipper_info">
              <img src="https://assets.reedpopcdn.com/thor_xPTO9Oc.png/BROK/resize/1200x1200%3E/format/jpg/quality/70/thor_xPTO9Oc.png" alt="" className='card_character' />
              <div className="swipper_character">
                <p>
                  Thor es el dios del trueno. Su papel es complejo ya que tenía influencia en
                  áreas muy diferentes, tales como el clima, las cosechas, la protección, la
                  consagración, la justicia, las lidias, los viajes y las batallas.
                </p>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-logo-01-09sep21$en?$native--t$" alt="logo " className='nav_logo' />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Cards;