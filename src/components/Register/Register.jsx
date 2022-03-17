import React from "react";
import logo from "../presets/logo.jpeg";
// import "./login.css";

// Crear un objeto json con usuarios ficticios

// Crear una functión para hacer el registro ficticio

export const Registro = () => {
  // llamaar a la función del registro

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="grid grid-rows-6 w-screen divide-y-4 divide-solid divide-gray-300 h-96 visible">
        <div className="grid grid-cols-4 bg-white text-sm px-3 py-2">
          <div className="flex inline-block mx-4 my-2 col-span-4" id="register_brand">
            <span className="text-custom-st-patrick-yw py-1">BANCO</span>
            <span className="text-custom-st-patrick-gn ml-1 mr-2 py-1">SAINT PATRICK</span>
            <a href="/login" className="ml-1">
              <img src={logo} alt="logo no encontrado" width="27em" className="pb-1" id="app-logo" />
            </a>
          </div>
        </div>
        <div className="row-span-5 h-full py-12">
          <form className="grid grid-rows-2 gap-1 bg-white w-5/6 h-auto shadow-md shadow-slate-300 mx-5 xs:p-20 sm:mx-14 md:mx-20 lg:mx-24">
            <legend className="py-24 text-center text-2xl">Registrarme en la sucursal virtual</legend>
            <ul className="grid grid-rows-5 grid-cols-2 gap-2 sm:grid-rows-5 grid-cols-2 md:grid-rows-3 grid-cols-3 lg:grid-rows-3 grid-cols-3 xl:grid-rows-3 grid-cols-3 2xl:grid-rows-3 grid-cols-3">
              <li className="flex flex-col">
                <label htmlFor="fullnameLogup" className="mr-2 px-1">
                  Nombre completo
                </label>
                <input type="text" id="fullnameLogup" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className="flex flex-col">
                <label className="mr-2 px-1">Apellidos completos</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col">
                <label className="mx-2 px-1">Número de Identificación</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col">
                <label className="mx-2 px-1">Teléfono</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col">
                <label className="mx-2 px-1">Número de producto</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col">
                <label className="mx-2 px-1">Correo Electrónico</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col">
                <label className="mx-2 px-1">Usuario</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className=" flex flex-col xs:bg-red-100">
                <label>Crear contraseña</label>
                <input type="text" className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56" />
              </li>
              <li className="px-2 py-5 w-36">
                <input
                  type="submit"
                  className="bg-custom-st-patrick-gn rounded-md w-44 h-10 text-white cursor-pointer"
                  value="Registrarme"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
