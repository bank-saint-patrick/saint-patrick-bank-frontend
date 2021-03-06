import React from 'react';
import { useNavigate } from 'react-router-dom';

import asesoria from '../../../assets/asesoria.png';
import Navbar from '../../Navbar';

export default function Videocall() {
    const navigateTo = useNavigate();

    return (
        <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
            <Navbar />
            <div className="h-full flex flex-col justify-around py-10 xl:pt-20 lg:flex items-center lg:justify-center relative z-10 container mx-auto">
                <div className="w-full mb-8 lg:my-0 lg:w-1/2">
                    <div role="contentinfo" className="w-full lg:w-3/4 lg:mx-8 px-8 h-full">
                        <h1 tabIndex="0" className="text-blue-stone text-4xl lg:text-5xl font-black mb-8">
                            Videollamada
                        </h1>
                        <p tabIndex="0" className="text-md md:text-lg text-gray-800 font-semibold mb-2">
                            En un un plazo de maximo 5 minutos nos conectaremos contigo a traves de una videollamada, para resolver tus dudas o ayudarte con tus consultas.
                        </p>
                        <p tabIndex="0" className=" text-lg md:text-3xl text-gray-800 font-bold mb-8">
                            ¡No te desconectes!
                        </p>
                        <button onClick={() => navigateTo(-1)} className="boton bg-red-500 border-2 border-white hover:bg-white hover:border-2 text-white hover:font-semibold w-max px-4 lg:w-1/3 rounded-xl py-3 font-bold">
                            Salir
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-col border-4 border-teal lg:w-1/2 lg:mx-8 rounded-t-md">
                    <img className="mx-auto object-fill w-full" src={asesoria} alt="people smiling" />
                </div>
            </div>
        </div>
    );
}
