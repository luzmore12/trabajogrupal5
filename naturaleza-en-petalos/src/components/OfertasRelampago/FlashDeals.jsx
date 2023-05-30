import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCarro }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flashofertas</h1>
          </div>
          <FlashCard productItems={productItems} addToCarro={addToCarro} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
