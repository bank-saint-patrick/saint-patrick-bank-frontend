import React from 'react';
import { useState } from 'react';
import Navbar from '../../Navbar';

import popCorn2Img from '../../../assets/images/pop-corn-two.jpeg';

import salud from '../../../assets/images/beneficios/salud.jpeg';
import ejercicio from '../../../assets/images/beneficios/ejercicio.jpeg';
import ejercicio2 from '../../../assets/images/beneficios/ejercicio2.jpeg';
import saldo from '../../../assets/images/beneficios/saldo.jpeg';
import credito from '../../../assets/images/beneficios/credito.jpg';

const benefits = [
    {
        id: 1,
        title: 'Saldo de ahorro',
        description: '¡Cobrando tus haberes, jubilación o pensión en nuestro banco, un porcentaje de tus ingresos se te devolverá como saldo a favor!',
        img: saldo,
        percentage: '15%',
    },
    {
        id: 2,
        title: 'Gimnasios o actividades recreativas',
        description: '¡Descuento en los gimnasios de la ciudad, u otras actividades recreativas!',
        img: ejercicio2,
        percentage: '20%',
    },
    {
        id: 3,
        title: 'Supermercados y otras tiendas autorizadas',
        description: 'Descuento en supermercados, cines, restaurantes y mucho más!',
        img: popCorn2Img,
        percentage: '30%',
    },
    {
        id: 4,
        title: 'Cuidado personal',
        description: 'Descuento en cuidado personal y artículos de belleza.',
        img: salud,
        percentage: '15%',
    },
    {
        id: 5,
        title: 'Indumentaria',
        description: 'Descuento en indumentaria deportiva. Calidad y confort.',
        img: ejercicio,
        percentage: '20%',
    },
    {
        id: 6,
        title: 'Tarjeta de crédito',
        description: 'Suma puntos con la tarjeta de crédito y obtén descuentos en tus compras o saldo a favor en tu cuenta!',
        img: credito,
        percentage: '10%',
    },
];

export default function Benefits() {
    const [indexBenefit, setIndexBenefit] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);

    const handleChangeWidth = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleChangeWidth);

    return (
        <div className="wrapper flex flex-col h-screen">
            <Navbar />
            <h3 className="text-4xl font-bold text-center p-8">
                Obtén <b className="bg-cream-can text-3xl rounded-md px-2 inline-block pb-1 uppercase">increíbles beneficios</b>
            </h3>

            <div className="flex flex-col-reverse">
                <div className="flex lg:flex-col w-full items-center lg:pb-10">
                    {benefits.map((benefit) => {
                        if (benefit.id === indexBenefit && width < 1024) {
                            return (
                                <div key={benefit.id} className="mt-6 mx-auto w-5/6 xl:w-2/3 py-12 px-6 xl:px-0 flex justify-center items-center flex-col lg:h-[288px] ">
                                    <div className="flex flex-col justify-between bg-gray-50 items-stretch lg:flex-row">
                                        <div className="flex items-center bg-blue-stone justify-center">
                                            <p className="transform flex flex-shrink-0 lg:-rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">{benefit.percentage} OFF</p>
                                        </div>
                                        <div className="flex justify-center my-8 lg:my-0 w-full items-start flex-col xl:w-2/5 lg:w-5/12 xl:px-7 md:px-0 md:py-0 py-5">
                                            <div className="px-8">
                                                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">{benefit.title}</p>
                                            </div>
                                            <div className="xl:mt-4 mt-2 px-8">
                                                <p className="hidden xsm:flex text-base xl:text-xl leading-7 text-gray-600 pr-4">
                                                    {benefit.description} Aprovecha la oferta del {benefit.percentage} ahora.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block h-44 md:h-60 xl:h-72">
                                            <img className="hidden w-full object-cover h-full xl:block" src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1" />
                                            <img className="xl:hidden w-full object-cover h-full" src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                                        </div>
                                    </div>
                                    <div className="md:hidden mt-6 w-full">
                                        <img src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
                                    </div>
                                </div>
                            );
                        } else if (width >= 1024) {
                            return (
                                <div key={benefit.id} className="mt-16 mx-auto w-5/6 xl:w-2/3 py-12 px-6 xl:px-0 flex justify-center items-center flex-col lg:h-[288px] ">
                                    <div className="flex flex-col justify-between bg-gray-50 items-stretch lg:flex-row">
                                        <div className="flex items-center bg-blue-stone justify-center">
                                            <p className="transform flex flex-shrink-0 lg:-rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">{benefit.percentage} OFF</p>
                                        </div>
                                        <div className="flex justify-center my-8 lg:my-0 w-full items-start flex-col xl:w-2/5 lg:w-5/12 xl:px-7 md:px-0 md:py-0 py-5">
                                            <div>
                                                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">{benefit.title}</p>
                                            </div>
                                            <div className="xl:mt-4 mt-2">
                                                <p className="hidden xsm:block text-base xl:text-xl leading-7 text-gray-600 pr-4">
                                                    {benefit.description} <b className="font-bold">Aprovecha la oferta del {benefit.percentage} ahora.</b>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block h-44 md:h-60 xl:h-72">
                                            <img className="hidden w-full object-cover h-full xl:block" src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1" />
                                            <img className="xl:hidden w-full object-cover h-full" src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                                        </div>
                                    </div>
                                    <div className="md:hidden mt-6 w-full">
                                        <img src={benefit.img} alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>

                <div className="flex lg:hidden items-center justify-center pt-10 lg:px-0 sm:px-6 px-4">
                    <div className="lg:w-3/5 w-full flex items-center justify-around sm:justify-between border-b border-gray-200">
                        <div
                            onClick={() => {
                                if (indexBenefit === 1) {
                                    setIndexBenefit(benefits.length);
                                } else {
                                    setIndexBenefit(indexBenefit - 1);
                                }
                            }}
                            className="flex items-center pb-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-lg ml-3 font-medium leading-none ">Anterior</p>
                        </div>

                        <div className="sm:flex hidden">
                            {benefits.map((benefit, index) => {
                                if (index + 1 === indexBenefit) {
                                    return (
                                        <p
                                            onClick={() => {
                                                setIndexBenefit(index + 1);
                                            }}
                                            key={benefit.id}
                                            className="text-lg font-medium leading-none cursor-pointer text-indigo-700 border-b-4 border-cream-can pb-3 mr-4 px-2">
                                            {index + 1}
                                        </p>
                                    );
                                } else {
                                    return (
                                        <p
                                            onClick={() => {
                                                setIndexBenefit(index + 1);
                                            }}
                                            key={benefit.id}
                                            className="text-lg font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-b-4 border-transparent hover:border-cream-can pb-3 mr-4 px-2">
                                            {index + 1}
                                        </p>
                                    );
                                }
                            })}
                        </div>

                        <div
                            onClick={() => {
                                if (indexBenefit < benefits.length) {
                                    setIndexBenefit(indexBenefit + 1);
                                } else {
                                    setIndexBenefit(1);
                                }
                            }}
                            className="flex items-center pb-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <p className="text-lg font-medium leading-none mr-3">Siguiente</p>
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
