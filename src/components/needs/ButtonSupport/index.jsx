import React, { useState } from 'react';
import help from '../../../assets/help.jpeg';

export default function ButtonSupport() {
  const [openModalSupport, setOpenModalSupport] = useState(false);

  const handleClickOpenModalSupport = () => {
    setOpenModalSupport(true);
  };

  const handleClickCloseModalSupport = () => {
    setOpenModalSupport(false);
  };

  if (openModalSupport) {
    return (
      <div
        id="menu"
        className="fondoModal flex w-screen h-screen bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="w-full h-full p-5 sm:w-4/6 sm:h-5/6 flex m-auto justify-center items-center bg-white">
          <div className="ladoIzq flex w-5/12 h-full">
            <img
              className="object-none object-bottom items-bottom"
              src={help}
              alt=""
            />
          </div>
          <div className=" ladoDer flex-col w-7/12 h-full">
            <p className="text-blue-stone uppercase font-bold text-2xl text-center mt-10">
              Centro de ayuda Banco Saint Patrick
            </p>
            <h1 className="text-md text-gray-800 font-semibold text-center p-5">
              En el siguiente botón podrás encontrar las respuestas a las
              preguntas mas frecuentes de nuestros usuarios
            </h1>
            <div className="text-center">
              <button
                type="submit"
                className="bg-cream-can border-2 border-white hover:bg-white hover:border-2 hover:border-cream-can text-white hover:text-gray-700 hover:font-semibold mx-auto m-3 w-100 w-5/6 md:w-3/6 p-1 rounded-lg font-bold"
              >
                Preguntas Frecuentes
              </button>
            </div>

            <div className="text-center mt-5">
              <p className="text-md text-gray-800 font-semibold">
                ¿Todavía tienes dudas? No te preocupes en banco Saint Patrick
                estamos para asesorarte
              </p>
              <p className="text-md">Indícanos por que medio te gustaria que te contactáramos</p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
              >
                Chat
              </button>
              <button
                type="submit"
                className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
              >
                Videollamada
              </button>
              <button
                type="submit"
                className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
              >
                Llamada
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="mt-10 font-bold text-lg text-blue-stone hover:bg-white hover:border-2 hover:border-teal-700"
                onClick={() => handleClickCloseModalSupport()}
              >
                No quiero ayuda, deseo salir
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 w-full">
      <button
        type="button"
        className="bottom-0 mb-5 mr-5 float-right px-5 py-2 bg-cream-can text-black text-sm font-bold tracking-wide rounded-full focus:outline-none"
        onClick={() => handleClickOpenModalSupport()}
      >
        ¿Necesitas ayuda?
      </button>
    </div>
  );
}
