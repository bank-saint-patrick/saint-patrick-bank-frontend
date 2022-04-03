import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <header className="bg-desert p-5">
                <h3 className="text-2xl text-white text-center">La página que solicitó no ha sido encontrada</h3>
            </header>
            <div className="flex flex-col space-y-9 mx-2 my-60 text-center">
                <span className="text-xl">Para regresar al Inicio Bancario dé click en: </span>
                <Link to='/inicio' className="text-xl underline text-blue-500 font-semibold hover:text-blue-400">Volver al Home</Link>
            </div>
        </div>
    )
}