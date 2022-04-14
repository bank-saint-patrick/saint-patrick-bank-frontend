import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { validateSession } from '../../utils/auth';
import Navbar from '../../Navbar';
import ButtonSupport from '../../needs/ButtonSupport';

import SubMenu from './../SubMenu/index';
import ProductsContainer from './../Product/container';
import TransactionsContainer from '../Transaction/container';

import ModalTransferencia from './../Transaction/modalT';
import ModalContacto from './../Transaction/modalC';
import Expiration from './../../needs/Expiration/index';
import ForgotPassword from './../../Login/Forgot';
import ModalProductos from './../Product/modalP';
import IndexLogin from './../IndexLogin/index';
import { toast } from 'react-toastify';
import ModalBorrarContacto from './../Transaction/modalBorrarC';

// * URL de la API

const url = 'http://ec2-3-139-57-252.us-east-2.compute.amazonaws.com:5000/api';

// ? COMPONENTE

const Desktop = () => {
    // * TOKEN
    const token = sessionStorage.getItem('session') ? JSON.parse(sessionStorage.getItem('session')).token : '';

    /* Data */
    const [products, setProducts] = useState([]);

    const [productsType, setProductsType] = useState([]);

    const [transactions, setTransactions] = useState([]);
    // const [completeTransactions, setCompleteTransactions] = useState([]);

    const [contacts, setContacts] = useState([]);

    /* Utilities */
    const [productSelected, setProductSelected] = useState(0);

    /* Modals */
    const [modalTransferencia, setModalTransferencia] = useState(false);
    const [modalContacto, setModalContacto] = useState(false);
    const [modalBorrarContacto, setModalBorrarContacto] = useState(false);
    const [modalProducto, setModalProducto] = useState(false);
    const [modalUpdateProd, setModalUpdateProd] = useState(false);

    /* User */

    const [userData, setUserData] = useState({});

    // ? Data Fetching GET

    /* UserData */
    useEffect(() => {
        const fetchUserName = async () => {
            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Profile/GetUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            setUserData(data);

            // FIN DE LA CONEXION CON LA API
        };

        fetchUserName();
    }, [token]);

    /* Contacts */
    useEffect(() => {
        validateSession();

        const fetchContacts = async () => {
            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/UserContact/GetContactByUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (data.status !== 'Error') {
                setContacts(data);
            } else {
                toast.error('Error:' + data.message);
            }

            // FIN DE LA CONEXION CON LA API
        };

        fetchContacts();
    }, [token]);

    /* Products */
    useEffect(() => {
        validateSession();

        const fetchProducts = async () => {
            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Product/GetAllProductsByUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            setProducts(data);

            // FIN DE LA CONEXION CON LA API
        };

        fetchProducts();
    }, [token]);

    /* Products Type */
    useEffect(() => {
        validateSession();

        const fetchProductsType = async () => {
            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/ProductType`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            setProductsType(data);

            // FIN DE LA CONEXION CON LA API
        };

        fetchProductsType();
    }, [token]);

    /* Transactions */
    useEffect(() => {
        validateSession();

        const fetchTransactions = async (transactionId) => {
            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Transaction/${transactionId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            // FIN DE LA CONEXION CON LA API

            return data;
        };

        const transactionsFetching = products.map(async (product) => {
            return await fetchTransactions(product.productID);
        });

        Promise.all(transactionsFetching).then((transactions) => {
            if (transactions.length > 0) {
                setTransactions(transactions.flat().sort((a, b) => b.transactionID - a.transactionID));
            } else {
                setTransactions([]);
            }
        });
    }, [products, token]);

    return (
        <div className="wrapper flex-column h-screen">
            <Navbar session />

            <Expiration />

            <div className="flex flex-col sm:flex-row">
                <SubMenu setUserData={setUserData} url={url} token={token} />

                {/* Secciones */}
                <div className="flex sm:w-2/3 md:w-3/4 lg:w-4/5">
                    <div className="flex w-full bg-gray-100 rounded p-4">
                        <Routes>
                            <Route path="/" element={<IndexLogin setModalProducto={setModalProducto} setModalTransferencia={setModalTransferencia} userData={userData} />} />

                            <Route
                                path="/productos"
                                element={
                                    <ProductsContainer
                                        contacts={contacts}
                                        token={token}
                                        url={url}
                                        setModalUpdateProd={setModalUpdateProd}
                                        productsType={productsType}
                                        products={products}
                                        setProducts={setProducts}
                                        productSelected={productSelected}
                                        setProductSelected={setProductSelected}
                                        transactions={transactions}
                                        modalProducto={modalProducto}
                                        setModalProducto={setModalProducto}
                                    />
                                }
                            />

                            <Route
                                path="/transferencias"
                                element={
                                    <TransactionsContainer
                                        products={products}
                                        url={url}
                                        token={token}
                                        transactions={transactions}
                                        contacts={contacts}
                                        setModalTransferencia={setModalTransferencia}
                                        setModalContacto={setModalContacto}
                                        setModalBorrarContacto={setModalBorrarContacto}
                                    />
                                }
                            />

                            <Route path="/configuracion" element={<ForgotPassword url={url} token={token} />} />
                        </Routes>
                    </div>
                </div>

                {/* Formularios */}
                <ModalTransferencia url={url} token={token} modalTransferencia={modalTransferencia} setModalTransferencia={setModalTransferencia} setTransactions={setTransactions} products={products} contacts={contacts} />

                <ModalContacto userData={userData} token={token} url={url} modalContacto={modalContacto} setModalContacto={setModalContacto} contacts={contacts} setContacts={setContacts} />

                <ModalBorrarContacto userData={userData} token={token} url={url} modalBorrarContacto={modalBorrarContacto} setModalBorrarContacto={setModalBorrarContacto} contacts={contacts} setContacts={setContacts} />

                <ModalProductos modalUpdateProd={modalUpdateProd} url={url} token={token} productsType={productsType} modalProducto={modalProducto} setModalProducto={setModalProducto} products={products} setProducts={setProducts} />

                <div className={modalTransferencia || modalContacto || modalProducto || modalBorrarContacto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
};

export default Desktop;
