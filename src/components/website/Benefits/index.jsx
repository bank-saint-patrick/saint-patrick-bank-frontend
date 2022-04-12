import React from 'react';
import grMothers from '../../../assets/images/grand-mothers-exc.jpeg';
import actImg from '../../../assets/images/activity.jpeg';
import popCorn2Img from '../../../assets/images/pop-corn-two.jpeg';
import popCornImg from '../../../assets/images/pop-corn.jpeg';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

export default function Benefits() {
    return (
        <div className="wrapper flex-column h-screen">
            <Navbar />
            <h3 className="w-10/12 text-center bg-gray-100 mt-5 mx-auto shadow-md shadow-zinc-300 text-3xl font-semibold">Beneficios</h3>
            <div className="grid grid-rows-4 mt-7 w-auto h-fit md:grid-cols-4 md:space-x-4 lg:grid-cols-3 lg:space-x-9 xl:grid-cols-4 2xl:grid-cols-4">
                <div className="flex flex-row mt-1 mx-2 text-plantation px-3 py-9 pb-2 w-11/12 h-40 overflow-x-scroll space-x-10 justify-start space-y-9 bg-gray-100 rounded-lg shadow-lg shadow-slate-500 sm:flex-col sm:w-80 sm:overflow-x-hidden sm:h-max md:flex-col md:px-16 md:space-x-1 md:w-48 md:h-full md:overflow-x-hidden lg:flex-col lg:py-10 lg:w-60 xl:flex-col xl:w-64 xl:space-x-3.5 2xl:flex-col 2xl:w-64">
                    <div className="py-9">
                        <span className="text-2xl pl-8 text-center w-auto font-semibold rounded-md">Rubro</span>
                        <hr className="mt-1"></hr>
                    </div>
                    <Link to="/#" className="underline font-serif w-24">
                        Combustible
                    </Link>
                    <Link to="/#" className="underline font-serif w-72">
                        Comprar online
                    </Link>
                    <Link to="/#" className="underline font-serif w-24">
                        Hogar
                    </Link>
                    <Link to="/#" className="underline font-serif w-24">
                        Construcción
                    </Link>
                    <Link to="/#" className="underline font-serif w-44">
                        Cuidado personal
                    </Link>
                    <Link to="/#" className="underline font-serif w-24">
                        Educación
                    </Link>
                    <Link to="/#" className="underline font-serif w-24">
                        Novedades
                    </Link>
                    <Link to="/#" className="underline font-serif w-24">
                        Servicios
                    </Link>
                    <Link to="/#" className="underline font-serif w-44">
                        Viajes y turismo
                    </Link>
                </div>

                <div className="mx-auto my-0 py-0 flex flex-col gap-5 md:px-4 md:py-4 md:flex-col lg:pl-7 lg:py-4 lg:flex-col lg:pr-5 xl:py-4 xl:flex-col 2xl:py-4 2xl:flex-col" id="row2">
                    <div className="bg-blue-300 text-center px-auto py-4 w-80 h-60 rounded-md ml-auto sm:w-44 sm:h-80 sm:ml-1 sm:py-2 sm:text-sm sm:space-y-1.5 md:ml-auto md:px-2 md:space-y-0 md:py-2 md:w-48 md:h-72 lg:ml-auto lg:py-4 lg:w-80 lg:h-56 lg:space-y-1.5 xl:ml-0 xl:py-4 xl:w-80 xl:space-y-0.5 xl:h-56">
                        <h6 className="text-2xl font-bold">20%</h6>
                        <p className="text-md font-bold">¡COBRANDO TUS HABERES, JUBILACIÓN O PENSIÓN EN NUESTRO BANCO, UN PORCENTAJE DE TUS INGRESOS SE TE DEVOLVERÁ COMO SALDO A FAVOR EN TU CUENTA PARA QUE PUEDAS UTILIZAR COMO QUIERAS!</p>
                        <button className="bg-blue-600 rounded-md hover:bg-blue-500 mx-1 px-5 py-2 text-sm font-semibold text-white hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold lg:px-5 lg:py-1 xl:text-lg">
                            Más información
                        </button>
                    </div>
                    <div className="bg-dingley text-center py-3 w-80 h-48 rounded-md ml-auto sm:w-44 sm:h-72 sm:ml-1 sm:text-sm sm:space-y-1.5 md:ml-auto md:py-2 md:w-48 md:h-64 lg:py-1 lg:ml-auto lg:w-80 lg:h-48 lg:space-y-3 xl:ml-0 xl:w-80 xl:h-44">
                        <h6 className="text-lg text-white font-bold">15%</h6>
                        <p className="text-lg text-white font-semibold mb-3 md:text-lg lg:text-md xl:text-lg 2xl:text-lg">¡Utilizando nuestra tarjeta de crédito vas a poder sumar puntos para canjear por servicios, objetos o dinero!</p>
                        <button className="bg-blue-600 rounded-md hover:bg-blue-500 mx-1 px-5 py-2 text-sm text-white font-semibold hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold xl:text-lg xl:py-0">Más información</button>
                    </div>
                    <div className="grid grid-rows-4 lg:grid-cols-2 lg:space-x-1 xl:mx-auto xl:grid-rows-2 xl:gap-1 2xl:mx-auto 2xl:grid-cols-2 3xl:grid-rows-2">
                        <div className="w-36 h-36 text-sm ml-auto mt-3 px-3 text-center space-y-1.5 pt-1 bg-cream-can rounded-lg text-plantation">
                            <h6 className="text-xl font-bold">30%</h6>
                            <p className="text-sm md:text-lg lg:text-md xl:text-lg 2xl:text-lg">Descuento en supermercados</p>
                            <button className="bg-blue-600 rounded-md hover:bg-blue-400 mx-1 px-3 py-0 text-sm text-white font-semibold hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold">Más información</button>
                        </div>
                        <div className="w-36 h-36 text-sm text-center text-gray-100 ml-auto space-y-1.5 pt-0 mt-3 bg-desert rounded-lg">
                            <h6 className="text-xl font-bold">20%</h6>
                            <p className="text-sm font-semibold">Descuento en GIMNASIOS y actividades recreativas</p>
                            <button className="bg-blue-600 rounded-md text-sm hover:bg-blue-500 mx-1 mt-3 px-3 py-2 text-white font-semibold hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold">Más información</button>
                        </div>
                        <div className="w-36 h-36 text-sm text-center mx-auto space-y-1.5 pt-1 bg-plantation rounded-lg">
                            <h6 className="text-xl text-gray-100 font-bold">20%</h6>
                            <p className="text-sm text-gray-100 md:text-lg lg:text-md xl:text-lg 2xl:text-lg">Descuento en cuidado personal</p>
                            <button className="bg-blue-600 rounded-md mx-1 mr-1 hover:bg-blue-500 px-4 py-0 text-sm text-white font-semibold hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold">Más información</button>
                        </div>
                        <div className="w-36 h-36 text-sm mx-auto text-center bg-gray-200 rounded-lg space-y-1.5 py-1">
                            <h6 className="text-xl font-bold">20%</h6>
                            <p className="text-sm md:text-lg lg:text-md xl:text-lg 2xl:text-lg">Descuento en indumentaria</p>
                            <button className="bg-blue-600 rounded-md hover:bg-blue-500 mx-2 px-4 py-0 text-sm text-white font-semibold hover:text-black hover:ring-2 hover:ring-slate-400 hover:font-semibold">Conocé locales adheridos</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-4 mt-0 pl-4 pb-4 md:mt-3 md:col-span-2  md:pl-4 md:gap-1 lg:mx-10 lg:col-span-1 lg:grid-rows-2 lg:grid-cols-2 lg:mt-5 lg:py-4 lg:gap-2 xl:col-span-2 xl:grid-rows-2 xl:grid-cols-2 xl:gap-5 xl:mx-24 xl:mt-9 xl:py-3 2xl:col-span-2">
                    <img src={popCornImg} alt="img1 no encontrada" width="375em" />
                    <img src={popCorn2Img} alt="img2 no encontrada" width="375em" />
                    <img src={actImg} alt="img3 no encontrada" width="375em" />
                    <img src={grMothers} alt="img4 no encontrada" width="375em" />
                </div>
            </div>
        </div>
    );
}
