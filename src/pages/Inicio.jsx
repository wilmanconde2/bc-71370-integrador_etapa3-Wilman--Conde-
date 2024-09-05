import { useContext } from 'react';
import useTitulo from '../hooks/useTitulo';
import Card from '../components/Card';
import ProductosContext from '../context/ProductosContext';

const Inicio = () => {
  useTitulo('Inicio');

  const { productos } = useContext(ProductosContext);

  return (
    <>
      <main>
        <section className='section-cards'>
          <header className='section-cards__header'>
            <div className='img-top'>
              <img src='./img/niño.webp' alt='niños' />
            </div>
            <h1>Toyland... Just for fun!!</h1>
            <h2>Envío gratis por ordenes mayores a $39!</h2>
            <p>XXX productos encontrados</p>
          </header>

          <div className='cards-container' id='contenedorCards'>
            {productos && productos.map((producto) => <Card key={producto.id} producto={producto} />)}
          </div>
        </section>
      </main>
    </>
  );
};

export default Inicio;
