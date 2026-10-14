import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseProvider from './context/ExpenseContext.jsx'
import List from './components/List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseProvider>
      <App />
    
    </ExpenseProvider>
    
  </StrictMode>,
)
