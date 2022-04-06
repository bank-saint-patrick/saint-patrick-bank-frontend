import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';

import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
import Navbar from '../../Navbar';
import ButtonSupport from '../../needs/ButtonSupport';
import Product from '../Product';
import Transaction from '../Transaction';

/* alessandro's work begins */

import sir1 from '../../../assets/images/transactions/sir1.jpeg';
import sir2 from '../../../assets/images/transactions/sir2.jpeg';
import sir3 from '../../../assets/images/transactions/sir3.jpeg';

import mrs1 from '../../../assets/images/transactions/mrs1.jpeg';
import mrs2 from '../../../assets/images/transactions/mrs2.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './../SubMenu/index';

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
        cbu: '0102-0102-0102-0102-0102',
    },
    {
        id: 2,
        name: 'Pedro Álvarez',
        img: sir2,
        cbu: '0102-0102-0102-0102-5438',
    },
    {
        id: 3,
        name: 'José Cárdenas',
        img: sir3,
        cbu: '0102-0102-0102-0102-5438',
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

                <div className="flex sm:w-2/3 md:w-3/4 lg:w-4/5">
                    <div className="flex w-full bg-gray-100 rounded p-4">
                        <Routes>
                            <Route path="/inicio" element={<h1 className="text-4xl uppercase w-full h-full flex x items-center justify-center">Inicio</h1>} />

                            <Route
                                path="/productos"
                                element={
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full">
                                            <h2 className="text-xl">Tus productos disponibles</h2>

                                            <div className="flex flex-col lg:flex-row w-full justify-around align-top my-8">
                                                {products.map((product) => {
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
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full px-8">
                                            <h3 className="text-xl text-blue-stone">Transacciones</h3>

                                            <section className=" w-full mt-8">
                                                <article className="text-sm ">
                                                    {transactions.map((transaction) => {
                                                        return (
                                                            <Transaction
                                                                key={transaction.id}
                                                                id={transaction.id}
                                                                type={transaction.type}
                                                                receptor={transaction.receptor}
                                                                number={transaction.number}
                                                                timestamp={transaction.timestamp}
                                                                ammount={transaction.ammount}
                                                                img={transaction.img}
                                                            />
                                                        );
                                                    })}
                                                </article>
                                            </section>
                                        </div>
                                    </div>
                                }
                            />

                            <Route
                                path="/transferencias"
                                element={
                                    <div className="flex align-top w-full flex-col ml-3 mt-3 p-3">
                                        <div className="flex items-center mb-4">
                                            <FontAwesomeIcon className="fa-lg" icon={faArrowRightArrowLeft} />
                                            <h6 className="text-3xl leading-normal text-emerald-800 font-bold px-4">Transferencias</h6>
                                        </div>

                                        <div className="flex w-full justify-between items-center mt-8">
                                            <p className="text-lg font-semibold">Historial de transferencias</p>

                                            <button
                                                onClick={() => {
                                                    setModalTransferencia(true);

                                                    window.scrollTo(0, 0);
                                                    document.body.classList.add('overflow-hidden');
                                                }}
                                                className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">
                                                Nueva transferencia
                                            </button>
                                        </div>

                                        <section className=" w-full mt-8">
                                            <article className="text-sm">
                                                {transactions.map((transaction) => {
                                                    return (
                                                        <Transaction
                                                            key={transaction.id}
                                                            id={transaction.id}
                                                            type={transaction.type}
                                                            receptor={transaction.receptor}
                                                            number={transaction.number}
                                                            timestamp={transaction.timestamp}
                                                            ammount={transaction.ammount}
                                                            img={transaction.img}
                                                        />
                                                    );
                                                })}
                                            </article>
                                        </section>

                                        <hr />

                                        <div className="flex flex-col">
                                            <div className="flex w-full justify-between items-center my-8">
                                                <h3 className="font-semibold text-lg">Contactos Guardados</h3>
                                                <button
                                                    onClick={() => {
                                                        setModalContacto(true);

                                                        window.scrollTo(0, 0);
                                                        document.body.classList.add('overflow-hidden');
                                                    }}
                                                    className="bg-gray-300 w-max py-1 px-4 rounded-2xl font-semibold">
                                                    Nuevo Contacto
                                                </button>
                                            </div>

                                            <div className="flex flex-col md:flex-row flex-wrap">
                                                {contacts.map((contact) => (
                                                    <div key={contact.id} className="flex items-center mr-8 my-4">
                                                        <div className="mr-6 relative">
                                                            <img className="w-10 h-10 object-cover rounded-full" src={contact.img} alt="" />
                                                        </div>
                                                        <b className="text-base text-yellow-500">{contact.name}</b>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </Routes>
                    </div>
                </div>

                <div className={modalTransferencia ? 'absolute z-50 w-full flex justify-center h-[85%] mt-4' : 'hidden'}>
                    <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                        <div className="flex w-full justify-between">
                            <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nueva Transferencia</h3>
                            <button
                                onClick={() => {
                                    setModalTransferencia(false);
                                    document.body.classList.remove('overflow-hidden');
                                }}
                                className="m-4 mx-8">
                                <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                            </button>
                        </div>

                        <form
                            className="grow"
                            onSubmit={(e) => {
                                e.preventDefault();

                                const data = Object.fromEntries(new FormData(e.target).entries());
                                const transaccion = { ...data, transactionTypeID: data.productIDOrigin === 'Cuenta corriente' ? 1 : 2, id: transactions.length + 1 };

                                setTransactions([...transactions, transaccion]);
                            }}
                            action="">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                        Cuenta
                                    </label>

                                    <select defaultValue={''} required className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full" name="product_id" id="">
                                        <option disabled value={''}>
                                            Selecciona una cuenta
                                        </option>
                                        {dataProducts.map((product) => {
                                            return (
                                                <option key={product.id} value={product.id}>
                                                    {product.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                        Beneficiario
                                    </label>

                                    <select
                                        onChange={(e) => {
                                            if (e.target.value === 'otro') {
                                                const select = document.querySelector('#productIDDestination');
                                                const input = document.createElement('input');
                                                input.setAttribute('type', 'text');
                                                input.setAttribute('name', 'receptor');
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
                                        {contacts.map((contact) => {
                                            return (
                                                <option key={contact.id} value={contact.id}>
                                                    {contact.name}
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
                                    <input placeholder="$100" required type="number" name="ammount" id="monto" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />

                                    <div className="flex flex-col w-full justify-between items-center mt-4">
                                        <label htmlFor="monto" className="text-lg font-semibold">
                                            Concepto
                                        </label>
                                        <textarea maxLength={150} placeholder="Descripción breve" required name="concepto" id="concepto" className="resize-none w-full p-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center my-5">
                                <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">Continuar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={modalContacto ? 'absolute z-50 w-full flex justify-center h-[75%] mt-4' : 'hidden'}>
                    <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                        <div className="flex w-full justify-between">
                            <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nuevo Contacto</h3>
                            <button
                                onClick={() => {
                                    setModalContacto(false);
                                    document.body.classList.remove('overflow-hidden');
                                }}
                                className="m-4 mx-8">
                                <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                            </button>
                        </div>

                        <form
                            className="flex flex-col justify-evenly grow"
                            onSubmit={(e) => {
                                e.preventDefault();

                                const data = Object.fromEntries(new FormData(e.target).entries());

                                const reader = new FileReader();

                                reader.readAsDataURL(data.img);

                                reader.onload = (e) => {
                                    data.img = e.target.result;
                                    const contact = { ...data, id: contacts.length + 1 };
                                    setContacts([...contacts, contact]);
                                };
                            }}
                            action="">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                        Nombres completos
                                    </label>

                                    <input placeholder="Nombres completos" required type="text" name="name" className="w-3/4 mx-auto py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone mt-4" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                    Subir Imagen
                                </label>

                                <input placeholder="Imagen" required type="file" name="img" className="py-1 px-4 w-3/4 mx-auto rounded-2xl font-semibold m-4" />
                            </div>

                            <div className="flex flex-col justify-between items-center">
                                <div className="flex flex-col justify-between items-center">
                                    <label htmlFor="monto" className="text-lg font-semibold">
                                        CBU / CVU / Alias
                                    </label>

                                    <input placeholder="CBU/CVU/Alias" required type="number" name="cbu" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">Continuar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={modalTransferencia || modalContacto ? 'overlay absolute h-full w-full grid place-content-center bg-black opacity-50' : 'hidden'}></div>
            </div>

            <ButtonSupport />
        </div>
    );
}
=======
import { validateSession } from '../../utils/auth';
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

export default function Desktop() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(0);
  const [transactions, setTransactions] = useState([]);

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

  useEffect(() => {
    const result = dataTransactions.filter(transaction => transaction.product_id === productSelected);
    setTransactions(result);
  }, [productSelected]);

  if (loading) {
    return (<Loading />);
  }

  return (
    <div className="wrapper flex-column h-screen">
      <Navbar session />
      <div className="grid grid-cols-1">
        <div className="container mx-auto flex flex-col mt-3">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
              Tus productos disponibles
            </h6>
          </div>
          <div className="flex w-full">
            <div className="flex w-1/6 px-2">
              <div className="w-full flex flex-col text-sm py-4 px-2 text-gray-500">
                <div className="flex hover:bg-gray-100 py-1 px-2">
                <div className="w-full">
                  <img alt="..." src={avatar} className="shadow-lg rounded-full" />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-blueGray-700">Romina Hadid</h5>
                  </div>
                </div>
                </div>
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
            </div>
            <div className="flex w-5/6">
              <div className="flex w-full bg-gray-100 rounded p-4">
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
                  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
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
>>>>>>> 1f281368acc7dfb00a632a26715d5c7626922d82
