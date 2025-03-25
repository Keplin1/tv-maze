import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import MainComponent from './MainComponent'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainComponent />
    </StrictMode>
  </BrowserRouter>,
)
