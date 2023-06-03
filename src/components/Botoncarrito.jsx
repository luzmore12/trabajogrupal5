import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function ShoppingCartButton() {
  return (
    <Link to="/pagecart">
      <button><i className="fa fa-shopping-bag" aria-hidden="true"></i></button>
    </Link>
  );
}

export default ShoppingCartButton;
