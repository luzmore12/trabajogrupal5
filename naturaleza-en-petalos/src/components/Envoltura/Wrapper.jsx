import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-sharp fa-regular fa-flower"></i>
      title: "Navío Nacional",
      decs: "Ofrecemos precios competitivos en nuestros más de 50  tipos de arreclos de flores".,
    },
    {
      cover: <i class="fa-sharp fa-regular fa-flower"></i>
      title: "Pago Seguro",
      decs: "Ofrecemos precios competitivos en nuestros más de 50  tipos de arreclos de flores".,
    },
    {
      cover: <i class="fa-sharp fa-regular fa-flower"></i>
      title: "Compra con confianza ",
      decs: "Ofrecemos precios competitivos en nuestros más de 50  tipos de arreclos de flores".,
    },
    
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
