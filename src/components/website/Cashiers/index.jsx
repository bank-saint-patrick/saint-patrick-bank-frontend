import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../Navbar';
import Mapa from './Mapa';
import CarouselContainer from './Carousel';
import Form from './Form';

import sucursales from '../../../assets/images/sucursales/sucursales.jpg';
import sucursalInterior from '../../../assets/images/sucursales/sucursal-interior.jpeg';

import InfoLG from './InfoLG';
import Calendario from './Calendario';

export default function Cashiers() {
    const [width, setWidth] = useState(window.innerWidth);
    const [confirmacion, setConfirmacion] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

    const [direction, setDirection] = useState({
        calle: '',
        localidad: '',
        provincia: '',
    });

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (
        <div className="wrapper flex flex-col h-screen">
            <Navbar />

            <div className="flex flex-col grow p-10">
                <header className="flex flex-col">
                    <h1 className="text-4xl font-bold text-center">Acércate a conocer nuestras sucursales</h1>
                    <div className="flex mb-8">
                        <img src={sucursalInterior} className="w-full rounded-l-md sm:w-1/2 hidden xsm:flex h-full object-cover mt-8" alt="" />
                        <img src={sucursales} className="w-1/2 hidden rounded-r-md sm:flex h-full object-cover pb-[0.5px] mt-8" alt="" />
                    </div>
                </header>

                <main className="grow flex flex-col">
                    <section className="flex flex-col">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <section className="flex flex-col sm:flex-row items-center bg-cream-can rounded-md my-8">
                                            <p className="pb-8 px-8 sm:py-16 lg:py-8 text-xl text-center">
                                                <b>Busca y selecciona la sucursal que prefieras</b>, si tienes alguna consulta o simplemente quieres ser atendido por un asesor <b>¡Te esperamos!</b>
                                            </p>
                                        </section>

                                        <section className="flex flex-col lg:flex-row w-full">
                                            <article className="my-4 w-full h-full sm:h-1/2 lg:my-0 lg:h-full lg:w-1/2 overflow-auto">{width > 680 ? <InfoLG /> : <CarouselContainer />}</article>
                                            <article className="flex-col border-2 border-cream-can my-4 px-8 flex w-full h-full sm:h-1/2 lg:my-0 lg:h-full lg:w-1/2 lg:p-0">
                                                <section className="h-full md:h-max lg:border-b-2 lg:border-cream-can">
                                                    <Form setDirection={setDirection} />
                                                </section>
                                                <section className="hidden md:flex h-1/2 py-6 lg:py-0">
                                                    <Mapa />
                                                </section>
                                            </article>
                                        </section>
                                    </>
                                }
                            />

                            <Route
                                path="/calendario"
                                element={
                                    <>
                                        <section className="flex flex-col sm:flex-row items-center bg-cream-can rounded-md my-8">
                                            <p className="pb-8 p-6 lg:pl-8 sm:py-16 lg:py-8 text-xl text-center">
                                                <b>Selecciona la fecha que prefieras</b>, si tienes alguna consulta o simplemente quieres ser atendido por un asesor <b>¡Te esperamos!</b>
                                            </p>
                                        </section>
                                        {!confirmacion ? (
                                            <Calendario setConfirmacion={setConfirmacion} fechaSeleccionada={fechaSeleccionada} setFechaSeleccionada={setFechaSeleccionada} direction={direction} />
                                        ) : (
                                            <>
                                                <h1 className="text-3xl text-center font-bold pt-4">¡Cita confirmada! ✅</h1>
                                                <p className="text-xl text-center py-8">
                                                    <b>
                                                        Te esperamos el día <b className="text-indigo-600">{fechaSeleccionada}</b> desde las <b className="text-indigo-600">08:00 horas</b> hasta las <b className="text-indigo-600">18:00 horas</b>.
                                                    </b>
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setConfirmacion(false);
                                                        setFechaSeleccionada(null);
                                                    }}
                                                    className="text-lg font-semibold p-2 bg-red-600 text-white w-max mx-auto rounded-md mb-8">
                                                    Cancelar y agendar otra cita
                                                </button>
                                            </>
                                        )}
                                    </>
                                }
                            />
                        </Routes>
                    </section>
                </main>
            </div>
        </div>
    );
}
