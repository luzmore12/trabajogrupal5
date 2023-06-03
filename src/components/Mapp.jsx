import React, { useState } from 'react';
import imgcategoria1 from '../assets/imagenes/categorias/Arreglodelirios.jpg';
import imgcategoria2 from '../assets/imagenes/categorias/CanastaMargaritas.jpg';
import imgcategoria3 from '../assets/imagenes/categorias/Ramoderosas.jpg';
import imgcategoria4 from '../assets/imagenes/categorias/RamoGirasoles.jpg';

function Mapp() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const categorias = [
    { id: 1, nombre: 'Arreglo de lirios', tipo: 'arreglo', imagen: imgcategoria1 },
    { id: 2, nombre: 'Canasta de margaritas', tipo: 'canasta', imagen: imgcategoria2 },
    { id: 3, nombre: 'Ramo de rosas', tipo: 'ramo', imagen: imgcategoria3 },
    { id: 4, nombre: 'Ramo de Girasoles', tipo: 'ramo', imagen: imgcategoria4 },
  ];

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
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
      return b.nombre.localeCompare(a.nombre);
    }
    return 0;
  });

  const filteredAndSortedCategorias = selectedSort ? sortedCategorias : filteredCategorias;

  return (
    <>
      <div className='mapp'>
        <nav className='leftsectionmapp'>
          <nav className='navfiltradomap'>
            <ul>
              <h6>Filtrar</h6>
              <li onClick={() => handleCategoryClick(null)}>Todos</li>
              <li onClick={() => handleCategoryClick('ramo')}>Ramo</li>
              <li onClick={() => handleCategoryClick('canasta')}>Canasta</li>
              <li onClick={() => handleCategoryClick('arreglo')}>Arreglo</li>
            </ul>
          </nav>
          <nav className='navordenarmap'>
            <ul>
              <h6>Ordenar</h6>
              <li onClick={() => handleSortClick('margarita')}>Margarita</li>
              <li onClick={() => handleSortClick('lirios')}>Lirios</li>
              <li onClick={() => handleSortClick('rosas')}>Rosas</li>
            </ul>
          </nav>
        </nav>

        <section className='rightsectionmapp'>
          {filteredAndSortedCategorias.map((categoria) => (
            <div className='contcategoria' key={categoria.id}>
              <img className='imagencategoria' src={categoria.imagen} alt={categoria.nombre} />
              <div className='textcategoria'>
                <p>{categoria.nombre}</p>
                <p>carrito</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Mapp;
