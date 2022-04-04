import React, { useState, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
import Navbar from '../../Navbar';
import ButtonSupport from '../../needs/ButtonSupport';
import Product from '../Product';
import Transaction from '../Transaction';
import avatar from '../../../assets/avatar.jpeg';

/* alessandro's work begins */

import sir1 from '../../../assets/images/transactions/sir1.jpeg';
import sir2 from '../../../assets/images/transactions/sir2.jpeg';
import sir3 from '../../../assets/images/transactions/sir3.jpeg';

import mrs1 from '../../../assets/images/transactions/mrs1.jpeg';
import mrs2 from '../../../assets/images/transactions/mrs2.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faHouse, faFolder, faCreditCard, faPaste, faMoneyBill, faShield, faFileLines, faComments, faMoon, faGears, faUserCircle, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

// TODO: *** remove this and change for fetching data from API
const dataProducts = [
    {
        id: 1,
        name: 'Cuenta corriente',
        numberProduct: '0102-0102-0102-0102-0102',
        balance: '$1.000.000',
    },
    {
        id: 2,
        name: 'Cuenta de ahorros',
        numberProduct: '0102-0102-0102-0102-5438',
        balance: '$1.204.000',
    },
];

// TODO: *** remove this and change for fetching data from API
const dataTransactions = [
    {
        id: 1,
        product_id: 1,
        type: 'Recibido',
        receptor: 'Juan González',
        number: Math.floor(Math.random() * 1000000),
        timestamp: Date.now(),
        ammount: '$723.010',
        img: sir1,
    },
    {
        id: 2,
        product_id: 1,
        type: 'Enviado',
        receptor: 'Pedro Álvarez',
        number: Math.floor(Math.random() * 1000000),
        timestamp: Date.now(),
        ammount: '$120.000',
        img: sir2,
    },
    {
        id: 3,
        product_id: 2,
        type: 'Enviado',
        receptor: 'José Cárdenas',
        number: Math.floor(Math.random() * 1000000),
        timestamp: Date.now(),
        ammount: '$143.000',
        img: sir3,
    },
    {
        id: 4,
        product_id: 1,
        type: 'Recibido',
        receptor: 'Mariana Pedraza',
        number: Math.floor(Math.random() * 1000000),
        timestamp: Date.now(),
        ammount: '$351.000',
        img: mrs1,
    },
    {
        id: 5,
        product_id: 2,
        type: 'Enviado',
        receptor: 'María Álvarez',
        number: Math.floor(Math.random() * 1000000),
        timestamp: Date.now(),
        ammount: '$1.000.000',
        img: mrs2,
    },
];

export default function Desktop() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const [width, setWidth] = useState(window.innerWidth);
    const [menu, setMenu] = useState(false);

    const [modalTransferencia, setModalTransferencia] = useState(false);

    useEffect(() => {
        window.onresize = (e) => {
            setWidth(e.target.innerWidth);
        };
        width < 640 ? setMenu(false) : setMenu(true);

        const body = document.getElementsByTagName('body')[0];

        !modalTransferencia && body.classList.remove('overflow-hidden');
    }, [width, modalTransferencia]);

    useEffect(() => {
        validateSession();

        // TODO: *** change this for fetching data from API
        const result = dataProducts;
        setProducts(result);
        setProductSelected(result[0].id);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        const result = dataTransactions.filter((transaction) => transaction.product_id === productSelected);
        setTransactions(result);
    }, [productSelected]);

    if (loading) {
        return <Loading />;
    }

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

    /* contactos - en proceso - alessandro */

    const contacts = [
        {
            id: 1,
            name: 'Juan González',
            img: sir1,
            type: 'Recibido',
        },
        {
            id: 2,
            name: 'Pedro Álvarez',
            img: sir2,
            type: 'Enviado',
        },
        {
            id: 3,
            name: 'José Cárdenas',
            img: sir3,
            type: 'Enviado',
        },
    ];

    return (
        <div className="wrapper flex-column h-screen">
            <Navbar session />

            <div className="flex flex-col sm:flex-row">
                <div className="flex sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mx-4">
                    <div className="w-full flex flex-col text-sm py-4 px-2 text-gray-500">
                        <div className="flex hover:bg-gray-100 py-1 px-2">
                            <div className="w-full">
                                <img alt="..." src={avatar} className="shadow-lg rounded-full" />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold text-blueGray-700">Romina Hadid</h5>
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

                            <div className="flex my-2 items-center text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                                <FontAwesomeIcon className="text-red-800" icon={faUserCircle} />
                                <div className="ml-4 text-red-600 underline">Cerrar Sesión</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex sm:w-2/3 md:w-3/4 lg:w-4/5">
                    <div className="flex w-full bg-gray-100 rounded p-4">
                        <Routes>
                            <Route path="/inicio" element={<h1 className="text-4xl uppercase w-full h-full flex x items-center justify-center">Inicio</h1>} />

                            <Route
                                path="/productos"
                                element={
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <h2 className="text-xl">Productos</h2>

                                            <div className="flex flex-col lg:flex-row w-full justify-around align-top my-8">
                                                {products.map((product) => {
                                                    return (
                                                        <Product
                                                            key={product.id}
                                                            id={product.id}
                                                            name={product.name}
                                                            numberProduct={product.numberProduct}
                                                            balance={product.balance}
                                                            productSelected={productSelected}
                                                            setProductSelected={setProductSelected}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full px-8">
                                            <h3 className="text-xl text-blue-stone">Transacciones</h3>

                                            <section className=" w-full mt-8">
                                                <article className="text-sm ">
                                                    {transactions.map((transaction) => {
                                                        return (
                                                            <Transaction
                                                                key={transaction.id}
                                                                id={transaction.id}
                                                                type={transaction.type}
                                                                receptor={transaction.receptor}
                                                                number={transaction.number}
                                                                timestamp={transaction.timestamp}
                                                                ammount={transaction.ammount}
                                                                img={transaction.img}
                                                            />
                                                        );
                                                    })}
                                                </article>
                                            </section>
                                        </div>
                                    </div>
                                }
                            />

                            <Route
                                path="/transferencias"
                                element={
                                    <div className="flex align-top w-full flex-col ml-3 mt-3 p-3">
                                        <div className="flex items-center mb-4">
                                            <FontAwesomeIcon className="fa-lg" icon={faArrowRightArrowLeft} />
                                            <h6 className="text-3xl leading-normal text-emerald-800 font-bold px-4">Transferencias</h6>
                                        </div>

                                        <div className="flex w-full justify-between items-center mt-8">
                                            <p className="text-lg font-semibold">Historial de transferencias</p>

                                            <button
                                                onClick={() => {
                                                    setModalTransferencia(true);

                                                    const body = document.getElementsByTagName('body')[0];

                                                    body.classList.add('overflow-hidden');
                                                }}
                                                className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">
                                                Nueva transferencia
                                            </button>
                                        </div>

                                        <section className=" w-full mt-8">
                                            <article className="text-sm">
                                                {transactions.map((transaction) => {
                                                    return (
                                                        <Transaction
                                                            key={transaction.id}
                                                            id={transaction.id}
                                                            type={transaction.type}
                                                            receptor={transaction.receptor}
                                                            number={transaction.number}
                                                            timestamp={transaction.timestamp}
                                                            ammount={transaction.ammount}
                                                            img={transaction.img}
                                                        />
                                                    );
                                                })}
                                            </article>
                                        </section>

                                        <hr />

                                        <div className="flex flex-col">
                                            <div className="flex w-full justify-between items-center my-8">
                                                <h3 className="font-semibold text-lg">Contactos Guardados</h3>
                                                <button className="bg-gray-300 w-max py-1 px-4 rounded-2xl font-semibold">Nuevo Contacto</button>
                                            </div>

                                            <div className="flex flex-col md:flex-row">
                                                {contacts.map((contact) => (
                                                    <div key={contact.id} className="flex items-center mr-8 my-4">
                                                        <div className="mr-6 relative">
                                                            <img className="w-10 h-10 object-cover rounded-full" src={contact.img} alt="" />

                                                            <FontAwesomeIcon className={`${contact.type === 'Recibido' ? 'text-green-500' : 'text-red-500'} absolute right-0 bottom-0`} icon={faCircle} />
                                                        </div>
                                                        <b className="text-base text-yellow-500">{contact.name}</b>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </Routes>
                    </div>
                </div>

                <div className={modalTransferencia ? 'z-50 w-full h-full grid place-content-center fixed' : 'hidden'}>
                    {/* form to add a bank transfer */}
                    <div className="flex flex-col bg-white rounded-lg shadow-lg justify-between items-center">
                        <div className="flex w-full justify-between">
                            <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nueva Transferencia</h3>
                            <button
                                onClick={() => {
                                    setModalTransferencia(false);
                                }}
                                className="m-4 mx-8">
                                <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                            </button>
                        </div>

                        <div className="flex flex-col m-8">
                            <select className="my-4" name="desde" id="">
                                <option value="">Selecciona una cuenta</option>
                                <option value="">Cuenta 1</option>
                                <option value="">Cuenta 2</option>
                            </select>

                            <select className="my-4" name="hacia" id="">
                                <option value="">Selecciona un beneficiario</option>
                                <option value="">Beneficiario 1</option>
                                <option value="">Beneficiario 2</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-full justify-between items-center">
                            <div className="flex flex-col w-full justify-between items-center">
                                <label htmlFor="monto" className="text-lg font-semibold">
                                    Monto
                                </label>
                                <input type="number" name="monto" id="monto" className="w-full py-1 px-4 rounded-2xl font-semibold" />

                                <div className="flex flex-col w-full justify-between items-center mt-4">
                                    <label htmlFor="monto" className="text-lg font-semibold">
                                        Concepto
                                    </label>
                                    <input type="text" name="concepto" id="concepto" className="w-full py-1 px-4 rounded-2xl font-semibold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={modalTransferencia ? 'absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
}
