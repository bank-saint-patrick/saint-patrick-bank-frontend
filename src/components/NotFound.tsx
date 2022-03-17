import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <div>
            <header className="flex bg-darkorange-100 justify-center p-4">
                <h5 className="text-2xl text-white">
                    Página no encontrada
                </h5>
 
            </header>
            <Link to='/' className="flex justify-center h-12"><span className="text-lg text-custom-st-patrick-n hover:text-custom-st-patrick-ltgn font-bold underline py-4">Ir al Inicio</span></Link>
            <hr></hr>
            <span className="flex justify-center text-justify mt-12 xs:container px-4 sm:container px-3">
                Posiblemente no está disponible el servicio por el momento o debido a errores de tipeo de la ruta
            </span>
        </div>
    )
}