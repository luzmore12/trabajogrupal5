import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <h2 className='link'>Naturaleza en Petalos</h2>
      <p className='link' >El cliente es muy importante.</p>
      <div className="footer-links">
        <span>Tienda de flores</span>
        <span className="link">Sobre nosotros</span>
        <span className="link">Términos y condiciones</span>
        <span className="link">Atención al cliente</span>
        <span className="link">Cómo comprar</span>
        <span className="link">Estado de su orden</span>
        <span className="link">Devoluciones y reembolsos</span>
      </div>
      <div className="contact-info">
        <span className='link'>Contacto</span>
        <span className='link'>Cali-Colombia</span>
        <span className='link'>Email: naturaleza-petalos@gmail.com</span>
        <span className='link'>Cell: 3175480713</span>
      </div>
    </footer>
  );
}

export default Footer;
