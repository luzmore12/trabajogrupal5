import React from "react"
import Categorias from "./Categorias"
import "./Inicio.css"
import SliderInicio from "./Slider"

const Inicio = () => {
  return (
    <>
      <section className='Inicio'>
        <div className='container d_flex'>
          <Categorias />
          <SliderInicio />
        </div>
      </section>
    </>
  )
}

export default Inicio
