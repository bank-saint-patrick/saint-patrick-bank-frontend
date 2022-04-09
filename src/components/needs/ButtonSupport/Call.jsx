import React from "react";
import { Link } from "react-router-dom";

import call from "../../../assets/Call.jpeg";
import Navbar from "../../Navbar";

export default function Call() {
  return (
    <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
      <Navbar />
      <div className="pt-28 xl:pt-10 lg:flex items-center justify-center relative z-10 container mx-auto">
        <div className="w-screen lg:w-5/12 h-full">
          <img
            aria-label="people smiling"
            className="mx-auto pb-10 lg:p-10"
            src={call}
            alt="people smiling"
          />
        </div>

        <div className="w-screen flex h-screen flex block p-5 lg:w-7/12 lg:mx-8 px-8 h-full rounded-md">
          <div className="bg-white flex flex-col justify-center px-10">
            <span className="text-plantation text-2xl text-center font-semibold mb-2">
              ¡Por favor ingresá tus datos en los espacios de abajo, asi
              podremos contactarte!
            </span>
            <form className="text-center px-20 mb-6">
              <input
                class="flex-col bg-white border border-1 border-teal-700 mx-auto w-full md:w-3/4 p-1 rounded-xl py-3 my-3 font-semibold "
                type="text"
                label="nombre"
                placeholder="Escribe tu Nombre"
              />
              <input
                class="flex-col bg-white border border-1 border-teal-700 mx-auto w-full md:w-3/4 p-1 rounded-xl py-3 my-3 font-semibold "
                type="phone"
                label="phone"
                placeholder="Escribe tu teléfono"
              />
            </form>
            <div className="linksActions flex flex-col text-center">
              <span className="font-bold text-xl">!Ten tu telefono a la mano!</span>
              <p>
                Dentro de los próximos 5 minutos un asesor se estara comunicando
                contigo
              </p>
              <Link to="/login">
              <button
                type="submit"
                className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold"
              >
                Llamame
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
