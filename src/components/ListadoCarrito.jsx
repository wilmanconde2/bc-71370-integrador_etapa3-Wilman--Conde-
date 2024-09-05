import { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';
import ItemCarrito from './ItemCarrito';

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext);

  const handleComprar = () => {
    alert('Gracias por su comprar');
    guardarCarritoContext();
    limpiarCarritoContext();
  };

  const handleVaciar = () => {
    limpiarCarritoContext();
  };

  return (
    <>
      <table className='tabla-carrito'>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            {/* // TODO cambiar cantidad productos   */}
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length <= 0 ? (
            <tr>
              <td colSpan='6' className='carrito-vacio'>
                El carrito está vacío
              </td>
            </tr>
          ) : (
            carrito.map((producto, idx) => <ItemCarrito producto={producto} key={idx} />)
          )}
        </tbody>
      </table>
      <hr />
      {!carrito.length <= 0 && (
        <>
        <div colSpan='6' className='total'>{`Total ${123}`}</div>
        <div className='contenedor'>
          <button className='contenedor__btn empty' onClick={handleVaciar}>
            Vaciar Carrito
          </button>
          <button className='contenedor__btn' onClick={handleComprar}>
            Comprar
          </button>
        </div>
        </>
      )}
    </>
  );
};

export default ListadoCarrito;

