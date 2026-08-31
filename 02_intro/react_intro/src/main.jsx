import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JSX from './components/jsx_01.jsx'
import Fragment from './components/fragments_02.jsx'
import Functional from './components/functional_component._03.jsx'
import ClassComponent from './components/class_component_04.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <JSX/>
    <Fragment/>
    <Functional/>
    <ClassComponent/>
  </StrictMode>,
)
