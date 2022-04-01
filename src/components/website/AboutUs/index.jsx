import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

export default function AboutUs() {
    return (
        <div className="wrapper flex-column h-screen">
            <Navbar />
            {/* cambio hecho por alessandro */}
            <div className="container mx-auto mt-5 full-height-conditional w-auto">
                <div className="grid grid-cols-1 text-left xsm:ml-7 lg:ml-5">
                    <h4 className="bg-gray-100 shadow-md shadow-zinc-300 text-3xl text-dingley font-semibold">Sobre Nosotros</h4>
                    <p className="text-lg my-4">
                        Banco Saint Patrick es una plataforma web de educación financiera creada con la finalidad de promover la inclusión finan-<br></br>ciera y digital de los adultos mayores en el país.
                    </p>
                    <p className="text-lg my-3">
                        Nuestro objetivo es brindar herramientas que permitan facilitar el acceso de aprendizaje de los productos<br></br>y servicios bancarios a través de un lenguaje claro y herramientas dinámicas.
                    </p>
                    <p className="text-lg my-3">
                        Nuestro compromiso es cuidarte en todo momento. Queremos que te sientas acompañado, comprendido, escuchado y que<br></br>
                        puedas tomar contacto con una persona real para responder tus dudas y consultas de forma personalizada en todo momen-<br></br>to.
                    </p>
                    <p className="text-lg my-3">Además vas a poder seleccionar por qué medio preferís que un asesor te contacte si necesitas nuestra ayuda.</p>
                    <p className="text-lg my-3">
                        Si con los tutoriales y nuestro sector de soporte en línea todavía te quedan dudas sobre cómo se<br></br>
                        utiliza nuestra plataforma. ¡No te preocupes!
                    </p>
                    <p className="text-lg my-3">
                        Vas a poder solicitar un turno para acercarte a nuestras sucursales el día y horario que tengas<br></br>
                        disponible para que nuestros{' '}
                        <Link to="/#">
                            <span className="underline text-desert hover:text-orange-600 mr-1">Asesores guía</span>
                        </Link>
                        te muestren el paso a paso<br></br>
                        de cada transacción en nuestra área de capacitación.
                    </p>
                </div>
                <span className="text-2xl text-cream-can font-semibold  xsm:ml-7 lg:ml-5">Te acompañamos en éste desafío, anímate a aprender con nosotros!</span>
            </div>
        </div>
    );
}
