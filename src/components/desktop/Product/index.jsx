import React from 'react';
import iconCreditCards from '../../../assets/icon-credit-cards.png';

export default function Product(props) {
    const { id, name, numberProduct, balance, productSelected, setProductSelected } = props;

    const selected = productSelected === id ? true : false;
    const classSelected = selected ? 'h-40 max-h-40' : 'bg-gray-100 h-40 max-h-40';
    const textSelected = selected ? 'Producto seleccionado ' : '';

    const handleClickProduct = () => {
        setProductSelected(id);
    };

    return (
        <div onClick={() => handleClickProduct(id)} className={`bg-white ${classSelected} rounded border shadow-xl p-4 mb-4 cursor-pointer`}>
            <div className="pb-2 mb-2">
                <span className="font-bold text-lg text-gray-500">{name}</span>
                <br />
            </div>
            <div className="flex justify-between items-center">
                <img className="inline-flex items-center justify-center h-10 mr-2" src={iconCreditCards} alt="" />
                <div className="ml-8">
                    <span className="font-light text-gray-400">{numberProduct}</span>
                    <br />
                    <span className="font-bold text-xl text-green-500 flex justify-end">Saldo {balance}</span>
                </div>
            </div>
            <div className="text-right mt-2">{selected ? <span className="font-light text-sm bg-gray-100 rounded p-1 px-2 text-gray-500">{textSelected}</span> : ''}</div>
        </div>
    );
}
