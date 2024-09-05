import { Link } from 'react-router-dom';
import useTitulo from '../hooks/useTitulo';

const Cuenta = () => {
  useTitulo('Cuenta');

  return (
    <>
      <div className='section-login'>
        <div className='section-login__info'>
          <form action='http://localhost:8080/login' className='login' method='post' target='_blank'>
            <div>
              <img src='../img/logo-color-bg-transparent.svg' alt='logo' />
            </div>
            <fieldset>
              <legend>Inicia sesión en Toyland</legend>
              <div className='section-login__login'>
                <div>
                  <div className='lbl-user'>
                    <label htmlFor='user'>Usuario</label>
                  </div>
                  <input id='user' name='user' type='text' placeholder='Nombre de usuario/Email' required />
                </div>
                <div>
                  <div className='pass'>
                    <label htmlFor='password' className='lbl-pass'>
                      Contraseña
                    </label>
                    <Link to='#'>¿Olvidaste tu contraseña?</Link>
                  </div>
                  <input id='password' name='password' type='text' placeholder='Contraseña' required />
                </div>
                <div className='login__button'>
                  <button className='btn-enviar'>Enviar</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>

        <div className='section-registro'>
          <form action='' className='section-registro__form'>
            <fieldset className='registro'>
              <legend>Regístrate</legend>
              <div className='registro__username'>
                <div className='lbl'>
                  <label htmlFor='name'>Nombre de usuario: *</label>
                </div>
                <div>
                  <input type='text' id='name' name='name' placeholder='Nombre de usuario' required />
                </div>
              </div>
              <div className='registro__email'>
                <div className='lbl'>
                  <label htmlFor='mail'>Email: *</label>
                </div>
                <div>
                  <input type='email' id='mail' name='mail' placeholder='Correo Electrónico' required />
                </div>
              </div>
              <div className='registro__button'>
                <button>Enviar</button>
              </div>
            </fieldset>
          </form>
          <div className='contact3'>
            <img src='../img/buzz.webp' alt='buzz' />
          </div>
        </div>
        {/* <!-- FIN FORMULARIO --> */}
      </div>
    </>
  );
};

export default Cuenta;
