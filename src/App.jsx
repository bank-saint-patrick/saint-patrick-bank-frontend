import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/website/Home';
import Benefits from './components/website/Benefits';
import Cashiers from './components/website/Cashiers';
import TakeCareOfYourself from './components/website/TakeCareOfYourself';
import AboutUs from './components/website/AboutUs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/cajeros" element={<Cashiers />} />
        <Route path="/cuidate" element={<TakeCareOfYourself />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
