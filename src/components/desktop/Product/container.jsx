import React, { useState, useEffect } from 'react';

import Transaction from './../Transaction/index';
import Product from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const ProductsContainer = ({ products, productSelected, setProductSelected, transactions, setModalProducto, setModalUpdateProd, url, token, contacts }) => {
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [tipoFiltro, setTipoFiltro] = useState(null);

    const [transactionsToShow, setTransactionsToShow] = useState([]);

    /* Efectos al detectar cambios */

    useEffect(() => {
        setTotalPages(Math.ceil(transactions.length / 4));

        if (transactions.length > 0) {
            setTransactionsToShow(transactions);
        }
    }, [transactions]);

    useEffect(() => {
        if (productSelected) {
            const transactionsFilter = transactions.filter((transaction) => transaction.productIDOrigin === productSelected || transaction.productIDDestination === productSelected);

            if (tipoFiltro !== null) {
                const nuevoFiltro = transactionsFilter.filter((transaction) => transaction.tipo === tipoFiltro);
                setTransactionsToShow(nuevoFiltro);
                setTotalPages(Math.ceil(nuevoFiltro.length / 4));
                setPage(1);
            } else {
                setTransactionsToShow(transactionsFilter);
                setTotalPages(Math.ceil(transactionsFilter.length / 4));
                setPage(1);
            }
        } else {
            if (tipoFiltro !== null) {
                const nuevoFiltro = transactions.filter((transaction) => transaction.tipo === tipoFiltro);
                setTransactionsToShow(nuevoFiltro);
                setTotalPages(Math.ceil(nuevoFiltro.length / 4));
                setPage(1);
            } else {
                setTransactionsToShow(transactions);
                setTotalPages(Math.ceil(transactions.length / 4));
                setPage(1);
            }
        }
    }, [productSelected, transactions, tipoFiltro]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
                <div className="flex flex-col lg:flex-row w-full items-start lg:items-center my-8 justify-between">
                    <div className="flex items-center w-full">
                        <FontAwesomeIcon icon={faCreditCard} className="text-xl text-blue-stone pt-2" />
                        <h2 className="text-3xl font-bold text-blue-stone mx-4">
                            Tus productos disponibles ➡️ <b className="text-blue-stone">{products.length}</b>
                        </h2>
                    </div>

                    <div className="flex flex-col xsm:flex-row mt-6 lg:mt-0">
                        <div className={products && products.length > 0 ? 'flex my-2 xsm:my-0' : 'hidden'}>
                            <button
                                onClick={() => {
                                    setModalProducto(true);
                                    setModalUpdateProd(false);
                                    window.scrollTo(0, 0);
                                    document.body.classList.add('overflow-hidden');
                                }}
                                className="whitespace-nowrap w-full bg-cream-can text-blue-stone text-lg font-semibold py-2 px-4 rounded-lg mx-2">
                                Nuevo Producto
                            </button>
                        </div>
                        <div className={products && products.length > 0 ? 'flex my-2 xsm:my-0' : 'hidden'}>
                            <button
                                onClick={() => {
                                    setModalProducto(true);
                                    setModalUpdateProd(true);
                                    window.scrollTo(0, 0);
                                    document.body.classList.add('overflow-hidden');
                                }}
                                className="whitespace-nowrap w-full bg-blue-stone text-white text-lg font-semibold py-2 px-4 rounded-lg mx-2">
                                Depositar
                            </button>
                        </div>
                    </div>
                </div>

                {products && products.length > 0 ? (
                    <div className="flex flex-col lg:flex-row w-full justify-around align-top my-8 flex-wrap">
                        {products.map((product) => {
                            const nameProd = product.productTypeID === 1 || product.productTypeID === '1' ? 'Cuenta corriente' : 'Cuenta ahorro';
                            return <Product key={product.cardNumber} id={product.productID} name={nameProd} numberProduct={product.cardNumber} balance={product.saldoCupo} productSelected={productSelected} setProductSelected={setProductSelected} />;
                        })}
                    </div>
                ) : (
                    <div
                        onClick={() => {
                            setModalProducto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="flex flex-col items-center justify-center bg-blue-stone w-max mx-auto p-3 rounded-xl shadow-lg shadow-gray-300 mt-10 mb-8 hover:opacity-75 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faCreditCard} className="text-xl text-cream-can pt-2" />
                        <h2 className="text-lg xsm:text-2xl font-bold text-cream-can mx-4">Agrega un producto</h2>
                    </div>
                )}
            </div>

            <div className="flex flex-col w-full px-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold underline text-blue-stone">
                        Historial de Transacciones: <b className="font-bold text-indigo-700">{transactionsToShow.length}</b> en total
                    </h3>
                    <section className="flex items-center">
                        <button
                            onClick={() => {
                                setPage(page - 1);
                            }}
                            className={page === 1 ? 'hidden' : 'flex items-center justify-center text-blue-stone text-lg font-semibold rounded-lg mx-2'}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} className="text-xl text-blue-stone" />
                        </button>
                        <p className="mx-2">
                            Página <b className="text-blue-stone">{page}</b> de <b className="text-blue-stone">{totalPages}</b>
                        </p>
                        <button
                            onClick={() => {
                                setPage(page + 1);
                            }}
                            className={page === totalPages ? 'hidden' : 'flex items-center justify-center text-blue-stone text-lg font-semibold rounded-lg mx-2'}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className="text-xl text-blue-stone" />
                        </button>
                    </section>
                </div>

                <section className="w-full mt-8">
                    <article className="flex items-center justify-center w-full pt-2 pb-6">
                        <p className="text-lg font-semibold">Filtrar por:</p>

                        <button onClick={() => setTipoFiltro('Ingreso')} className={`${tipoFiltro === 'Ingreso' ? 'font-bold text-blue-stone bg-cream-can' : 'text-gray-700 border-2 border-blue-stone'} mx-4 p-2`}>
                            Ingresos
                        </button>

                        <button onClick={() => setTipoFiltro('Egreso')} className={`${tipoFiltro === 'Egreso' ? 'font-bold text-blue-stone bg-cream-can' : 'text-gray-700 border-2 border-blue-stone'} mx-4 p-2`}>
                            Egresos
                        </button>
                    </article>

                    <article className="text-sm">
                        {transactionsToShow.map((transaction, index) => {
                            const contactReceptor = contacts.find((contact) => contact.contactProductId === Number(transaction.productIDDestination));

                            const contactSender = contacts.find((contact) => contact.contactProductId === Number(transaction.productIDOrigin));

                            const productSender = products.find((product) => product.productID === Number(transaction.productIDOrigin));

                            const productReceptor = products.find((product) => product.productID === Number(transaction.productIDDestination));

                            const date = new Date(transaction.transactionDate);

                            const dateFormatted = date.toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            });

                            const timeZoneOffset = new Date().getTimezoneOffset() * 60000;
                            const timeZoneFormatted = new Date(date.getTime() - timeZoneOffset).toLocaleTimeString('es-ES', {
                                hour: 'numeric',
                                minute: 'numeric',
                            });

                            return index >= page * 4 - 4 && index < page * 4 ? (
                                <Transaction
                                    key={index}
                                    url={url}
                                    token={token}
                                    id={transaction.transferID}
                                    type={transaction.tipo}
                                    concepto={transaction.concepto}
                                    sender={
                                        contactSender
                                            ? contactSender.contactName + ' - ' + contactSender.contactProductId
                                            : productSender
                                            ? productSender.productTypeID === 1
                                                ? 'Cuenta corriente - n° ' + transaction.productIDOrigin
                                                : 'Cuenta ahorro - n° ' + transaction.productIDOrigin
                                            : 'Cuenta desconocida - n° ' + transaction.productIDOrigin
                                    }
                                    receptor={
                                        contactReceptor
                                            ? contactReceptor.contactName + ' - ' + contactReceptor.contactProductId
                                            : productReceptor
                                            ? productReceptor.productTypeID === 1
                                                ? 'Cuenta corriente - n° ' + transaction.productIDDestination
                                                : 'Cuenta ahorro - n° ' + transaction.productIDDestination
                                            : 'Cuenta desconocida - n° ' + transaction.productIDDestination
                                    }
                                    number={transaction.productIDDestination}
                                    timestamp={dateFormatted ? dateFormatted + ', ' + timeZoneFormatted : 'Fecha desconocida'}
                                    ammount={transaction.transactionValue}
                                    img={contactReceptor ? contactReceptor.image : ''}
                                />
                            ) : null;
                        })}
                    </article>
                </section>
            </div>
        </div>
    );
};

export default React.memo(ProductsContainer);
