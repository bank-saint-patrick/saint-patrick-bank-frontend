import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faArrowRightArrowLeft, faFolder, faCreditCard, faPaste, faMoneyBill, faShield, faFileLines, faComments, faMoon, faGears, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SubMenu = () => {
    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    /* Utilitie useEffect */
    useEffect(() => {
        window.onresize = (e) => {
            setWidth(e.target.innerWidth);
        };
        width < 640 ? setMenu(false) : setMenu(true);
    }, [width]);

    /* navegacion - alessandro */

    const navigation1 = [
        {
            id: 1,
            name: 'Inicio',
            path: '/inicio',
            icon: faHouse,
        },
        {
            id: 2,
            name: 'Mis productos',
            path: '/login/productos',
            icon: faFolder,
        },
        {
            id: 3,
            name: 'Tarjetas',
            path: '/login/tarjetas',
            icon: faCreditCard,
        },
        {
            id: 4,
            name: 'Transferencias',
            path: '/login/transferencias',
            icon: faArrowRightArrowLeft,
        },
    ];

    const navigation2 = [
        {
            id: 5,
            name: 'Pago de servicios',
            path: '/login/servicios',
            icon: faPaste,
        },
        {
            id: 6,
            name: 'Préstamos',
            path: '/login/prestamos',
            icon: faMoneyBill,
        },
        {
            id: 7,
            name: 'Seguros',
            path: '/login/seguros',
            icon: faShield,
        },
        {
            id: 8,
            name: 'Mis turnos',
            path: '/login/turnos',
            icon: faFileLines,
        },
    ];

    const configNavigation = [
        {
            id: 9,
            name: 'Ayúdanos a mejorar',
            path: '/login/ayudanos',
            icon: faComments,
        },
        {
            id: 10,
            name: 'Pantalla y Accesibilidad',
            path: '/login/accesibilidad',
            icon: faMoon,
        },
        {
            id: 11,
            name: 'Configuración',
            path: '/login/configuracion',
            icon: faGears,
        },
    ];

    return (
        <div className="flex sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mx-4">
            <div className="w-full flex flex-col text-sm py-4 px-2 text-gray-500">
                <div className="flex hover:bg-gray-100 py-1 px-2">
                    <div className="w-full">
                        <img alt="..." src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" className="shadow-lg rounded-full" />
                        <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold text-blueGray-700">Nuevo Usuario</h5>
                        </div>
                    </div>
                </div>

                <hr className="my-3 border-gray-300" />

                <button
                    className={width < 640 ? 'block' : 'hidden'}
                    onClick={() => {
                        setMenu(!menu);
                    }}>
                    <div className="flex items-center justify-center">
                        <b className="rounded-lg p-2 text-2xl text-blue-stone">{menu ? 'X' : '☰'}</b>
                    </div>
                </button>

                <div className={`${menu ? (menu ? 'flex' : 'hidden') : 'hidden'} flex-col w-full text-sm`}>
                    {navigation1.map((item) => (
                        <NavLink
                            key={item.id}
                            className={({ isActive }) => {
                                return isActive ? 'bg-gray-200 rounded-xl' : '';
                            }}
                            to={item.path}>
                            <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <p className="ml-4">{item.name}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}

                    <hr className="my-3 border-gray-300" />

                    {navigation2.map((item) => (
                        <NavLink
                            key={item.id}
                            className={({ isActive }) => {
                                return isActive ? 'bg-gray-200 rounded-xl' : '';
                            }}
                            to={item.path}>
                            <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <p className="ml-4">{item.name}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}

                    <hr className="my-3 border-gray-300" />

                    {configNavigation.map((item) => (
                        <NavLink
                            key={item.id}
                            className={({ isActive }) => {
                                return isActive ? 'bg-gray-200 rounded-xl' : '';
                            }}
                            to={item.path}>
                            <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <p className="ml-4">{item.name}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}

                    <hr className="my-3 border-gray-300" />

                    <div className="flex text-lg my-2 hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                        <div className="underline">¿Necesitas Ayuda?</div>
                    </div>

                    <div
                        onClick={() => {
                            sessionStorage.removeItem('session');
                            window.location.href = '/login';
                        }}
                        className="flex my-2 items-center text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                        <FontAwesomeIcon className="text-red-800" icon={faUserCircle} />
                        <div className="ml-4 text-red-600 underline">Cerrar Sesión</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
