import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import soporte from '../../../assets/soporte.jpeg';

export default function ButtonSupport() {
    const [openModalSupport, setOpenModalSupport] = useState(false);
    const [url, setUrl] = useState(window.location.href);
    const [arrayDeUrls, setArrayDeUrls] = useState([]);

    const urlSplit = url.split('/');
    const urlFirst = urlSplit[urlSplit.length - 1];

    const navigateTo = useNavigate();

    const handleClickOpenModalSupport = () => {
        setArrayDeUrls([...arrayDeUrls, urlFirst]);
        setOpenModalSupport(true);
        setUrl(window.location.href);
    };

    const handleClickCloseModalSupport2 = () => {
        setOpenModalSupport(false);
        setUrl(window.location.href);
    };

    const handleClickCloseModalSupport = () => {
        if (url.includes('chat') || url.includes('llamada') || url.includes('videollamada')) {
            const urlToGo = arrayDeUrls.find((url) => url !== 'chat' && url !== 'llamada' && url !== 'videollamada');
            navigateTo(`/${urlToGo}`);
            setOpenModalSupport(false);
        } else {
            setOpenModalSupport(false);
        }
    };

    if (openModalSupport) {
        return (
            <div id="menu" className="fondoModal z-50 flex w-screen h-screen bg-gray-900 bg-opacity-70 top-0 fixed sticky-0">
                <div className="w-auto h-auto flex flex-col md:flex-row m-auto p-5 justify-center items-center bg-white">
                    <div className="w-5/12 flex md:w-2/5 md:contents object-bottom items-bottom">
                        <img className="mx-auto object-fill xl:p-1 hidden md:flex" src={soporte} alt="people smiling" />
                    </div>
                    <div className=" ladoDer m-4 flex-col w-full md:w-7/12 lg:w-3/5">
                        <p className="text-blue-stone uppercase font-semibold text-xl text-center mt-10">Centro de ayuda</p>
                        <p className="text-blue-stone font-bold text-5xl text-center -mt-1">Banco Saint Patrick</p>
                        <h1 className="text-md text-gray-800 font-semibold text-center p-5">En el siguiente bot??n podr??s encontrar las respuestas a las preguntas mas frecuentes de nuestros usuarios</h1>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-cream-can border-2 border-white hover:bg-white hover:border-2 hover:border-cream-can text-white hover:text-gray-700 hover:font-semibold mx-auto m-3 w-100 w-5/6 md:w-3/6 p-2 rounded-lg font-bold">
                                Preguntas Frecuentes
                            </button>
                        </div>

                        <div className="text-center mt-5">
                            <p className="text-md text-gray-800 font-semibold">??Todav??a tienes dudas? No te preocupes en banco Saint Patrick estamos para asesorarte</p>
                            <p className="text-md">Ind??canos por que medio te gustaria que te contact??ramos</p>
                        </div>
                        <div className="text-center">
                            <Link to="/chat">
                                <button
                                    type="button"
                                    className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
                                    onClick={() => handleClickCloseModalSupport2()}>
                                    Chat
                                </button>
                            </Link>
                            <Link to="/videollamada">
                                <button
                                    type="button"
                                    className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
                                    onClick={() => handleClickCloseModalSupport2()}>
                                    Videollamada
                                </button>
                            </Link>
                            <Link to="/llamada">
                                <button
                                    type="button"
                                    className="bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto m-3 w-100 md:w-1/3 p-1 rounded-lg font-bold"
                                    onClick={() => handleClickCloseModalSupport2()}>
                                    Llamada
                                </button>
                            </Link>
                        </div>
                        <div className="pt-5 text-center">
                            <button type="button" className="p-2 font-bold text-lg text-blue-stone rounded-md hover:bg-blue-stone hover:border-2 hover:border-blue-stone hover:text-white" onClick={() => handleClickCloseModalSupport()}>
                                No quiero ayuda, deseo salir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 right-0 z-50">
            <button type="button" className="bottom-0 mb-5 mr-5 float-right px-5 py-2 bg-cream-can text-black text-sm font-bold tracking-wide rounded-full focus:outline-none" onClick={() => handleClickOpenModalSupport()}>
                ??Necesitas ayuda?
            </button>
        </div>
    );
}
