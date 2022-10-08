import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Forus } from './Forus'
import { GlobalStyles } from './Styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles />
      <Forus />
    </BrowserRouter>
  </React.StrictMode>
)
