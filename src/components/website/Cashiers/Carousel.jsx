import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import turnos from '../../../assets/images/sucursales/turnos.jpeg';
import acompa from '../../../assets/images/sucursales/acompa.jpeg';
import capacitaciones from '../../../assets/images/sucursales/capacitaciones.jpeg';
import personas from '../../../assets/images/sucursales/personas.jpeg';
import instalaciones from '../../../assets/images/sucursales/instalaciones.jpeg';

const slides = [
    {
        image: turnos,
        title: 'Turnos',
        description:
            'Vas a poder sacar turno online para poder acercarte el día y horario en el que tengas disponibilidad. (Teniendo en cuenta que se brindarán turnos cada media hora dentro de la franja horaria 9 a 15 Hs). Si solicitaste un turno previamente no vas a tener que esperar, nuestros asesores comerciales ya te van a estar esperando. El anfitrión directamente te acompañará hasta su box.',
    },
    {
        image: acompa,
        title: 'Acompañamiento',
        description:
            'Vas a encontrar personas REALES. Al ingresar a las oficinas vas a tener la asesoría de nuestros anfitriones y asesores que te acompañarán en toda tu experiencia. Tendrás quien te recepcione y guíe hacia la sala de espera donde te estarán esperando con té, café y/o agua en nuestros sillones. También tendrás quien te brinde soporte en el área de CAJEROS y un excelente equipo de asesores comerciales y cajeros.',
    },
    {
        image: capacitaciones,
        title: 'Capacitaciones',
        description:
            'Contamos con un área destinada a enseñarte a utilizar los canales de autogestión. Podrás presentarte de forma espontánea en horario bancario donde te estarán esperando nuestros capacitadores para enseñarte el paso a paso de cada operación. ¡No traigas lápiz y papel, te brindaremos un cuaderno del Banco Saint Patrick y una lapicera como regalo para que puedas hacer todas tus anotaciones!',
    },
    {
        image: personas,
        title: 'Personas',
        description:
            'Contamos con un personal empatico, resolutivo, respetuoso y comprensivo. Nuestros asesores se capacitan dentro del Banco con nuestro equipo de Coachs Oncológicos y Psicologos para poder abordar la correcta toma de decisiones, resolución de conflictos y desarrollar las habilidades blandas.',
    },
    {
        image: instalaciones,
        title: 'Instalaciones',
        description:
            'Nuestras oficinas están pensadas para tu confort y seguridad. Tenemos cada sector señalizado para su fácil ubicación. Contamos con rampas, instalaciones y servicios teniendo en cuenta todos los aspectos de accesibilidad para personas con discapacidad o movilidad reducida.',
    },
];

const Index = () => {
    return (
        <div className="2xl:mx-auto 2xl:container w-full flex justify-center">
            <div className="2xl:px-20 px-6 w-full">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="hidden xsm:flex w-12 h-12 md:w-14 md:h-14 rounded-full md:flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            {slides.map((slide, index) => (
                                <Slide key={slide.title} index={index}>
                                    <div className="border-2 gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                        <div className="relative w-full h-1/2 lg:block hidden">
                                            <img src={slide.image} alt="sitting area" className="object-center object-cover w-full h-1/2" />
                                            <div className="flex flex-col items-center h-1/2 justify-center">
                                                <h1 className="text-xl xsm:text-3xl leading-5 lg:text-2xl lg:leading-normal font-medium my-4">{slide.title}</h1>
                                            </div>
                                        </div>
                                        <div className="relative w-full h-full lg:hidden bg-cream-can">
                                            <img src={slide.image} alt="sitting area" className="object-center object-cover w-full h-1/2" />
                                            <div className="flex flex-col items-center h-1/2 justify-center">
                                                <h1 className="text-xl xsm:text-3xl leading-5 lg:text-2xl lg:leading-normal font-medium my-4">{slide.title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="hidden xsm:flex w-12 h-12 md:w-14 md:h-14 rounded-full md:flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for MD, LG, XL... */}
                <CarouselProvider className="relative hidden sm:block" style={{ margin: '0 25px' }} naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack
                            role="button"
                            aria-label="slide backward"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                            id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            {slides.map((slide, index) => (
                                <Slide key={slide.title} style={{ width: '50%', margin: '0 5px' }} className="carousel__inner-slideLarge border-2 mx-2" index={index}>
                                    <div className="gallery-cell w-full h-full" style={{ paddingRight: '0' }}>
                                        <div className="relative w-full h-full lg:flex lg:flex-col hidden">
                                            <img src={slide.image} alt="sitting area" className="object-center object-cover my-3 mx-auto h-1/4" />
                                            <div className="w-full h-3/4 flex flex-col items-center justify-evenly">
                                                <h1 className="text-xl text-blue-stone leading-5 lg:text-2xl lg:leading-normal font-medium">{slide.title}</h1>
                                                <p className="font-medium rounded-md p-4 h-full mt-12 overflow-auto">{slide.description}</p>
                                            </div>
                                        </div>

                                        <div className="relative w-full h-full flex flex-col lg:hidden">
                                            <img src={slide.image} alt="sitting area" className="object-center my-3 mx-auto w-full object-contain h-1/2" />
                                            <div className="w-full h-1/2 flex flex-col items-center justify-start">
                                                <h1 className="pb-4 text-xl text-blue-stone leading-5 lg:text-2xl lg:leading-normal font-medium">{slide.title}</h1>
                                                <p className="p-4 h-3/4 overflow-auto">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                        <ButtonNext
                            role="button"
                            aria-label="slide forward"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
    );
};

export default Index;
