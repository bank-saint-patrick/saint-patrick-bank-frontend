import React, { useState } from 'react';

export default function ButtonSupport() {
    const [openModalSupport, setOpenModalSupport] = useState(false);

    const handleClickOpenModalSupport = () => {
        setOpenModalSupport(true);
    };

    const handleClickCloseModalSupport = () => {
        setOpenModalSupport(false);
    };

    if (openModalSupport) {
        return (
            <div className="relative flex justify-center items-center">
                <div id="menu" className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                    <div className="h-screen flex justify-center items-center">
                        <div className="h-full w-full  relative flex flex-col justify-center items-center bg-white p-10">
                            <div role="banner"></div>
                            <div className="mt-12">
                                <h1 role="main" className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">
                                    Estamos para ayudarte
                                </h1>
                            </div>
                            <div className="mt">
                                <p className="mt-6 text-base dark:text-white leading-7 text-center text-gray-800">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                    Unde quia numquam non similique ...
                                </p>
                            </div>
                            <div className="mt-10">
                                <button className="py-5 px-10 mr-10 bg-white mb-10">Tipo de ayuda 1</button>
                                <button className="py-5 px-10 mr-10 bg-white mb-10">Tipo de ayuda 2</button>
                                <br />
                                <button className="py-5 px-10 mr-10 bg-white mb-10">Tipo de ayuda 3</button>
                                <button className="py-5 px-10 mr-10 bg-white mb-10">Tipo de ayuda 4</button>
                            </div>
                            <div className="mt">
                                <button className="mt-6 font-bold text-xl text-cream-can text-center" onClick={() => handleClickCloseModalSupport()}>
                                    No quiero ayuda, deseo salir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 right-0">
            <button className="bottom-0 mb-5 mr-5 float-right px-5 py-2 bg-cream-can text-black text-sm font-bold tracking-wide rounded-full focus:outline-none" onClick={() => handleClickOpenModalSupport()}>
                ¿Necesitas ayuda?
            </button>
        </div>
    );
}
