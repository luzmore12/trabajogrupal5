import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import ProductItem from './components/ProductItem';
import ShoppingCartProduct from './components/ShoppingCartProduct';
import { reducerCart, productsInitialState } from './reducers/shoppingCart_reducer';
import TYPES from './reducers/actionTypes';
import Inicio from './components/Inicio';
import Categorias from './components/Categorias';
import Ocaciones from './components/Ocaciones';
import Tipos de flor  from './components/Tipos de flor';
import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">

       {/* Add Menu Component */}
        <Navbarmenu />
        <Switch> 
          <Route exact path="/" component={Inicio}/>
          <Route path="/Categorias" component={Categorias}/>
          <Route path="/Ocaciones" component={Ocaciones}/>
          <Route path="/Tipos de flor" component={Tipos de flor}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;


// carrito de productos//

function App() {

  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }

  const calculateTotalPriceOfCart = () => {
    dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART })
  }


  return (
    <>
      
      <h2 className='subtitle_products'>PROMOCION ESPECIAL</h2>
      <div className='container_grid_products'>
        {
          state.products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart} />
          })
        }
      </div>

      <hr />
      <h2 className='subtitle_shopping_cart'>carrito</h2>
      <div className='container_buttons'>
        <button className='btn btn_totalPrice' onClick={() => calculateTotalPriceOfCart()}>Precio total</button>
        {state.totalPriceShoppingCart > 0 && <p className='totalPrice_shoppingCart'>Precio total: {state.totalPriceShoppingCart}</p>}
        <button className='btn btn_ClearCart' onClick={() => clearCart()}>Vaciar carrito</button>
      </div>
      {
        state.cart.length === 0 && <p className='text_NoProductsInCart'>No hay productos en el carrito</p>
      }

      <div className='container_grid_shopping_cart'>


        {
          state.cart.map((productCart) => {
            return <ShoppingCartProduct key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
          })
        }
      </div>
    </>
  )
}

export default App