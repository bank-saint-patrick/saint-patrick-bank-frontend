import Navbar from '../../Navbar';

import indexImg from '../../../assets/images/Group 2.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
            <Navbar />

            <div className="pt-28 xl:pt-32 lg:flex items-center relative z-10 container mx-auto">
                <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                    <img tabIndex="0" aria-label="people smiling" className="mx-auto pb-10 lg:p-10" src={indexImg} alt="people smiling" />
                </div>

                <div role="contentinfo" className="w-full lg:w-1/2 lg:mx-8 px-8 h-full">
                    <p tabIndex="0" className="text-blue-stone uppercase font-bold text-xl mb-4">
                        Inicio Bancario
                    </p>
                    <h1 tabIndex="0" className="text-blue-stone text-4xl lg:text-5xl font-black mb-8">
                        Te acompañamos en todo momento
                    </h1>
                    <p tabIndex="0" className="text-lg text-gray-800 font-semibold mb-8">
                        Aprende a usar el sistema de banca en línea desde una computadora, tablet o celular. ¡Si tienes más dudas ponte en contacto con nosotros!
                    </p>
                    <Link to="/login">
                        <button tabIndex="0" className="bg-cream-can p-4 rounded-lg text-xl font-semibold hover:bg-green-900 hover:text-cream-can hover:ring-1 ring-dingley text-blue-stone my-7 lg:px-4 lg:py-3">
                            SÍ, DESEO ASESORAMIENTO
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
