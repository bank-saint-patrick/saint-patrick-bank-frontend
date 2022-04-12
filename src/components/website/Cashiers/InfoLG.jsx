import turnos from '../../../assets/images/sucursales/turnos.png';
import acompa from '../../../assets/images/sucursales/acompa.png';
import capacitaciones from '../../../assets/images/sucursales/capacitaciones.png';
import personas from '../../../assets/images/sucursales/personas.png';
import instalaciones from '../../../assets/images/sucursales/instalaciones.png';

const slides = [
    {
        image: turnos,
        title: 'Turnos',
        description: 'Vas a poder sacar turno online para poder acercarte el día y horario en el que tengas disponibilidad.',
    },
    {
        image: acompa,
        title: 'Acompañamiento',
        description: 'Al ingresar a las oficinas vas a tener la asesoría de nuestros anfitriones y asesores que te acompañarán en toda tu experiencia.',
    },
    {
        image: capacitaciones,
        title: 'Capacitaciones',
        description: 'Contamos con un área destinada a enseñarte a utilizar los canales de autogestión.',
    },
    {
        image: personas,
        title: 'Personas',
        description: 'Contamos con un personal empatico, resolutivo, respetuoso y comprensivo.',
    },
    {
        image: instalaciones,
        title: 'Instalaciones',
        description: 'Nuestras oficinas están pensadas para tu máximo confort y seguridad.',
    },
];

const InfoLG = () => {
    return (
        <div className="overflow-y-auto bg-gray-100 hidden md:flex">
            <div className="mx-auto container max-h-screen px-4 xl:px-0 py-24">
                <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900">¿Por qué elegirnos?</h1>
                <div className="md:mt-24 f-f-p">
                    <div className="hidden md:flex justify-center w-full">
                        <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                            <div className="flex justify-end w-full" aria-label="sign up" role="img">
                                <img className="focus:outline-none w-32 h-32 object-cover mt-10 bg-cream-can rounded-full" src={slides[0].image} alt="how it work" />
                            </div>
                            <div className="mt-14 mb-8">
                                <b className="rounded-full py-2 px-4 text-2xl text-blue-stone border-blue-stone border-2">2</b>
                            </div>
                            <div className="flex flex-col items-center lg:items-end md:w-8/12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">{slides[1].title}</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-center md:text-right text-base leading-6 tracking-wide">{slides[1].description}</h2>
                            </div>
                            <div aria-label="transactions" role="img">
                                <img className="focus:outline-none w-32 h-32 object-cover mt-16 bg-cream-can rounded-full" src={slides[2].image} alt="how it work" />
                            </div>
                            <div className="mt-24 mb-8">
                                <b className="rounded-full py-2 px-4 text-2xl text-blue-stone border-blue-stone border-2">4</b>
                            </div>
                            <div className="flex flex-col items-center lg:items-end md:w-8/12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">{slides[3].title}</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-center md:text-right text-base leading-6 tracking-wide">{slides[3].description}</h2>
                            </div>
                            <div aria-label="transactions" role="img">
                                <img className="focus:outline-none w-32 h-32 object-cover mt-28 bg-cream-can rounded-full" src={slides[4].image} alt="how it work" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                            <div>
                                <b className="rounded-full py-2 px-4 text-2xl text-white bg-blue-stone">1</b>
                            </div>
                            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">{slides[0].title}</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">{slides[0].description}</h2>
                            </div>
                            <div aria-label="wallet" role="img">
                                <img className="focus:outline-none w-32 h-32 object-cover mt-24 bg-cream-can rounded-full" src={slides[1].image} alt="how it work" />
                            </div>
                            <div className="mt-16 mb-4">
                                <b className="rounded-full py-2 px-4 text-2xl text-white bg-blue-stone">3</b>
                            </div>
                            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">{slides[2].title}</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">{slides[2].description}</h2>
                            </div>
                            <div className="flex justify-start w-full" aria-label="sign up" role="img">
                                <img className="focus:outline-none w-32 h-32 object-cover mt-24 bg-cream-can rounded-full" src={slides[3].image} alt="how it work" />
                            </div>
                            <div className="mt-24 mb-8">
                                <b className="rounded-full py-2 px-4 text-2xl text-white bg-blue-stone">5</b>
                            </div>
                            <div className="flex flex-col items-center lg:items-start md:w-8/12 mb-12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">{slides[4].title}</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-center md:text-left text-base leading-6 tracking-wide">{slides[4].description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoLG;
