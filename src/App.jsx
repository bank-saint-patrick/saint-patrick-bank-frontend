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
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const url = 'http://ec2-3-139-57-252.us-east-2.compute.amazonaws.com:5000/api';

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login url={url} />} />
                    <Route path="/register" element={<Register url={url} />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/turnos" element={<Turns />} />
                    <Route path="/beneficios" element={<Benefits />} />
                    <Route path="/cajeros" element={<Cashiers />} />
                    <Route path="/cuidate" element={<TakeCareOfYourself />} />
                    <Route path="/sobre-nosotros" element={<AboutUs />} />
                    <Route path="/desktop" element={<Desktop />} />
                    <Route
                        path="*"
                        element={
                            <div className="grid place-content-center w-screen h-screen">
                                <h1 className="text-7xl font-bold text-center w-full">404</h1>
                                <h2 className="text-2xl font-bold text-center w-full">Página no encontrada</h2>
                                <Link to="/" className="text-xl text-center w-full mt-8 bg-cream-can rounded-lg p-2 font-bold">
                                    <h3 className="text-center w-full">Ir a inicio</h3>
                                </Link>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
