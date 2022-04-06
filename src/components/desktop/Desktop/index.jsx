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

import mrs1 from '../../../assets/images/transactions/mrs1.jpeg';
import mrs2 from '../../../assets/images/transactions/mrs2.jpeg';

import SubMenu from './../SubMenu/index';
import ProductsContainer from './../Product/container';
import TransactionsContainer from '../Transaction/container';

import ModalTransferencia from './../Transaction/modalT';
import ModalContacto from './../Transaction/modalC';

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

export default function Desktop() {
    /* Data */
    const [products, setProducts] = useState([]);

    const [transactions, setTransactions] = useState([]);

    const [contacts, setContacts] = useState([]);

    /* Utilities */
    const [productSelected, setProductSelected] = useState(0);
    const [loading, setLoading] = useState(true);

    /* Modals */
    const [modalTransferencia, setModalTransferencia] = useState(false);
    const [modalContacto, setModalContacto] = useState(false);

    /* Data Fetching */

    /* Contacts */
    useEffect(() => {
        validateSession();

        setContacts(dataContacts);
    }, []);

    /* Products */
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

    /* Transactions */
    useEffect(() => {
        const result = dataTransactions.filter((transaction) => transaction.product_id === productSelected);
        setTransactions(result);
    }, [productSelected]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="wrapper flex-column h-screen">
            <Navbar session />

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
                                        <ProductsContainer products={products} productSelected={productSelected} setProductSelected={setProductSelected} transactions={transactions} />
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
                        </Routes>
                    </div>
                </div>

                {/* Formularios */}
                <ModalTransferencia modalTransferencia={modalTransferencia} setModalTransferencia={setModalTransferencia} transactions={transactions} setTransactions={setTransactions} products={products} contacts={contacts} />

                <ModalContacto modalContacto={modalContacto} setModalContacto={setModalContacto} contacts={contacts} setContacts={setContacts} />

                <div className={modalTransferencia || modalContacto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
}
