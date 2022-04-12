import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
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

// * URL de la API

const url = 'http://ec2-3-139-57-252.us-east-2.compute.amazonaws.com:5000/api';

// ? COMPONENTE

export default function Desktop() {
    // * TOKEN

    const token = JSON.parse(sessionStorage.getItem('session')).token;

    /* Data */
    const [products, setProducts] = useState([]);

    const [productsType, setProductsType] = useState([]);

    const [transactions, setTransactions] = useState([]);

    const [contacts, setContacts] = useState([]);

    /* Utilities */
    const [productSelected, setProductSelected] = useState(0);
    const [loading, setLoading] = useState(true);

    /* Modals */
    const [modalTransferencia, setModalTransferencia] = useState(false);
    const [modalContacto, setModalContacto] = useState(false);
    const [modalProducto, setModalProducto] = useState(false);
    const [modalUpdateProd, setModalUpdateProd] = useState(false);

    /* User */

    const [userData, setUserData] = useState({});

    // ? Data Fetching GET

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

            setLoading(false);
        };

        fetchContacts();
    }, [token]);

    /* Products */
    useEffect(() => {
        validateSession();

        const fetchProducts = async () => {
            setLoading(true);

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

            setLoading(false);
        };

        fetchProducts();
    }, [token]);

    /* Products Type */
    useEffect(() => {
        validateSession();

        const fetchProductsType = async () => {
            setLoading(true);

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

            setLoading(false);
        };

        fetchProductsType();
    }, [token]);

    /* Transactions */
    useEffect(() => {
        validateSession();

        const fetchTransactions = async (transactionId) => {
            setLoading(true);

            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Product/${transactionId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            // FIN DE LA CONEXION CON LA API

            setLoading(false);

            return data.transactions;
        };

        const transactionsFetching = products.map(async (product) => {
            return await fetchTransactions(product.productID);
        });

        Promise.all(transactionsFetching).then((transactions) => {
            setTransactions(transactions.flat());
        });
    }, [token, products]);

    if (loading) {
        return <Loading />;
    }

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
                            <Route path="/" element={<IndexLogin url={url} token={token} />} />

                            <Route
                                path="/productos"
                                element={
                                    <>
                                        <ProductsContainer
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
                                    </>
                                }
                            />

                            <Route
                                path="/transferencias"
                                element={
                                    <>
                                        <TransactionsContainer url={url} token={token} transactions={transactions} contacts={contacts} setModalTransferencia={setModalTransferencia} setModalContacto={setModalContacto} />
                                    </>
                                }
                            />
                            <Route path="/configuracion" element={<ForgotPassword url={url} token={token} />} />
                        </Routes>
                    </div>
                </div>

                {/* Formularios */}
                <ModalTransferencia url={url} token={token} modalTransferencia={modalTransferencia} setModalTransferencia={setModalTransferencia} setTransactions={setTransactions} products={products} contacts={contacts} />

                <ModalContacto userData={userData} token={token} url={url} modalContacto={modalContacto} setModalContacto={setModalContacto} contacts={contacts} setContacts={setContacts} />

                <ModalProductos modalUpdateProd={modalUpdateProd} url={url} token={token} productsType={productsType} modalProducto={modalProducto} setModalProducto={setModalProducto} products={products} setProducts={setProducts} />

                <div className={modalTransferencia || modalContacto || modalProducto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
}
