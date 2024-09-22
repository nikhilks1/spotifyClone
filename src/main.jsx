import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <PlayerContextProvider>
    <App />

    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
