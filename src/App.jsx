import { useState } from 'react'
import './components/Header.jsx'
import './styles.css'

import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Mainindex from './components/Mainindex.jsx'
import Footer from './components/Footer.jsx'





function App() {
  const [count, setCount] = useState(0)
  return (<>
    <Header/>    
    <Banner/>
    <Mainindex/>
    <Footer/>
      
      
    </>
  )
}

export default App
