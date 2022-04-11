import Transaction from './../Transaction/index';
import Product from './index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const ProductsContainer = ({ products, productSelected, setProductSelected, transactions, setModalProducto, setModalUpdateProd, url, token }) => {
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
                            const nameProd = product.productTypeID === 2 || product.productTypeID === '2' ? 'Cuenta corriente' : 'Cuenta ahorro';
                            return <Product key={product.cardNumber} id={product.productID} name={nameProd} numberProduct={product.productID} balance={product.saldoCupo} productSelected={productSelected} setProductSelected={setProductSelected} />;
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
                <h3 className="text-xl font-semibold underline text-blue-stone">
                    Historial de Transacciones: <b className="font-bold text-indigo-700">{transactions.length}</b> en total
                </h3>

                <section className=" w-full mt-8">
                    <article className="text-sm">
                        {transactions.map((transaction) => {
                            const showTransaction = productSelected ? transaction.productIDDestination === productSelected || transaction.productIDOrigin === productSelected : true;
                            return showTransaction ? (
                                <Transaction
                                    key={transaction.transactionID}
                                    url={url}
                                    token={token}
                                    id={transaction.transactionID}
                                    type={transaction.transactionTypeID}
                                    sender={transaction.productIDOrigin}
                                    receptor={transaction.productIDDestination}
                                    number={transaction.productIDDestination}
                                    timestamp={transaction.transactionDate}
                                    ammount={transaction.transactionValue}
                                    // img={transaction.img}
                                />
                            ) : null;
                        })}
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ProductsContainer;
