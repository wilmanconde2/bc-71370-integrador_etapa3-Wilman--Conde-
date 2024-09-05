import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='section-about-us__content footer-top'>
        <p>
          Para servicio al cliente, por favor <NavLink className='color-navlink' to='./contacto'>contáctenos.</NavLink>
        </p>
        <div className='logo-cont'>
          <img src='./img/logo-color-bg-transparent.svg' className='logo' alt='logo' />
        </div>
        <div className='icon'>
          <p className='icon__text'>Síguenos</p>
          <div className='icon__cont'>
            <Link to='https://www.facebook.com/' className='icon__link' target='_blank'>
              <img src='./img/facebook.svg' alt='facebook' />
            </Link>
            <Link to='https://x.com/?lang=es' className='icon__link' target='_blank'>
              <img src='./img/x.svg' alt='Twitter' />
            </Link>
            <Link to='https://www.instagram.com/' className='icon__link' target='_blank'>
              <img src='./img/instagram.svg' alt='instagram' />
            </Link>
            <Link to='https://www.youtube.com/' className='icon__link' target='_blank'>
              <img src='./img/youtube.svg' alt='youtube' />
            </Link>
            <Link
              to='https://www.google.com/maps/place/C%C3%B3rdoba+City+College/@3.4029204,-76.5079724,17z/data=!4m14!1m7!3m6!1s0x8e30a12ae03b4cad:0xbda286c9b0e4a4f!2sC%C3%B3rdoba+City+College!8m2!3d3.4029204!4d-76.5053975!16s%2Fg%2F1tdk66mz!3m5!1s0x8e30a12ae03b4cad:0xbda286c9b0e4a4f!8m2!3d3.4029204!4d-76.5053975!16s%2Fg%2F1tdk66mz?entry=ttu'
              className='icon__link'
              target='_blank'
            >
              <img src='./img/location.svg' alt='ubicacion' />
            </Link>
          </div>
        </div>
      </div>
      <div className='footer-fixed'>Copyright 2024 - WC2 - willconde2@hotmail.com</div>
    </footer>
  );
};

export default Footer;
