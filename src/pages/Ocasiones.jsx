import { useState } from 'react'
import '../styles.css'

import Header from '../components/Header.jsx'

import Mapp from '../components/Mapp.jsx'
import Footer from '../components/Footer.jsx'




function Ocasiones() {
  const [count, setCount] = useState(0)
  return (<>
    <Header/>    
   
    <Mapp/>
    <Footer/>
 
      
    </>
  )
}

export default Ocasiones
