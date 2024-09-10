import { useContext, useState } from 'react';
import CarritoContext from '../context/CarritoContext';

const ItemCarrito = ({ producto }) => {
  const { eliminarProductoDelCarritoContext, carrito } = useContext(CarritoContext);

  const handleEliminar = (id) => eliminarProductoDelCarritoContext(id);

  const subtotal = producto.cantidad * producto.precio;

  return (
    <tr>
      <td>
        <img className='img-carrito' src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td>${subtotal}</td>
      <td>
        <button className='btn-eliminar-carrito' onClick={() => handleEliminar(producto.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
