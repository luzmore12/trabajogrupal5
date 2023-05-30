import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  // // Alternar menú
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categorias d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categorias <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/paginas'>paginas</Link>
              </li>
              <li>
                <Link to='/usuario'>cuenta de usuario</Link>
              </li>
              <li>
                <Link to='/vendedor'>cuenta de vendedor</Link>
              </li>
              <li>
                <Link to='/rastrear'>rastrear mi pedido</Link>
              </li>
              <li>
                <Link to='/contacto'>contacto</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close Inicio-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
