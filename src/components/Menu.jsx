import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css'
import Cards from './Cards';
const Menu = () => {



  return (
    <>
      <main className='main_container'>
        <section className='main_presentation'>
          <div className="main_text">
            <h2>Un Mundo Mas Sombrio y Primitivo</h2>
            <p>
              El Fimbulvetr está llegando a su fin y se profetiza que este
              dará paso al temido Ragnarök. Atreus, ahora adolescente, aún
              busca respuestas sobre su identidad como Loki, así como una
              forma de evitar que suceda el Ragnarök. Para descubrir la
              verdad, Kratos y Atreus buscarán al dios nórdico de la guerra, Tyr,
              que se creía muerto. Mientras atraviesan los nueve reinos, el dúo debe enfrentar nuevas amenazas,
              incluido Thor, el enfurecido Dios del Trueno, y Freya, su antigua aliada, que busca venganza tras
              la muerte de su hijo Baldur a manos de Kratos.
            </p>
            <div className="btn">
              <a href='https://www.g2a.com/es/god-of-war-ragnarok-ps5-psn-key-united-states-i10000302523001' target='_blank' className='buy link'>Comprar Ahora</a >
              <a href='https://www.facebook.com/gaming/godofwarragnarok' target='_blank' className='link border'>Saber Mas</a >
            </div>
          </div>
        </section>
        <img src="src/assets/kratos y atreus.png" alt="kratos y atreus" className='character' />
      </main>
      <section className='container'>
        <Cards />
      </section>
      <section className='collage' data-aos="fade-right">
        <div className="collage_cointaner">
          <div className="collage_img">
            <img src="src/assets/gameplay.jpeg" alt="gameplay 1" className='collage_imgs' />
            <img src="src/assets/gameplay 2.jpg" alt="gameplay 2" className='collage_imgs' />
            <img src="src/assets/gameplay 3.jpg" alt="gameplay 3" className='collage_imgs' />
          </div>
          <div className="collage-text">
            <h2>Reino Nordico</h2>
            <p>
              En la mitología nórdica, el mundo se divide en 9 reinos
              que tienen sus propias características y funciones.
              Por lo tanto, se pueden dividir en tres niveles: el
              nivel superior, central e inferior. Estos reinos
              descansan en el árbol del mundo, Yggdrasil, y pueden
              comunicarse entre sí a través de medios mágicos.

              Asgard. Asgard es el reino de los Aesir, un grupo de
              dioses soberanos liderados por Odín. También es donde
              viven Thor, Loki y Freya, entre otros. Este mundo se
              describe como una ciudad celestial, conectada a Midgard
              por un puente de arcoíris.
            </p>
          </div>
        </div>
      </section>
      <section className='collage' data-aos="fade-down">
        <div className="arms_container">
          <h2>Armas legendarias</h2>
          <div className="arm">
            <div className="first">
              <div className='arms_text'>
                <p>Leviatán</p>
                <span>
                  Esta hacha es el arma más poderosa de todas las tierras
                  nórdicas, creada por los dos hermanos enanos, Sindri y Brok,
                  para destruir el mismísimo martillo de Thor y poner fin a
                  su sendero de muerte y destrucción.
                </span>
              </div>
              <div>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/section7a-combat-axe?fmt=png-alpha&scl=1" alt="leviatan" className='arms_img' />
              </div>
            </div>
            <div className="first">
              <div className='arms_text'>
                <p>El Arco de Garra</p>
                <span>
                  Fue elaborado con madera de un árbol tejo por la madre de Atreus,
                  Faye, quien también le enseñó a usarlo durante sus cacerías de
                  práctica. Lo hizo más grande de lo normal para que Atreus pudiera
                  seguir usándolo al crecer.
                </span>
              </div>
              <div>
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/section7a-combat-bow?fmt=png-alpha&scl=1" alt="arco atreus" className='arms_img' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='collage'>
        <div className="footer">
          <a href="https://www.linkedin.com/in/pomasqui-ronny-46ab6a219/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/RonnyPomasqui27" target='_blank'><i class="fa-brands fa-github"></i></a>
          <div>
            <p>Fan page / unofficial site</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;