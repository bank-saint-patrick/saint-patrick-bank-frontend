import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import React, { useState } from 'react';

const ModalTransferencia = ({ modalTransferencia, setModalTransferencia, products, contacts, token, url }) => {
    const [loading, setLoading] = useState(false);
    const [tokenConfirm, setTokenConfirm] = useState('');
    const [enabled, setEnabled] = useState(false);

    // generates a random 4-digit token that changes every 30 seconds
    const generateToken = () => {
        let confirmToken = '';
        for (let i = 0; i < 4; i++) {
            confirmToken += Math.floor(Math.random() * 10);
        }
        setTokenConfirm(confirmToken);
    };

    const sendTransaction = async (transaction) => {
        setLoading(true);
        const response = await fetch(`${url}/Transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(transaction),
        });

        const data = await response.json();

        if (data.status === 'Success') {
            setLoading(false);
            toast.success(data.message);
            setModalTransferencia(false);
            window.location.reload();
        } else {
            setLoading(false);
            if (data.title) {
                toast.error(data.title);
            } else {
                toast.error(data.message);
            }
        }
    };

    const handleTransferSubmit = (e) => {
        e.preventDefault();

        const date = new Date();
        const dateString = date.toISOString();

        const data = Object.fromEntries(new FormData(e.target).entries());
        const transaccion = { ...data, transactionTypeID: 1, transactionID: 0, transactionTypeName: 'Transferencia', transactionDate: `${dateString}` };

        const producto = products.find((product) => Number(product.productID) === Number(transaccion.productIDOrigin));

        if (producto.saldoCupo > Number(data.transactionValue) && Number(data.transactionValue) > 0) {
            sendTransaction(transaccion);
            e.target.reset();
            setModalTransferencia(false);
        } else {
            toast.error(`El saldo de tu ${producto.productTypeID === 2 ? 'Cuenta corriente' : 'Cuenta ahorro'} - ${producto.productID} es insuficiente para realizar la transacción. O ingresaste un monto inválido.`, {
                duration: 8000,
            });
        }
    };

    if (tokenConfirm.length === 0) {
        generateToken();
    }

    setTimeout(() => {
        generateToken();
    }, 15000);

    return (
        <div className={modalTransferencia ? 'absolute z-50 w-full flex justify-center h-[85%] mt-4' : 'hidden'}>
            <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                <div className="flex w-full justify-between">
                    <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nueva Transferencia</h3>
                    <button
                        onClick={() => {
                            setModalTransferencia(false);
                            document.body.classList.remove('overflow-hidden');
                            generateToken();
                        }}
                        className="m-4 mx-8">
                        <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                    </button>
                </div>

                <form className="grow" onSubmit={handleTransferSubmit} action="">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                Producto
                            </label>

                            <select defaultValue={''} required className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full" name="productIDOrigin" id="origen">
                                <option disabled value={''}>
                                    Selecciona una cuenta
                                </option>
                                {products.map((product) => {
                                    return (
                                        <option key={product.cardNumber} value={product.productID}>
                                            {product.productTypeID === '1' || product.productTypeID === 1
                                                ? `Cuenta corriente ${product.productID} - $${product.saldoCupo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                                                : `Cuenta de ahorro ${product.productID} - $${product.saldoCupo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                Destino
                            </label>

                            <select
                                onChange={(e) => {
                                    if (e.target.value === 'otro') {
                                        const select = document.querySelector('#productIDDestination');
                                        const input = document.createElement('input');
                                        input.setAttribute('type', 'number');
                                        input.setAttribute('pattern', '^[1-9]{1}[0-9]*$');
                                        input.setAttribute('name', 'productIDDestination');
                                        input.setAttribute('class', 'p-2 rounded-lg my-4 border-2 border-blue-stone w-full');
                                        input.setAttribute('placeholder', 'Ingresa el CBU / CVU / Alias');
                                        input.setAttribute('required', '');
                                        select.parentNode.replaceChild(input, select);
                                    }
                                }}
                                required
                                defaultValue={''}
                                className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full"
                                name="productIDDestination"
                                id="productIDDestination">
                                <option disabled value="">
                                    Selecciona un beneficiario
                                </option>
                                {contacts.map((contact, index) => {
                                    return (
                                        <option key={index + 1} value={contact.contactProductId}>
                                            {contact.contactProductId ? contact.contactName + ' | nro° de cuenta: ' + contact.contactProductId : contact.contactName}
                                        </option>
                                    );
                                })}
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-between items-center">
                            <label htmlFor="monto" className="text-lg font-semibold">
                                Monto
                            </label>
                            <input placeholder="100" required type="number" name="transactionValue" id="monto" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />

                            <div className="flex flex-col w-full justify-between items-center mt-4">
                                <label htmlFor="monto" className="text-lg font-semibold">
                                    Concepto
                                </label>
                                <textarea minLength={5} maxLength={150} placeholder="Descripción breve" required name="concept" id="concept" className="resize-none w-full p-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center">
                        <label htmlFor="monto" className="text-lg font-semibold">
                            Token de confirmación
                        </label>
                        <b className="text-indigo-700">
                            <span className="text-xl font-semibold">{tokenConfirm ? tokenConfirm : 'Generando...'}</span>
                        </b>
                        <input
                            onChange={(e) => {
                                if (tokenConfirm.length === 4) {
                                    if (e.target.value === tokenConfirm) {
                                        setEnabled(true);
                                    } else {
                                        setEnabled(false);
                                    }
                                }
                            }}
                            placeholder="Ingrese el token"
                            required
                            type="number"
                            id="confirm"
                            className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4"
                        />
                    </div>

                    <div className="flex justify-center my-5">
                        <label className={`${enabled ? 'bg-cream-can' : 'bg-gray-500 text-gray-300'} w-max py-1 px-4 rounded-2xl font-semibold cursor-pointer`} htmlFor="submitForm">
                            {loading ? (
                                <>
                                    <FontAwesomeIcon className="fa-xl" icon={faSpinner} spin />
                                    <span className="ml-2">Procesando...</span>
                                </>
                            ) : (
                                'Continuar'
                            )}
                        </label>
                        <input
                            {...(enabled
                                ? {
                                      disabled: false,
                                  }
                                : { disabled: true })}
                            hidden
                            id="submitForm"
                            type="submit"
                            className="hidden"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(ModalTransferencia);
