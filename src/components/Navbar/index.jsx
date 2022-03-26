import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpeg';
import './style.css';

export default function Login() {
  const [navbarOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const sessionStorage = JSON.parse(localStorage.getItem('session'));
    if (sessionStorage) {
      setLogout(true);
    }
  }, []);

  const handleClickHome = () => {
    window.location.href = '/';
  };

  const handleClickLogout = () => {
    localStorage.setItem('session', null);
    window.location.href = '/login';
  };

  return (
    <nav className="relative flex h-16 flex-wrap items-center justify-between bg-blue-stone">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm flex flex-row font-bold text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            <img src={logo} alt="Logo Saint Patrick" className="navbar-logo h-9 mr-2" id="app-logo" />
            <span className="text-cream-can mr-2 mt-1">BANCO</span>
            <span className="text-white mt-1">SAINT PATRICK</span>
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => handleClickHome()}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`} id="example-navbar-danger">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/inicio">
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/beneficios">
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Beneficios</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/cajeros">
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Cajeros</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/cuidate">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Cuidate</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/sobre-nosotros">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Sobre Nosotros</span>
              </a>
            </li>
            {logout && (
              <li className="nav-item">
                <button type="button" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={() => handleClickLogout()}>
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                  <span className="ml-2">Salir</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
