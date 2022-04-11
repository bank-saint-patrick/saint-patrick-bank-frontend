import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/website/Home';
import { Turns } from './components/Turns';
import Benefits from './components/website/Benefits';
import Cashiers from './components/website/Cashiers';
import TakeCareOfYourself from './components/website/TakeCareOfYourself';
import AboutUs from './components/website/AboutUs';
import Products from './components/desktop/Product/index';
import Desktop from './components/desktop/Desktop/index';
import { NotFound } from './components/NotFound/NotFound';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path='/turnos' element={<Turns />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/sucursales" element={<Cashiers />} />
        <Route path="/cuidate" element={<TakeCareOfYourself />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path='/desktop/productos' element={<Products />} />
        <Route path='/:any' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
