import useTitulo from '../hooks/useTitulo';
import Formulario from '../components/Formulario';
import Tabla from '../components/Tabla';

const Alta = () => {
  useTitulo('Alta');

  return (
    <>
      <h1 className='h1-alta'>Formulario alta de productos</h1>
      <Formulario />
      <hr />
      <Tabla />
    </>
  );
};

export default Alta;
