import turnos from '../../../assets/images/sucursales/turnos.png';
import acompa from '../../../assets/images/sucursales/acompa.png';
import capacitaciones from '../../../assets/images/sucursales/capacitaciones.png';
import personas from '../../../assets/images/sucursales/personas.png';
import instalaciones from '../../../assets/images/sucursales/instalaciones.png';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swipe from 'react-easy-swipe';

const CarouselData = [
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
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            paused: false,
        };
    }

    nextSlide = () => {
        let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };

    prevSlide = () => {
        let newSlide = this.state.currentSlide === 0 ? CarouselData.length - 1 : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = (index) => {
        this.setState({ currentSlide: index });
    };

    render() {
        return (
            <div className="mt-8">
                <div className="h-72 flex overflow-hidden relative">
                    <button onClick={this.prevSlide} className="absolute left-0 text-3xl inset-y-1/2 text-blue-stone cursor-pointer">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <Swipe className="w-full" onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                        {CarouselData.map((slide, index) => {
                            return (
                                <div key={index} className={index === this.state.currentSlide ? 'flex flex-col w-full h-3/4' : 'hidden'}>
                                    <img
                                        src={slide.image}
                                        alt="This is a carousel slide"
                                        className={'mx-auto w-3/4 xsm:w-1/3 h-full object-contain xsm:object-cover p-4 bg-cream-can rounded-full'}
                                        onMouseEnter={() => {
                                            this.setState({ paused: true });
                                        }}
                                        onMouseLeave={() => {
                                            this.setState({ paused: false });
                                        }}
                                    />
                                    <div className="flex flex-col justify-center w-4/5 mx-auto items-center h-2/3">
                                        <h2 className="text-3xl">{slide.title}</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </Swipe>

                    <div className="absolute w-full flex justify-center bottom-0">
                        {CarouselData.map((element, index) => {
                            return (
                                <div
                                    className={index === this.state.currentSlide ? 'h-2 w-2 bg-blue-stone rounded-full mx-2 mb-2 cursor-pointer' : 'h-2 w-2 bg-gray-200 rounded-full mx-2 mb-2 cursor-pointer'}
                                    key={index}
                                    onClick={() => {
                                        this.setCurrentSlide(index);
                                    }}></div>
                            );
                        })}
                    </div>

                    <button onClick={this.nextSlide} className="absolute right-0 text-3xl inset-y-1/2 text-blue-stone cursor-pointer">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Carousel;
