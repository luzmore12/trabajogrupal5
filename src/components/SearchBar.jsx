import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    //accion para redirigir
    console.log('Búsqueda realizada:', searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
      <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default SearchBar;
