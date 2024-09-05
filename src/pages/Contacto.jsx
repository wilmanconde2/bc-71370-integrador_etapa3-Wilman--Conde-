import { Link } from "react-router-dom";
import useTitulo from "../hooks/useTitulo";

const Contacto = () => {
useTitulo('Contacto');

  return (
    <section className='section-contact-us'>
      <div className='section-contact-us__info contact1'>
        <div className='contact1__title'>
          <h1>Toyland</h1>
        </div>
        <div>
          <Link to='#'>
            <img src='../img/location.png' alt='address' />
          </Link>
          <p>
            Dirección: <em>Calle Goku # 38 - 20</em>
          </p>
        </div>
        <div>
          <Link to='#'>
            <img src='../img/phone.png' alt='phone' />
          </Link>
          <p>
            Teléfono: <em>+123456789</em>
          </p>
        </div>
        <div>
          <Link to='#'>
            <img src='../img/email.png' alt='mail' />
          </Link>
          <p>
            Email: <em>info.toyland@juegos.com</em>
          </p>
        </div>
        <div>
          <Link to='#'>
            <img src='../img/website.png' alt='website' />
          </Link>
          <p>
            Website: <em>https.toyland.com</em>
          </p>
        </div>
      </div>

      {/* <!-- FORMULARIO --> */}
      <div className='section-contact-us__form'>
        <form action='' className='contact'>
          <fieldset>
            <legend>Contáctenos</legend>
            <div className='contact__name'>
              <div>
                <label htmlFor='name'>Nombre: *</label>
              </div>
              <div>
                <input type='text' id='name' name='name' placeholder='Nombre' required />
              </div>
            </div>
            <div className='contact__email'>
              <div>
                <label htmlFor='mail'>Email: *</label>
              </div>
              <div>
                <input type='email' id='mail' name='mail' placeholder='Correo Electrónico' required />
              </div>
            </div>
            <div className='contact__subject'>
              <div>
                <label htmlFor='subject'>Asunto: *</label>
              </div>
              <div>
                <input type='text' id='subject' name='subject' placeholder='Asunto' required />
              </div>
            </div>
            <div className='contact__message'>
              <div>
                <label htmlFor='message'>Mensaje: *</label>
              </div>
              <div>
                <textarea id='message' name='message' placeholder='Deseo saber más sobre...' required></textarea>
              </div>
            </div>
            <div className='contact__button'>
              <button>Enviar</button>
            </div>
          </fieldset>
        </form>
        <div className='section-contact-us__img contact3'>
          <img src='../img/buzz.webp' alt='buzz' />
        </div>
      </div>
      {/* <!-- FIN FORMULARIO --> */}
    </section>
  );
};

export default Contacto;
