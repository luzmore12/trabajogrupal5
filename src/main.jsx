import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Categorias from './pages/Categorias.jsx';
import Ocasiones from './pages/Ocasiones.jsx';
import TipoDeFlor from './pages/Tipodeflor.jsx';
import Pagecart from './pages/Carrito.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categorias",
    element: <Categorias/>,
  },
  {
    path: "/ocasiones",
    element: <Ocasiones/>,
  },
  {
    path: "/tipo-flor",
    element: <TipoDeFlor/>,
  },
  {
  path: "/pagecart",
  element: <Pagecart />,
},


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
