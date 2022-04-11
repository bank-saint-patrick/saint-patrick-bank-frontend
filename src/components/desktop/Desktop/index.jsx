import React, { useState, useEffect } from 'react';
import { validateSession } from '../../utils/auth';
<<<<<<< HEAD
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
import IndexLogin from './../IndexLogin/index';

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
=======
import Loading from '../../needs/Loading/index';
import Navbar from '../../Navbar/index';
import ButtonSupport from '../../needs/ButtonSuports/index';
import Product from '../Product/index';
import Transaction from '../Transaction/index';
import avatar from '../../../assets/images/avatar.jpeg';

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
]

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
  },
  {
    id: 2,
    product_id: 1,
    type: 'Enviado',
    receptor: 'Maricela Mendiola',
    number: Math.floor(Math.random() * 1000000),
    timestamp: Date.now(),
    ammount: '$120.000',
  },
  {
    id: 3,
    product_id: 2,
    type: 'Enviado',
    receptor: 'Maricela Mendiola',
    number: Math.floor(Math.random() * 1000000),
    timestamp: Date.now(),
    ammount: '$143.000',
  },
]
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e

// * URL de la API

const url = 'http://ec2-3-139-57-252.us-east-2.compute.amazonaws.com:5000/api';

// ? COMPONENTE

export default function Desktop() {
<<<<<<< HEAD
    // * TOKEN

    const token = JSON.parse(sessionStorage.getItem('session')).token;

    /* Data */
    const [products, setProducts] = useState([]);

    const [productsType, setProductsType] = useState([]);

    const [transactions, setTransactions] = useState([]);
=======
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    validateSession();
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e

    // TODO: *** change this for fetching data from API
    const result = dataProducts;
    setProducts(result);
    setProductSelected(result[0].id);
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const result = dataTransactions.filter(transaction => transaction.product_id === productSelected);
    setTransactions(result);
  }, [productSelected]);

<<<<<<< HEAD
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
                <SubMenu url={url} token={token} />

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
=======
  if (loading) {
    return (<Loading />);
  }

  return (
    <div className="wrapper flex-column w-screen h-screen">
      <Navbar session />
      <div className="grid grid-cols-1">
        <div className="container mx-3 flex flex-col mt-3 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
              Tus productos disponibles
            </h6>
          </div>
          <div className="flex w-full">
            <div className="flex w-1/6 px-2">
              <div className="w-full flex flex-col text-sm py-4 px-1 text-gray-500">
                <div className="flex hover:bg-gray-100 py-1 px-2">
                  <div className="w-max md:w-11/12 lg:w-10/12 xl:w-2/3 2xl:10/12">
                    <img alt="..." src={avatar} className="shadow-lg rounded-full" />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold text-blueGray-700">Romina Hadid</h5>
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e
                    </div>
                  </div>
                </div>
<<<<<<< HEAD

                {/* Formularios */}
                <ModalTransferencia url={url} token={token} modalTransferencia={modalTransferencia} setModalTransferencia={setModalTransferencia} transactions={transactions} setTransactions={setTransactions} products={products} contacts={contacts} />

                <ModalContacto modalContacto={modalContacto} setModalContacto={setModalContacto} contacts={contacts} setContacts={setContacts} />

                <ModalProductos modalUpdateProd={modalUpdateProd} url={url} token={token} productsType={productsType} modalProducto={modalProducto} setModalProducto={setModalProducto} products={products} setProducts={setProducts} />

                <div className={modalTransferencia || modalContacto || modalProducto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
=======
                <hr className="my-3 border-gray-300" />
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>Mis cuentas</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>Créditos</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>Calculadora</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>...</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>...</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>...</div>
                </div>
                <hr className="my-3 border-gray-300" />
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>Ayuda</div>
                </div>
                <div className="flex text-lg hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2">
                  <div>Salir</div>
                </div>
              </div>
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e
            </div>
            <div className="flex w-2/3 ml-36 sm:ml-16 md:ml-14 lg:ml-10 xl:ml-4 2xl:ml-4">
              <div className="flex flex-col w-full overflow-hidden bg-gray-100 rounded p-4 xsm:overflow-auto xsm:flex-row md:ml-10 lg:ml:5 xl:ml-7 2xl:ml-8">
                <div className="flex flex-col w-2/6 align-top">
                  {
                    products.map(product => {
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
                      )
                    })
                  }
                </div>
                <div className="flex align-top w-4/6 flex-col ml-3 mt-3 p-3">
                  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 ml-64 text-emerald-800">
                    Transacciones
                  </h6>
                  <table className="table-auto w-full">
                    <tbody className="text-sm divide-y divide-gray-100">
                      {
                        transactions.map(transaction => {
                          return (
                            <Transaction 
                              key={transaction.id} 
                              id={transaction.id}
                              type={transaction.type}
                              receptor={transaction.receptor}
                              number={transaction.number}
                              timestamp={transaction.timestamp}
                              ammount={transaction.ammount}
                            />
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ButtonSupport />
    </div>
  );
}
