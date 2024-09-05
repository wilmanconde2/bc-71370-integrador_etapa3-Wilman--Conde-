import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='search-bar__logo-container'>
        <img src='./img/logo-color-bg-transparent.svg' className='search-bar__logo-container__image' alt='logo' />
      </div>
      <form action='#' className='search-bar__form-container'>
        <label htmlFor='busqueda' className='search-bar__form-label'>
          Toyland
        </label>
        <input type='search' className='search-bar__form-search' id='busqueda' placeholder='¿Qué estás buscando?' />
        <input type='submit' className='search-bar__form-submit' value='Buscar' />
      </form>
      <div className='search-bar__carrito-container'>
        <Link to="carrito">
        <img src='./img/cart.svg' alt='carrito' />
        </Link>
      </div>
      <div className='menu-toogle'>
        <label htmlFor='menu' className='menu-toogle__label'>
          <span className='menu-toogle__top-bread'></span>
          <span className='menu-toogle__meat'></span>
          <span className='menu-toogle__bottom-bread'></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
