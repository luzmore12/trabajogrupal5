import { useState } from 'react'
import './components/Header.jsx'
import './styles.css'

import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (<>
    <Header/>    
    <Banner/>

      
    </>
  )
}

export default App
