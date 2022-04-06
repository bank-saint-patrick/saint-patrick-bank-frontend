import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/website/Home';
import { Turns } from './components/Turns';
import Benefits from './components/website/Benefits';
import Cashiers from './components/website/Cashiers';
import TakeCareOfYourself from './components/website/TakeCareOfYourself';
import AboutUs from './components/website/AboutUs';
<<<<<<< HEAD
import Desktop from './components/desktop/Desktop';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/turnos" element={<Turns />} />
                <Route path="/beneficios" element={<Benefits />} />
                <Route path="/cajeros" element={<Cashiers />} />
                <Route path="/cuidate" element={<TakeCareOfYourself />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
                <Route path="/desktop" element={<Desktop />} />
            </Routes>
        </BrowserRouter>
    );
=======
import Products from './components/desktop/Product/index';
import Desktop from './components/desktop/Desktop/index';
import { NotFound } from './components/NotFound/NotFound';
import './App.css';

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
>>>>>>> 1f281368acc7dfb00a632a26715d5c7626922d82
}

export default App;
