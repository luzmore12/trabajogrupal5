import React from "react"

const Categorias = () => {
  const data = [
    {
    
      cateImg: "./images/category/GIR4.png",
      cateName: "",

      cateImg: "./images/category/LIR2.png",
      cateName: "",

      cateImg: "./images/category/MARG3.png",
      cateName: "",

      cateImg: "./images/category/ROS4.png",
      cateName: "",
    },
    
      
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categorias
