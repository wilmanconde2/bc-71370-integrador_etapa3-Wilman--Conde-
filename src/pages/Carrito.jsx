import useTitulo from '../hooks/useTitulo';
import ListadoCarrito from '../components/ListadoCarrito';

const Carrito = () => {
  useTitulo('Carrito');

  return (
    <>
      <h1 className='h1-carrito'>Productos en tu carrito de compras</h1>
      <hr />
      <ListadoCarrito />
    </>
  );
};

export default Carrito;

// TODO agregar numero de items en el carrito
