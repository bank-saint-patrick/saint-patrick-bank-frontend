import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
import Navbar from '../../Navbar';
import ButtonSupport from '../../needs/ButtonSupport';

/* alessandro's work begins */

import sir1 from '../../../assets/images/transactions/sir1.jpeg';
import sir2 from '../../../assets/images/transactions/sir2.jpeg';
import sir3 from '../../../assets/images/transactions/sir3.jpeg';

// import mrs1 from '../../../assets/images/transactions/mrs1.jpeg';
// import mrs2 from '../../../assets/images/transactions/mrs2.jpeg';

import SubMenu from './../SubMenu/index';
import ProductsContainer from './../Product/container';
import TransactionsContainer from '../Transaction/container';

import ModalTransferencia from './../Transaction/modalT';
import ModalContacto from './../Transaction/modalC';
import Expiration from './../../needs/Expiration/index';
import ForgotPassword from './../../Login/Forgot';
import ModalProductos from './../Product/modalP';

// TODO: *** remove this and change for fetching data from API
const dataContacts = [
    {
        id: 1,
        name: 'Juan González',
        img: sir1,
        cbu: '01020102010201020102',
    },
    {
        id: 2,
        name: 'Pedro Álvarez',
        img: sir2,
        cbu: '01020102010201025438',
    },
    {
        id: 3,
        name: 'José Cárdenas',
        img: sir3,
        cbu: '01020102010201025438',
    },
];

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

    // ? Data Fetching GET

    /* Contacts */
    useEffect(() => {
        validateSession();

        setContacts(dataContacts);
    }, []);

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

        const fetchTransactions = async () => {
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

            console.log(data.transactions);

            // FIN DE LA CONEXION CON LA API

            setLoading(false);
        };

        fetchTransactions();
    }, [token]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="wrapper flex-column h-screen">
            <Navbar session />

            <Expiration />

            <div className="flex flex-col sm:flex-row">
                <SubMenu />

                {/* Secciones */}
                <div className="flex sm:w-2/3 md:w-3/4 lg:w-4/5">
                    <div className="flex w-full bg-gray-100 rounded p-4">
                        <Routes>
                            <Route path="/inicio" element={<h1 className="text-4xl uppercase w-full h-full flex x items-center justify-center">Inicio</h1>} />

                            <Route
                                path="/productos"
                                element={
                                    <>
                                        <ProductsContainer
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
                                        <TransactionsContainer transactions={transactions} contacts={contacts} setModalTransferencia={setModalTransferencia} setModalContacto={setModalContacto} />
                                    </>
                                }
                            />
                            <Route path="/configuracion" element={<ForgotPassword url={url} token={token} />} />
                        </Routes>
                    </div>
                </div>

                {/* Formularios */}
                <ModalTransferencia url={url} token={token} modalTransferencia={modalTransferencia} setModalTransferencia={setModalTransferencia} transactions={transactions} setTransactions={setTransactions} products={products} contacts={contacts} />

                <ModalContacto modalContacto={modalContacto} setModalContacto={setModalContacto} contacts={contacts} setContacts={setContacts} />

                <ModalProductos modalUpdateProd={modalUpdateProd} url={url} token={token} productsType={productsType} modalProducto={modalProducto} setModalProducto={setModalProducto} products={products} setProducts={setProducts} />

                <div className={modalTransferencia || modalContacto || modalProducto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
}
