import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/website/Home';
import Benefits from './components/website/Benefits';
import Cashiers from './components/website/Cashiers';
import TakeCareOfYourself from './components/website/TakeCareOfYourself';
import AboutUs from './components/website/AboutUs';
import Desktop from './components/desktop/Desktop';
import Chat from './components/needs/ButtonSupport/Chat';
import Call from './components/needs/ButtonSupport/Call';
import VideoCall from './components/needs/ButtonSupport/Videocall';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/cajeros" element={<Cashiers />} />
        <Route path="/cuidate" element={<TakeCareOfYourself />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/chat" element={<Chat />} />}
        <Route path="/llamada" element={<Call />} />
        <Route path="/videollamada" element={<VideoCall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
