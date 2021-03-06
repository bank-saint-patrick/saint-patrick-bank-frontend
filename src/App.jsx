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
import Desktop from './components/desktop/Desktop';

import Chat from './components/needs/ButtonSupport/chat';
import Call from './components/needs/ButtonSupport/Call';
import VideoCall from './components/needs/ButtonSupport/Videocall';
import ButtonSupport from './components/needs/ButtonSupport/index';

import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <ButtonSupport />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/turnos" element={<Turns />} />
                    <Route path="/beneficios" element={<Benefits />} />
                    <Route path="/sucursales/*" element={<Cashiers />} />
                    <Route path="/cuidate" element={<TakeCareOfYourself />} />
                    <Route path="/sobre-nosotros" element={<AboutUs />} />
                    <Route path="/desktop" element={<Desktop />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/llamada" element={<Call />} />
                    <Route path="/videollamada" element={<VideoCall />} />
                    <Route
                        path="*"
                        element={
                            <div className="grid place-content-center w-screen h-screen">
                                <h1 className="text-7xl font-bold text-center w-full">404</h1>
                                <h2 className="text-2xl font-bold text-center w-full">P??gina no encontrada</h2>
                                <Link to="/" className="text-xl text-center w-full mt-8 bg-cream-can rounded-lg p-2 font-bold">
                                    <h3 className="text-center w-full">Ir a inicio</h3>
                                </Link>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <ToastContainer autoClose={5000} />
        </>
    );
}

export default App;
