import React from 'react';
import { Inputs } from '../needs/Inputs';
import './login.css';

/* // Crear un objeto json con usuarios ficticion
const usuarios = [
  {
    dni: '12345678900987654321',
    password: 'qwerty',
  },
];

// Crear una functión para hacer el login ficticio
const loginAcces = (dni, password) => {
  // 1 - validar los dni
  // 2 - validar el password
  // 3 - simular el login
  // 4 - simular la redireccion a otro componente
}; */

export const Login = () => {
/*   // llamaar a la función del login */

  return (
    <div className="login">
      <div className="bg-sky-400 text-white font-semibold p-2 text-xl">
        <div className="bg-yellow-300 h-20 text-center">Lorem ipsum dolor sit amet.</div>
        <div className="bg-lime-500 text-center md:flex gap-3">
          <div className="bg-red-200 w-100 md:w-1/2">lado imagen</div>
          <div className="bg-zinc-100 p-10 w-100 md:w-1/2">
            <div className="bg-white pt-5 border border-teal-700">
              <span className="text-teal-700 text-3xl">Bienvenido a tu Banca Web</span>
              <form className="m-5 ">
                <Inputs texto="Usuario" name="dni" type="number" value="Escriba su usuario aqui" />
                <Inputs texto="Contraseña" name="dni" type="password" value="Escriba su contraseña aqui" />
                <button className="boton bg-teal-700 border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700  text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/3 p-1 rounded-xl">
                  Ingresa
                </button>
                <br />
                <span className="text-slate-700 text-sm font-normal">¿Olvidaste tu contraseña?</span>
                <a href="/register" className="text-slate-700 text-sm font-normal">
                  ¿Aun no estás registrado?<span className="text-teal-700  text-base font-semibold"> registrarme</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
