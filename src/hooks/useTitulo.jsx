import { useEffect } from 'react';

const useTitulo = (textoTitulo = 'Sin titulo') => {
  useEffect(() => {
    document.title = `Toyland - ${textoTitulo}`;
  }, []);
};

export default useTitulo;
