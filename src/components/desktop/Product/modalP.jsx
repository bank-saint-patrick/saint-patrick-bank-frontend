import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import { useState } from 'react';

const ModalProductos = ({ productsType, url, token, modalProducto, setModalProducto, products, setProducts, modalUpdateProd }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const addProduct = (prodAdd) => {
        setLoading(true);
        const fetchProductsToBD = async (prod) => {
            const response = await fetch(`${url}/Product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(prod),
            });

            const data = await response.json();

            if (data.status === 'Success') {
                setLoading(false);
                toast.success(data.message);
                window.location.reload();
            } else {
                setLoading(false);
                toast.error(data.message);
                window.location.reload();
            }
        };

        fetchProductsToBD(prodAdd);
    };

    const updateProd = (prod) => {
        const fetchUpdateProd = async () => {
            setLoading(true);
            const response = await fetch(`${url}/Product/${prod.productID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(prod),
            });

            const data = await response.json();

            if (data.status === 'Success') {
                setLoading(false);
                window.location.reload();
                toast.success(data.message);
                setModalProducto(false);
            } else {
                setLoading(false);
                toast.error(data.message);
                setModalProducto(false);
            }
        };

        fetchUpdateProd();
    };

    const handleProductAdd = (e) => {
        e.preventDefault();

        if (products.length < 4) {
            const data = Object.fromEntries(new FormData(e.target).entries());

            const productoAgregado = { ...data, cardNumber, startDate: `${new Date().toISOString()}`, finishDate: `${new Date().toISOString()}`, state: true };

            addProduct(productoAgregado);

            setProducts([...products, productoAgregado]);

            setModalProducto(false);

            e.target.reset();

            setCardNumber('');
        } else {
            toast.error('Solo se pueden agregar 4 productos');
        }
    };

    const handleProductUpdate = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        const dataProducto = products.find((prod) => Number(prod.productID) === Number(data.productID));

        if (dataProducto.saldoCupo) {
            const productoActualizado = { ...dataProducto, saldoCupo: Number(data.saldoCupo) + Number(dataProducto.saldoCupo) };

            updateProd(productoActualizado);
        } else {
            toast.error('Ocurrió un error, recargue la página e intente de nuevo');
        }
    };

    const handleSetCardNumber = (e) => {
        const { value } = e.target;

        // generate random number for card number
        const cardNumber = Math.floor(Math.random() * (9999999999999 - 100000000000) + 100000000000);

        if (value === 1) {
            setCardNumber(cardNumber.toString());
        } else {
            setCardNumber((cardNumber - 1).toString());
        }
    };

    return (
        <div className={modalProducto ? 'absolute z-50 w-full flex justify-center h-[65%] mt-4' : 'hidden'}>
            {!modalUpdateProd ? (
                <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                    <div className="flex w-full justify-between">
                        <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nuevo Producto</h3>
                        <button
                            onClick={() => {
                                setModalProducto(false);
                                document.body.classList.remove('overflow-hidden');
                            }}
                            className="m-4 mx-8">
                            <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                        </button>
                    </div>

                    <form className="grow" onSubmit={handleProductAdd} action="">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                    Tipo de Producto
                                </label>

                                <select onChange={handleSetCardNumber} defaultValue={''} required className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full" name="productTypeID" id="">
                                    <option disabled value={''}>
                                        Seleccione un tipo
                                    </option>
                                    {productsType.map((type) => {
                                        return (
                                            <option key={type.productTypeID} value={type.productTypeID}>
                                                {type.nameProduct}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="flex flex-col justify-between items-center">
                                <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                    Número de Tarjeta
                                </label>

                                <input placeholder={cardNumber} disabled required type="number" name="cardNumber" className="w-full py-1 px-4 rounded-2xl text-gray-600 font-semibold border-2 border-gray-400 my-4" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between items-center">
                            <div className="flex flex-col justify-between items-center">
                                <label className="text-lg font-semibold">Saldo</label>
                                <input min={20} max={10000000} placeholder="Saldo inicial" required type="number" name="saldoCupo" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                                <span className="font-bold mb-3">El saldo mínimo inicial es de $20</span>
                            </div>
                        </div>

                        <div className="flex justify-center my-5">
                            <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">{loading ? <FontAwesomeIcon className="fa-xl" icon={faSpinner} spin /> : 'Agregar'}</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-y-auto overflow-x-hidden">
                    <div className="flex w-full justify-between">
                        <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Depositar</h3>
                        <button
                            onClick={() => {
                                setModalProducto(false);
                                document.body.classList.remove('overflow-hidden');
                            }}
                            className="m-4 mx-8">
                            <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                        </button>
                    </div>

                    <div className="flex flex-col w-full justify-start items-center px-8 mb-2">
                        <span className="font-bold mb-3">El monto máximo a depositar es de $5000</span>
                        <span className="font-bold mb-3">Y el monto mínimo es de $10</span>
                    </div>

                    <form className="grow px-8" onSubmit={handleProductUpdate} action="">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                    Producto
                                </label>

                                <select defaultValue={''} required className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full" name="productID" id="">
                                    <option disabled value={''}>
                                        Seleccione un producto
                                    </option>
                                    {products.map((prod) => {
                                        return (
                                            <option key={prod.cardNumber} value={prod.productID}>
                                                {`${prod.productTypeID === 1 || prod.productTypeID === '1' ? 'Cuenta corriente' : 'Cuenta ahorro'} - ${prod.cardNumber} - $${prod.saldoCupo}`}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                    Monto
                                </label>

                                <input min={10} max={5000} placeholder="Monto" required type="number" name="saldoCupo" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone my-4" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center my-5">
                            <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">{loading ? <FontAwesomeIcon className="fa-xl" icon={faSpinner} spin /> : 'Depositar'}</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ModalProductos;
