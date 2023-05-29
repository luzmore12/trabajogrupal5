import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>NaturalezaEnPetalos</h1>
          <p>El cliente es muy importante. </p>          
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>Tienda de aplicaciones</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nosotros</h2>
            <ul>
              <li>Términos y condiciones</li>
            
            </ul>
          </div>
          <div className='box'>
            <h2>Atención al cliente</h2>
            <ul>
              <li>Cómo comprar </li>
              <li>estante de su orden </li>
              <li>Devoluciones y reembolsos </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contacto </h2>
            <ul>
              <li>cali-colombia</li>
              <li>Email: naturaleza-petalos@gmail.com</li>
              <li>cell: 3175480713</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
