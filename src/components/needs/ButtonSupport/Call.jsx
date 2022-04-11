import React from 'react';
import { useNavigate } from 'react-router-dom';

import call from '../../../assets/Call.jpeg';
import Navbar from '../../Navbar';

export default function Call() {
    const navigateTo = useNavigate();

    return (
        <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
            <Navbar />
            <div className="w-max flex h-full flex-col-reverse md:flex-row items-center justify-center relative z-10 container m-auto">
                <div className="w-full mx-3 lg:mx-20 ">
                    <img aria-label="people smiling" className="h-full justify-center items-center object-contain mx-auto" src={call} alt="people smiling" />
                </div>

                <div className="w-full block mx-3 lg:mx-20">
                    <div className="bg-white flex flex-col justify-center">
                        <span className="text-plantation text-2xl text-center font-semibold my-5">¡Por favor ingresá tus datos en los espacios de abajo, asi podremos contactarte!</span>
                        <form className="text-center my-5">
                            <input className="flex-col bg-white border border-1 border-teal-700 mx-auto w-full p-1 rounded-xl py-3 my-3 font-semibold " type="text" label="nombre" placeholder="Escribe tu Nombre" />
                            <input className="flex-col bg-white border border-1 border-teal-700 mx-auto w-full p-1 rounded-xl py-3 my-3 font-semibold " type="phone" label="phone" placeholder="Escribe tu teléfono" />
                        </form>
                        <div className="linksActions flex flex-col text-center">
                            <span className="font-bold text-xl">¡Ten tu telefono a la mano!</span>
                            <p>Dentro de los próximos 5 minutos un asesor se estara comunicando contigo</p>
                            <div className="flex">
                                <button onClick={() => navigateTo(-1)} className="boton bg-red-500 border-2 border-white hover:bg-white hover:border-2 text-white hover:font-semibold mx-auto my-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold">
                                    Salir
                                </button>
                                <button
                                    type="submit"
                                    className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto my-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold">
                                    Llamame
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
