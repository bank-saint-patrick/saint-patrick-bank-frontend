import React from "react";
import { Inputs } from "../needs/Inputs";
import { Navbar } from "../Navbar";
import "./login.css";

// Crear un objeto json con usuarios ficticion
const usuarios = [
  {
    dni: "12345678900987654321",
    password: "qwerty",
  },
];

// Crear una functión para hacer el login ficticio
const loginAcces = (dni, password) => {
  // 1 - validar los dni
  // 2 - validar el password
  // 3 - simular el login
  // 4 - simular la redireccion a otro componente
};

export const Login = () => {
  // llamaar a la función del login

  return (
    <div className="wrapper flex-column h-screen">
      <Navbar />
      <div className="bg-lime-100 full-height-conditional grid grid-cols-2">
        <div className="bg-teal-900 flex justify-center items-center text-white">Image here</div>
        <div className="bg-white flex flex-col justify-center items-center text-white">
          <span className="text-teal-700 text-4xl text-center mb-10">
            Bienvenido a tu
            <br /> Banca Web
          </span>
          <form className="w-full text-center">
            <Inputs texto="Usuario" name="dni" type="number" value="Escriba su usuario aqui" />
            <Inputs texto="Contraseña" name="dni" type="password" value="Escriba su contraseña aqui" />
            <button className="boton bg-teal-700 border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/3 p-1 rounded-xl py-3 font-bold">
              Ingresa
            </button>
          </form>
          <div className="linksActions flex flex-col text-center">
            <a href="/" className="text-slate-700 text-sm font-normal mb-5 mt-5">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/register" className="text-slate-700 text-sm font-normal">
              ¿Aun no estás registrado?<span className="text-teal-700 text-base font-semibold"> registrarme</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
