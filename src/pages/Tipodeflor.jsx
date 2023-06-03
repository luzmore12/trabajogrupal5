import { useState } from 'react'

import '../styles.css'

import Header from '../components/Header.jsx'


import Mtipodeflor from '../components/Mtiposdeflores.jsx'
import Footer from '../components/Footer'

function TipoDeFlor() {
  const [count, setCount] = useState(0)
  return (<>
    <Header/>    

    <Mtipodeflor/>
    
    <Footer/>
       
      
    </>
  )
}

export default TipoDeFlor;
