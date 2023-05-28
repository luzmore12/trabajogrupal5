import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../img/imagen.png';


//*componentes del menu*//

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Añadir logotipo */}

                <div className="header__middle__imagen">
                <NavLink exact activeClassName='is-active' to="/">
                <img src={imagen} alt="imagen" /> 
                    </NavLink>
                 </div>
                 <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Botón de menú receptivo */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Inicio </NavLink> 
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> Categorias </NavLink> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Ocaciones <FiChevronDown /> </Link> 
                        <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Tipos de flor </NavLink> </li>
                                
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu