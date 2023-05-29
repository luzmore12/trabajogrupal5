import React from "react"
import "./style.css"

const Carro = ({ CarroItem, addToCarro , decreaseQty }) => {

  // calcular el total de artículos
  const totalPrice = CarroItem.reduce((price, item) => price + item.qty * item.price, 0)

  // cantidad total del producto
  return (
    <>
      <section className='Carro-items'>
        <div className='container d_flex'>
    

          <div className='Carro-details'>
            {CarroItem.length === 0 && <h1 className='no-items product'>No se agregan artículos en el carrito</h1>}

           {/* Mostrar elementos del carrito en Yas */}
            {CarroItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='Carro-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='Carro-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='Carro-items-function'>
                    <div className='removeCarro'>
                      <button className='removeCarro'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>

                 {/* paso: 5
                     producto ko qty lai inc ra des garne
                     */}
                    <div className='CarroControl d_flex'>
                      <button className='incCarro' onClick={() => addToCarro(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCarro' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='Carro-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='Carro-total product'>
            <h2>Resumen de la compra</h2>
            <div className=' d_flex'>
              <h4>Precio total :</h4>
              <h3>${preciototal}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carro
