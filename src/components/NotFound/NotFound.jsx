import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <header className="bg-desert p-5">
                <h3 className="text-2xl text-white text-center">La página que solicitó no ha sido encontrada</h3>
            </header>
            <div className="space-y-9 mx-2 my-60 text-center">
                <span className="text-xl">Para regresar al Inicio Bancario dé click en </span>
                <br></br>
                <Link to='/inicio' className="text-xl underline text-blue-500 font-semibold hover:text-blue-400 rounded-sm inline-block">Volver al Home</Link>
            </div>
        </div>
    )
}