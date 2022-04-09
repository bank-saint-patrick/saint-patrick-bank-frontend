import React from "react";

import chat from "../../../assets/Chat.png";
import logo from "../../../assets/logo.jpeg";
import Navbar from "../../Navbar";

export default function Chat() {
  return (
    <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
      <Navbar />
      <div className="pt-20 xl:pt-32 lg:flex items-center justify-center relative z-10 container mx-auto">
        <div className="w-screen mx-auto lg:w-1/2 h-full">
          <img
            aria-label="people smiling"
            className="mx-auto object-fill lg:p-10"
            src={chat}
            alt="people smiling"
          />
        </div>

        <div className="w-screen mx-auto flex h-screen flex-col p-5 bg-slate-100 lg:w-1/2 lg:mx-8 px-8 h-full rounded-md">
          <div className="w-sceen p-2 bg-white flex h-full rounded-md">
            <div className="w-1/12">
              <img
                className="w-auto object-contain content-center items-center align-middle p-1 mx-auto"
                src={logo}
                alt=""
              />
            </div>
            <div className="w-11/12">
              <p className="font-bold text-lg">Banco Saint Patrick</p>
              <p className="font-semibold text-sm -mt-1">Chat de Ayuda</p>
            </div>
          </div>
          <div className=" mt-3 p-2 bg-white flex h- rounded-md">
            <div className=" p-2">
              <div className=" ">
                <p className="font-thin bg-teal-50 p-2 my-2 w-fit text-sm rounded-md">
                  Bienvenido al chat de soporte del Banco Saint Patrick, ¡No te
                  desconectes!
                </p>
                <p className="timeStamp text-xs pl-2">7:10 p.m.</p>
              </div>
              <div className=" ">
                <p className="font-thin bg-teal-50 p-2 my-2 w-fit  text-sm rounded-md">
                  En unos instantes un asesor ingresara a la conversación, mientras tanto puedes ir 
                  escribiendo tu pregunta
                </p>
                <p className=" timeStamp text-xs pl-2">7:10 p.m.</p>
              </div>
            </div>
          </div>
          <div className="w-sceen p-2 mt-3 bg-white flex h-full rounded-md">
            <div className="w-10/12 md:10/12">
              <p className="align-middle m-auto text-sm -mt-1 text-gray-300">
                Escriba aqui su pregunta
              </p>
            </div>
            <div className="w-2/12 md:2/12">
              <button
                type="button"
                className="px-5 mr-1 py-1 font-bold text-sm text-blue-stone w-fit bg-teal-200 rounded-md"
              >
                enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
