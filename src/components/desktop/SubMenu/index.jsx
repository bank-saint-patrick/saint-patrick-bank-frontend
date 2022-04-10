import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faArrowRightArrowLeft, faFolder, faCreditCard, faPaste, faMoneyBill, faShield, faFileLines, faComments, faMoon, faGears, faUserCircle, faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const SubMenu = ({ url, token }) => {
    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [editUser, setEditUser] = useState(false);

    const [userName, setUserName] = useState('');
    const [editUserName, setEditUserName] = useState(false);
    const [userImgPerfil, setUserImgPerfil] = useState('');

    /* Perfil fetching */

    useEffect(() => {
        const fetchUserName = async () => {
            setLoading(true);

            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Profile/GetUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            setUser(data);
            setUserImgPerfil(data.image);
            setUserName(data.firstName);

            // FIN DE LA CONEXION CON LA API

            setLoading(false);
        };

        fetchUserName();
    }, [token, url]);

    /* Utilitie useEffect */
    useEffect(() => {
        window.onresize = (e) => {
            setWidth(e.target.innerWidth);
        };
        width < 640 ? setMenu(false) : setMenu(true);
    }, [width]);

    /* Update Perfil */

    const updateUser = async (updateUser) => {
        // INICIO DE LA CONEXION CON LA API

        const response = await fetch(`${url}/Profile/UserUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updateUser),
        });

        const data = await response.json();

        // FIN DE LA CONEXION CON LA API

        if (data.status !== 'Error') {
            toast.success(data.message);
        } else {
            toast.error('Error: ' + data.message);
        }
    };

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
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="flex">
                            <img alt="..." src={loading || userImgPerfil === '' ? 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg' : userImgPerfil} className="shadow-lg rounded-full" />
                            <FontAwesomeIcon
                                icon={editUser ? faSave : faPencilAlt}
                                className="text-blue-stone ml-3 text-xl cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEditUser(!editUser);
                                    if (editUser) {
                                        updateUser(user);
                                    }
                                }}
                            />
                        </div>

                        {editUser && (
                            <>
                                <label className="cursor-pointer font-bold border-2 border-blue-stone p-2 mt-3" htmlFor="changeImgPerfil">
                                    Cambiar imágen de perfil
                                </label>
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    name="userImgPerfil"
                                    id="changeImgPerfil"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.readAsDataURL(file);
                                        reader.onload = (e) => {
                                            setUser({ ...user, image: e.target.result });
                                            setUserImgPerfil(e.target.result);
                                        };
                                    }}
                                />
                            </>
                        )}

                        <div className="flex items-center pt-6 text-center">
                            {editUserName ? (
                                <>
                                    <input
                                        className="p-2"
                                        type="text"
                                        name="userName"
                                        id=""
                                        value={userName}
                                        onChange={(e) => {
                                            setUser({ ...user, firstName: e.target.value });
                                            setUserName(e.target.value.trim());
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <h5 className="text-xl font-bold text-blueGray-700 mr-2">{userName}</h5>
                                </>
                            )}
                            {editUser && (
                                <FontAwesomeIcon
                                    icon={editUserName ? faSave : faPencilAlt}
                                    className="text-blueGray-700 ml-2 text-lg cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEditUserName(!editUserName);
                                    }}
                                />
                            )}
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
