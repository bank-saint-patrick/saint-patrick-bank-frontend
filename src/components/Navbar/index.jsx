import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [logout, setLogout] = useState(false);

    const url = window.location.href;

    const route = url.split('/')[3];

    useEffect(() => {
        const sessionStorageGet = JSON.parse(sessionStorage.getItem('session'));
        if (sessionStorageGet) {
            setLogout(true);
        }
    }, []);

    const handleClickLogout = () => {
        sessionStorage.removeItem('session');
        window.location.href = '/login';
    };

    return (
        <nav className="relative flex h-16 flex-wrap items-center justify-between bg-blue-stone">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a className="flex flex-row font-bold text-xl leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
                        <img src={logo} alt="Logo Saint Patrick" className="navbar-logo h-9 mr-2" id="app-logo" />
                        <span className="text-cream-can mr-2 mt-1 hidden xsm:flex">BANCO</span>
                        <span className="text-white mt-1 hidden xsm:flex">SAINT PATRICK</span>
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} />
                    </button>
                </div>
                <div className={`hidden lg:flex flex-grow items-center`} id="example-navbar-danger">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
                                <span className="ml-2">Inicio</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/beneficios">
                                <span className="ml-2">Beneficios</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/sucursales">
                                <span className="ml-2">Sucursales</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/sobre-nosotros">
                                <span className="ml-2">Sobre Nosotros</span>
                            </a>
                        </li>
                        {logout && route === 'login' ? (
                            <li className="nav-item">
                                <button type="button" className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={() => handleClickLogout()}>
                                    <span className="ml-2">Salir</span>
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/login">
                                    <span className="ml-2">Acceder a tu cuenta</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={`${navbarOpen ? 'flex' : 'hidden'} lg:hidden bg-blue-stone absolute z-50 top-[60px] right-0 w-full sm:w-1/2`}>
                    <ul className="w-full">
                        <li className="nav-item w-full">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
                                <span className="ml-2">Inicio</span>
                            </a>
                        </li>
                        <li className="nav-item bg-cream-can w-full">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-blue-stone hover:opacity-75" href="/beneficios">
                                <span className="ml-2">Beneficios</span>
                            </a>
                        </li>
                        <li className="nav-item w-full">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/sucursales">
                                <span className="ml-2">Sucursales</span>
                            </a>
                        </li>

                        <li className="nav-item bg-cream-can w-full">
                            <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-blue-stone hover:opacity-75" href="/sobre-nosotros">
                                <span className="ml-2">Sobre Nosotros</span>
                            </a>
                        </li>
                        {logout && route === 'login' ? (
                            <li className="nav-item w-full">
                                <button type="button" className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={() => handleClickLogout()}>
                                    <span className="ml-2">Salir</span>
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item w-full">
                                <a className="p-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/login">
                                    <span className="ml-2">Acceder a tu cuenta</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
