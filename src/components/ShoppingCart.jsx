import React from 'react';

function Ocart({ cartItems }) {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
    </div>
  );
}

export default Ocart;
