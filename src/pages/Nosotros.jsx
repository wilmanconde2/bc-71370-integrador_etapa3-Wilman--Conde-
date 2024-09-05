import { Link } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';

const Nosotros = () => {
  useTitulo('Nosotros');

  return (
    <main>
      <section className='section-about-us'>
        <h1 className='section-about-us__content content1'>Nosotros</h1>
        <div className='section-about-us__content content2'>
          <h2>Toyland</h2>
          <img src='../img/wallpaper1.1.webp' className='content2__img' alt='wallpaper1' />
          <p>
            Es la marca querida por los niños de todo el mundo... ¡y sabemos cómo divertirnos muchísimo! Puedes explorar
            increíbles actividades de juego, reseñas de juguetes, divertidas impresiones y, por supuesto, ¡MUCHOS
            juguetes! Los más atractivos, los que hay que tener, los nuevos mejores amigos favoritos y más.
          </p>
        </div>
        <div className='section-about-us__content content3'>
          <h2>Donde los niños son lo más importante!!</h2>
        </div>
        <div className='section-about-us__content content4'>
          <p>
            Síguenos en&nbsp;
            <Link to='https://www.facebook.com/' className='fb' target='_blank'>
              Facebook
            </Link>
            ,&nbsp;
            <Link to='https://x.com/?lang=es' className='x' target='_blank'>
              Twitter
            </Link>
            ,&nbsp;
            <Link to='https://www.instagram.com/' className='ig' target='_blank'>
              Instagram&nbsp;
            </Link>
            y&nbsp;
            <Link to='https://www.youtube.com/' className='yt' target='_blank'>
              Youtube&nbsp;
            </Link>
            para obtener actualizaciones de juegos, las últimas reseñas y noticias interesantes sobre nuestras
            experiencias inmersivas en la tienda. ¡Tenemos una nueva forma de jugar y estamos ansiosos por compartirla
            contigo!
          </p>
          <img src='../img/wallpaper-nosotros.webp' className='content4__img' alt='wallpaper-nosotros' />
          <p>
            Para recibir actualizaciones sobre nuevos juguetes, reseñas y consejos de juego,&nbsp;
            <Link to='./cuenta.html' className='cuenta'>
              suscríbete gratis.
            </Link>
          </p>
        </div>

        {/* <div className="section-about-us__content content7"></div>
          <div className="section-about-us__content content6"></div>
          <div className="section-about-us__content content8"></div>
          <div className="section-about-us__content content9"></div>
          <div className="section-about-us__content content10"></div>  */}
      </section>
    </main>
  );
};

export default Nosotros;
