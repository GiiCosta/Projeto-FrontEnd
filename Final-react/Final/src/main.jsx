import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowseRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Veiculos from './pages/Veiculos/Veiculos.jsx'
import Motos from './pages/Motos/Motos.jsx'
import Login from './pages/Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowseRouter>
     <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/motos" element={<Motos />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />

     </Routes>
    </BrowseRouter>
  </StrictMode>,
)
