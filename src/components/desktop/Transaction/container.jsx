import React from 'react';

import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Transaction from './index';

const TransactionsContainer = ({ transactions, url, token, contacts, setModalContacto, setModalTransferencia, setModalBorrarContacto, products }) => {
    return (
        <div className="flex align-top w-full flex-col ml-3 mt-3 p-3">
            <div className="flex flex-col md:flex-row items-center mb-4 w-full justify-between">
                <div className="flex items-center">
                    <FontAwesomeIcon className="fa-lg" icon={faArrowRightArrowLeft} />
                    <h6 className="text-3xl leading-normal text-emerald-800 font-bold px-4">Transferencias</h6>
                </div>
                <button
                    onClick={() => {
                        setModalTransferencia(true);

                        window.scrollTo(0, 0);
                        document.body.classList.add('overflow-hidden');
                    }}
                    className="bg-cream-can w-max mt-2 py-2 px-4 rounded-2xl font-semibold">
                    Nueva transferencia
                </button>
            </div>

            {/* Transferencias */}

            <section className=" w-full mt-8">
                <h2 className="m-0 text-lg font-semibold">Últimas 3 transferencias </h2>
                {transactions.length > 0 ? (
                    <article className="text-sm mx-4">
                        {transactions.map((transaction) => {
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

                            if (transactions.indexOf(transaction) < 3) {
                                return (
                                    <Transaction
                                        key={transaction.transferID}
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
                                );
                            } else {
                                return null;
                            }
                        })}
                    </article>
                ) : (
                    <p className="text-center text-lg font-bold m-8 underline text-emerald-800">No hay transferencias registradas</p>
                )}
            </section>

            <hr />

            {/* Contactos */}

            <div className="flex w-full justify-between items-center my-8">
                <h3 className="font-semibold text-lg">Contactos Guardados</h3>
                <div className="flex">
                    <button
                        onClick={() => {
                            setModalContacto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-gray-300 w-max py-1 px-4 rounded-2xl font-semibold">
                        Nuevo Contacto
                    </button>
                    <button
                        onClick={() => {
                            setModalBorrarContacto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-red-400 ml-2 w-max py-1 px-4 rounded-2xl font-semibold">
                        Borrar Contacto
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                {contacts.length > 0 ? (
                    <div className="flex flex-col md:flex-row flex-wrap">
                        {contacts.map((contact, index) => {
                            return (
                                <div key={index + 1} className="flex items-center mr-8 my-4">
                                    <div className="mr-6 relative">
                                        <img
                                            className="w-10 h-10 object-cover rounded-full"
                                            src={contact.image.length > 0 && contact.image.includes('data') ? contact.image : 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'}
                                            alt=""
                                        />
                                    </div>
                                    <b className="text-base text-yellow-500">{contact.contactName}</b>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-center text-lg font-bold m-8 underline text-emerald-800">No hay contactos registrados</p>
                )}
            </div>
        </div>
    );
};

export default React.memo(TransactionsContainer);
