import { useState } from 'react'

import './App.css'
import Props_01 from './components/props_01'
import Conditional_Rendaring_02 from './components/Conditional_rendaring_02'
import Conditional_rendaring_03 from './components/Conditional_rendaring_03'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    {/* <Props_01 name ="alice"/>
    <Props_01 name ="alice"/>
    <Props_01 name ="alice"/> */}

    {/* <Conditional_Rendaring_02/> */}

    < Conditional_rendaring_03/>
      
    </>
  )
}

export default App
