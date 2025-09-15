import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import Carrito from './components/Carrito.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Carrito' element={<Carrito />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
