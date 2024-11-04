import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppSuscripciones } from './AppSuscripciones'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppSuscripciones></AppSuscripciones>
  </StrictMode>,
)
