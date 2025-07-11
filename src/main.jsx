import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ipad.css'
import './mobile.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
