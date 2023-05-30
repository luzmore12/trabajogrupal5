import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/Catg/flor para boda.png",
      cateName: "flor para boda",
    },
    {
      cateImg: "./images/Catg/flor para conquistar.png",
      cateName: "flor para conquistar",
    },
    {
      cateImg: "./images/Catg/margarita de cumpleaños.png",
      cateName: "margarita de cumpleaños",
    },
    
    {
      cateImg: "./images/Catg/petalos floral.png",
      cateName: "petalos floral",
    },
    {
      cateImg: "./images/Catg/ramo de rosas tono doble.png",
      cateName: "ramo de rosas tono doble",
    },
  
  ]
  return (
    <>
      <div className='categorias'>
        <div className='chead d_flex'>
          <h1>Tipo de Flor </h1>
          <h1>Tienda </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Ver todas las flores</button>
        </div>
      </div>
    </>
  )
}

export default Catg
