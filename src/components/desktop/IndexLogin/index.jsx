import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCreditCard, faMoneyBill, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const IndexLogin = ({ userData, setModalTransferencia, setModalProducto }) => {
    return (
        <div className="w-full h-2/3 flex flex-col justify-around items-center">
            <h1 className="text-3xl text-center mt-8">
                ¡Bienvenido <b>{userData.firstName}</b>!
            </h1>
            <section className="flex flex-col w-full items-center">
                <h2 className="text-2xl my-8 underline">¿Qué deseas hacer?</h2>
                <section className="flex flex-col items-center justify-around w-full">
                    <button
                        onClick={() => {
                            setModalTransferencia(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-blue-stone text-white font-bold py-2 my-4 px-4 rounded">
                        <Link to="/login/transferencias">
                            <FontAwesomeIcon icon={faMoneyBill} />
                            <span className="ml-2">Quiero hacer una transferencia</span>
                        </Link>
                    </button>
                    <button
                        onClick={() => {
                            setModalProducto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-blue-stone text-white font-bold py-2 my-4 px-4 rounded">
                        <Link to="/login/productos">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span className="ml-2">Quiero agregar un producto</span>
                        </Link>
                    </button>
                    <button className="bg-blue-stone text-white font-bold py-2 my-4 px-4 rounded">
                        <Link to="/login/configuracion">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            <span className="ml-2">Quiero cambiar mi contraseña</span>
                        </Link>
                    </button>
                </section>
            </section>
        </div>
    );
};

export default IndexLogin;
