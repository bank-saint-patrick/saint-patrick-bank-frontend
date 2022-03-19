import React from 'react';
import Inputs from '../needs/Inputs';
import Navbar from '../Navbar';
import './login.css';

const backgroundImage = 'https://www.bbva.com/wp-content/uploads/2020/02/pareja-1920x1180.jpg';

export default function Login() {
  return (
    <div className="wrapper flex-column h-screen">
      <Navbar />
      <div className="bg-lime-100 full-height-conditional grid grid-cols-2">
        <div
          className="bg-teal-900 justify-center items-center bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="bg-white flex flex-col justify-center px-20">
          <span className="text-plantation text-4xl text-center font-bold mb-2">Bienvenido a tu</span>
          <span className="text-plantation text-4xl text-center font-light mb-4">banca en línea</span>
          <hr className="my-5" />
          <form className="text-center px-20 mb-6">
            <Inputs texto="DNI" name="dni" type="number" value="Escriba su DNI aqui" />
            <Inputs texto="Contraseña" name="dni" type="password" value="Escriba su contraseña aqui" />
            <button
              type="submit"
              className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold"
            >
              Ingresar a tu banca
            </button>
          </form>
          <div className="linksActions flex flex-col text-center">
            <a href="/" className="text-slate-700 text-sm font-normal mb-5">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/register" className="text-slate-700 text-sm font-normal">
              ¿Aun no estás registrado?
              <span className="text-teal-700 text-base font-semibold"> registrarme</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
