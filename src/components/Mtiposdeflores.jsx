import React, { useState } from 'react';
import imgtf1 from '../assets/imagenes/tiposdeflor/amordegirasol.jpg';
import imgtf2 from '../assets/imagenes/tiposdeflor/arregloderosas.jpg';
import imgtf3 from '../assets/imagenes/tiposdeflor/ramolirios.jpg';
import imgtf4 from '../assets/imagenes/tiposdeflor/Arreglorosas-margarita.jpg';

function Mtipodeflor() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const categorias = [
    { id: 1, nombre: 'Amor de Girasoles', tipo: 'ramo', imagen: imgtf1 },
    { id: 2, nombre: 'Arreglo de Rosas', tipo: 'arreglo', imagen: imgtf2 },
    { id: 3, nombre: 'Ramo de lirios', tipo: 'ramo', imagen: imgtf3 },
    { id: 4, nombre: 'Arreglo de rosas blancas', tipo: 'arreglo', imagen: imgtf4 },
  ];

  const handleCategoryClick = (tipo) => {
    setSelectedCategory(tipo);
  };

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
  };

  const addToCart = (categoria) => {
    setCartItems([...cartItems, categoria]);
  };

  const filteredCategorias = categorias.filter((categoria) => {
    if (selectedCategory && categoria.tipo !== selectedCategory) {
      return false;
    }
    return true;
  });

  const sortedCategorias = filteredCategorias.sort((a, b) => {
    if (selectedSort === 'margarita') {
      return a.nombre.localeCompare(b.nombre);
    } else if (selectedSort === 'lirios') {
      return b.nombre.localeCompare(a.nombre);s
    }
    return 0;
  });

  const filteredAndSortedCategorias = selectedSort ? sortedCategorias : filteredCategorias;

  return (
    <>
      <div className='tf'>
        <nav className='leftsectiontf'>
          <nav className='navfilratf'>
            <ul>
              <h6>Filtrar</h6>
              <li onClick={() => handleCategoryClick(null)}>Todos</li>
              <li onClick={() => handleCategoryClick('ramo')}>Ramo</li>
              <li onClick={() => handleCategoryClick('canasta')}>Canasta</li>
              <li onClick={() => handleCategoryClick('arreglo')}>Arreglo</li>
            </ul>
          </nav>
          <nav className='navordenartf'>
            <ul>
              <h6>Ordenar</h6>
              <li onClick={() => handleSortClick('margarita')}>Margarita</li>
              <li onClick={() => handleSortClick('lirios')}>Lirios</li>
              <li onClick={() => handleSortClick('rosas')}>Rosas</li>
            </ul>
          </nav>
        </nav>

        <section className='rightsectiontf'>
          {filteredAndSortedCategorias.map((categoria) => (
            <div className='conttf' key={categoria.id}>
              <img className='imagetf' src={categoria.imagen} alt={categoria.nombre} />
              <div className='texttf'>
                <p>{categoria.nombre}</p>
                <button onClick={() => addToCart(categoria)}>Añadir</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Mtipodeflor;
