import { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';

const Card = ({ producto }) => {
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext);

  const handleAgregar = (producto) => {
    agregarProductoAlCarritoContext(producto);
  };

  return (
    <div className='card'>
      {/* start card */}
      <article className='card__article'>
        <div className='card__image-container'>
          <img src={producto.foto} alt={producto.nombre} className='card__image' />
        </div>
        <div className='card__content'>
          <h2 className='card__heading'>{producto.nombre}</h2>
          <div className='card__description'>
            <p>{producto.categoria}</p>
          </div>

          <div className='price rating cart'>
            <p className='price__cost'>Precio ${producto.precio}</p>
            <p className='stock'>Stock: {producto.stock}</p>
            <div className='cart__button'>
              <input type='button' onClick={() => handleAgregar(producto)} value=' &#128722; Agregar al carrito' />
            </div>
          </div>
        </div>
      </article>
      {/* end card */}
    </div>
  );
};

export default Card;
