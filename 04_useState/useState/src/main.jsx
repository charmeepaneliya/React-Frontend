import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './components/state_01.jsx'
import PrevState from './components/prev_state_02.jsx'
import MultipleState from './components/multiple_state_03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <State/>
    <PrevState/>
    <MultipleState/>
  </StrictMode>,
)
