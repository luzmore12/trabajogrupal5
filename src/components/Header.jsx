import React from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
import ShoppingCartButton from './Botoncarrito';



function Header() {
    return <>
    <div className='fixed'>
        <div className='header'>
            <div className="leftsectionheader ">             

            </div>
        
            <div className="centerHeader">
                <SearchBar />

            </div>
            <div className="rightsectionHeader">
                <ShoppingCartButton/>
            

            {/* <ul className="nav-list">
            <Link to={"/cart"} style={navStyles}>
            <li>
            Cart items: <span className="cart-count">{quantity}</span>
            </li>
            </Link>
             </ul>   */}
    
     

            </div>
        </div>

     <nav className='navbannermax'>
      <Link to="/"><div className='bannermax' href="#seccion1"><button className="buttonbannermax">Inicio</button></div></Link>
      <Link to="/categorias"> <div className='bannermax' href="#seccion1"><button className="buttonbannermax">Categorias</button></div></Link>
      <Link to="/ocasiones"><div className='bannermax' href="#seccion1"><button className="buttonbannermax">Ocasiones</button></div></Link>
      <Link to="/tipo-flor"><div className='bannermax' href="#seccion1"><button className="buttonbannermax">Tipo de flor</button></div></Link>



    </nav>

        </div>

    </>
}
export default Header;