import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/Pie de página/Pagina"
import Sdata from "./components/shops/Sdata"

function App() {
  

  
  const { productItems } = Data
  const { shopItems } = Sdata

  
  const [CarroItem, setCarroItem] = useState([])

  
  const addToCarro = (product) => {
   
    const productExit = CarroItem.find((item) => item.id === product.id)


    if (productExit) {
      setCarroItem(CarroItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

       // pero si el producto no sale en el carrito, eso significa que la tarjeta está vacía
       //se agrega un nuevo producto al carrito y su cantidad se inicial a 1

      setCarroItem([...Carroitem, { ...product, qty: 1 }])
    }
  }

  
  const decreaseQty = (product) => {
  
    const productExit = CarroItem.find((item) => item.id === product.id)

    // si el producto sale y su cantidad es 1, ejecutaremos un setCartItem divertido
     // dentro de setCartItem se ejecutaremos el filtro para verificar si item.id coincide con product.id
     // si item.id no coincide con product.id, entonces esos artículos se muestran en el carrito
     
    if (productExit.qty === 1) {
      setCarroItem(CarroItem.filter((item) => item.id !== product.id))
    } else {

        // si el producto es la salida y la cantidad de ese producto no es igual a 1
       // luego ejecutará la llamada a la función setcarroItem
       // dentro de setcarroItem ejecutaremos el método map
       // este mapa () verificará si item.id coincide con produt.id, entonces tenemos que desc la cantidad de producto por 1

      setCarroItem(CarroItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CarroItem={CarroItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCarro={addToCarro} shopItems={shopItems} />
          </Route>
          <Route path='/Carro' exact>
            <Cart CarroItem={CarroItem} addToCarro={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
