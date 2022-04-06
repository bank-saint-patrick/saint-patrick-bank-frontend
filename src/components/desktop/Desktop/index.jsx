import React, { useState, useEffect } from 'react';
import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
import Navbar from '../../Navbar';
import ButtonSupport from '../../needs/ButtonSupport';
import Product from '../Product';
import Transaction from '../Transaction';
import avatar from '../../../assets/avatar.jpeg';

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
];

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
    const result = dataTransactions.filter((transaction) => transaction.product_id === productSelected);
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
                    products.map((product) => (
                      <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        numberProduct={product.numberProduct}
                        balance={product.balance}
                        productSelected={productSelected}
                        setProductSelected={setProductSelected}
                      />
                    ))
                  }
                </div>
                <div className="flex align-top w-4/6 flex-col ml-3 mt-3 p-3">
                  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-emerald-800">
                    Transacciones
                  </h6>
                  <table className="table-auto w-full">
                    <tbody className="text-sm divide-y divide-gray-100">
                      {
                        transactions.map((transaction) => (
                          <Transaction
                            key={transaction.id}
                            id={transaction.id}
                            type={transaction.type}
                            receptor={transaction.receptor}
                            number={transaction.number}
                            timestamp={transaction.timestamp}
                            ammount={transaction.ammount}
                          />
                        ))
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
