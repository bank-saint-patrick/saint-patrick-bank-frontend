import React from 'react';
import Navbar from '../../Navbar';

import aboutUs1 from '../../../assets/images/about-us-1.jpeg';
import aboutUs2 from '../../../assets/images/about-us-2.jpeg';

export default function AboutUs() {
    return (
        <div className="wrapper flex-column h-screen">
            <Navbar />
            {/* cambio hecho por alessandro */}

            <div>
                <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
                    <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
                        <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                            <div className="flex flex-col items-center justify-center w-full">
                                <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">Banco Saint Patrick</h1>
                                <p className="w-full mt-6 text-xl leading-8 text-center text-gray-600">Plataforma web de educación financiera creada con la finalidad de incluir a los adultos mayores al mundo digital.</p>
                                <div className="md:mt-14 mt-12 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#4338CA] h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-xl leading-8 mt-6 text-center text-gray-600 sm:w-96 w-full">
                                        Nuestro objetivo es brindar herramientas que faciliten el acceso y aprendizaje de los productos y servicios bancarios a través de una interfaz intuitiva y dinámica.
                                    </p>
                                </div>
                                <div className="mt-7 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="phone">
                                        <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.66667 2.33331H9L11.6667 8.99998L8.33333 11C9.76128 13.8954 12.1046 16.2387 15 17.6666L17 14.3333L23.6667 17V22.3333C23.6667 23.0406 23.3857 23.7188 22.8856 24.2189C22.3855 24.719 21.7072 25 21 25C15.799 24.6839 10.8935 22.4753 7.20911 18.7909C3.52467 15.1064 1.31607 10.201 1 4.99998C1 4.29274 1.28095 3.61446 1.78105 3.11436C2.28115 2.61426 2.95942 2.33331 3.66667 2.33331Z"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M17 6.33331C17.7072 6.33331 18.3855 6.61426 18.8856 7.11436C19.3857 7.61446 19.6667 8.29274 19.6667 8.99998" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 1C19.1217 1 21.1566 1.84286 22.6569 3.34315C24.1571 4.84344 25 6.87827 25 9" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-xl leading-8 mt-6 text-center text-gray-600 sm:w-96 w-full">
                                        Queremos acompañarte en todo momento, por lo cual te brindamos la posibilidad de tener asesoramiento personalizado directamente con nuestros asesores guía en línea.
                                    </p>
                                </div>
                                <div className="mt-7 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="ideas">
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.99967 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V7.99998C1.33301 8.73636 1.92996 9.33331 2.66634 9.33331H7.99967C8.73605 9.33331 9.33301 8.73636 9.33301 7.99998V2.66665C9.33301 1.93027 8.73605 1.33331 7.99967 1.33331Z"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.99967 14.6667H2.66634C1.92996 14.6667 1.33301 15.2636 1.33301 16V21.3334C1.33301 22.0697 1.92996 22.6667 2.66634 22.6667H7.99967C8.73605 22.6667 9.33301 22.0697 9.33301 21.3334V16C9.33301 15.2636 8.73605 14.6667 7.99967 14.6667Z"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.3337 14.6667H16.0003C15.2639 14.6667 14.667 15.2636 14.667 16V21.3334C14.667 22.0697 15.2639 22.6667 16.0003 22.6667H21.3337C22.07 22.6667 22.667 22.0697 22.667 21.3334V16C22.667 15.2636 22.07 14.6667 21.3337 14.6667Z"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M14.667 5.33331H22.667" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.667 1.33331V9.33331" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-xl leading-8 mt-6 text-center text-gray-600 sm:w-96 w-full">
                                        Si con los tutoriales y nuestro sector de soporte en línea todavía te quedan dudas sobre cómo se utiliza nuestra plataforma. No te preocupes, <br /> <br /> <b>¡Estamos para ayudarte!</b>
                                    </p>
                                </div>
                                <div className="mt-7 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="bright ideas">
                                        <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.5333 4.46667L20.6 5.4M1 13H2.33333H1ZM13 1V2.33333V1ZM23.6667 13H25H23.6667ZM4.46667 4.46667L5.4 5.4L4.46667 4.46667Z"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.99967 18.3334C7.8803 17.4938 7.05345 16.3234 6.63625 14.9878C6.21905 13.6523 6.23265 12.2193 6.67512 10.8919C7.11759 9.56444 7.9665 8.4099 9.10161 7.59176C10.2367 6.77362 11.6005 6.33337 12.9997 6.33337C14.3989 6.33337 15.7626 6.77362 16.8977 7.59176C18.0328 8.4099 18.8818 9.56444 19.3242 10.8919C19.7667 12.2193 19.7803 13.6523 19.3631 14.9878C18.9459 16.3234 18.119 17.4938 16.9997 18.3334C16.4791 18.8487 16.0871 19.4793 15.8555 20.1742C15.6239 20.8691 15.5591 21.6088 15.6663 22.3334C15.6663 23.0406 15.3854 23.7189 14.8853 24.219C14.3852 24.7191 13.7069 25 12.9997 25C12.2924 25 11.6142 24.7191 11.1141 24.219C10.614 23.7189 10.333 23.0406 10.333 22.3334C10.4403 21.6088 10.3755 20.8691 10.1438 20.1742C9.91221 19.4793 9.52025 18.8487 8.99967 18.3334"
                                                stroke="#4338CA"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M9.93359 19.6666H16.0669" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-xl leading-8 mt-6 text-center text-gray-600 sm:w-96 w-full">
                                        Vas a poder solicitar un turno para acercarte a nuestras sucursales el día y horario que prefieras. Para que nuestros{' '}
                                        <span className="underline text-desert hover:text-orange-600 mr-1 uppercase">asesores guía,</span>
                                        te enseñen a utilizar tu Banca Digital.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-12 md:py-20 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                            <img src={aboutUs1} alt="a woman studying" className="h-1/2 rounded-md object-cover object-center md:block hidden" />
                            <img src={aboutUs2} alt="a woman studying" className="h-1/2 rounded-md object-cover object-center md:block hidden" />
                            <img src={aboutUs1} alt="a woman studying" className="h-auto w-auto md:hidden block" />
                        </div>
                    </div>

                    <section className="w-full flex flex-col pb-8 justify-center items-center">
                        <br /> <br /> <b className="text-2xl mr-4">Bienvenido al mundo digital.</b>
                        <br /> <br /> <b className="text-2xl text-blue-stone">Bienvenido a Saint Patrick Bank.</b>
                    </section>

                    <div className="w-full text-center text-xl font-semibold text-blue-stone bg-cream-can mt-8 p-8">Te acompañamos en éste desafío, anímate a aprender con nosotros!</div>
                </div>
            </div>
        </div>
    );
}
