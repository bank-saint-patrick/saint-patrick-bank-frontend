import React from 'react'
import iconCreditCards from '../../../assets/images/icon-credit-cards.png';
import Navbar from '../../Navbar/index';

export default function Product(props) {

  const { id, name, numberProduct, balance, productSelected, setProductSelected } = props

  const selected = productSelected === id ? true : false
  const classSelected = selected ? 'bg-white h-48 max-h-48' : 'bg-gray-100 max-h-30'
  const textSelected = selected ? 'Producto seleccionado ' : ''

  const handleClickProduct = () => {
    setProductSelected(id)
  }

  return (
    <div>
      <Navbar session />
      <h5 className='text-lg text-dingley font-semibold text-center py-2'>Tus productos disponibles</h5>
      <hr></hr>
      <div className='flex flex-col justify-content-stretch items-center bg-gray-100 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row'>
        <div className='flex flex-col w-1/3 h-screen shadow-xl shadow-slate-400 bg-white absm:w-2/3 xsm:w-2/3 lg:w-48 xl:w-2/12 2xl:1/12'>
          <h1 className='text-center mt-9'>Hello World</h1>
        </div>
        <div className='w-1/3 sm:w-10/12 md:w-8/12 md:mr-2 lg:w-9/12 xl:w-10/12 2xl:w-full 3xl:w-96'>
          <div onClick={() => handleClickProduct(id)} className={`${classSelected} rounded border shadow-lg shadow-slate-400 transition ease-in-out delay-75  hover:translate-x-1 hover:-translate-y-1.5 p-4 justify-self-start mb-4 cursor-pointer`} id="whBox">
            <div className="pb-1 mb-1">
              <span className="font-bold text-gray-500">{name}</span><br />
            </div>
            <div className="flex justify-between items-center">
              <div className='grid gid-cols-2 space-y-7'>
                <span className='font-semibold'>Cuenta corriente</span>
                <img className="inline-flex items-center justify-center h-10 mr-2" src={iconCreditCards} alt="" />
              </div>

              <div className='mt-3'>
                <span className="font-light text-gray-400">{numberProduct}</span><br />
                <span className="font-bold text-xl text-green-500 flex justify-end">Saldo {balance}</span>
              </div>
            </div>
            <div className="text-right mt-0">
              {(selected) ? <span className="font-light text-sm bg-gray-100 rounded p-1 px-2 text-gray-500">{textSelected}</span> : ''}
            </div>
          </div>
          <div onClick={() => handleClickProduct(id)} className={`${classSelected} rounded border shadow-lg shadow-slate-400 p-4 transition ease-in-out delay-75 hover:translate-x-1 hover:-translate-y-1.5 justify-self-start mb-4 cursor-pointer`} id="whBox">
            <div className="pb-1 mb-1">
              <span className="font-bold text-gray-500">{name}</span><br />
            </div>
            <div className="flex justify-between items-center">
              <div className='grid gid-cols-2 space-y-7'>
                <span className='font-semibold'>Cuenta de Ahorros</span>
                <img className="inline-flex items-center justify-center h-10 mr-2" src={iconCreditCards} alt="" />
              </div>

              <div className='mt-3'>
                <span className="font-light text-gray-400">{numberProduct}</span><br />
                <span className="font-bold text-xl text-green-500 flex justify-end">Saldo {balance}</span>
              </div>
            </div>
            <div className="text-right mt-0">
              {(selected) ? <span className="font-light text-sm bg-gray-100 rounded p-1 px-2 text-gray-500">{textSelected}</span> : ''}
            </div>
          </div>
        </div>

        <div className='container mx-auto my-5 p-1 w-1/3 overflow-auto bg-white shadow-lg shadow-slate-500 sm:w-9/12 sm:text-sm sm:mx-1 sm:font-semibold sm:h-96 md:w-3/4 md:h-80 md:mx-1 md:table-auto lg:w-7/12 lg:h-96 xl:w-9/12 2xl:w-11/12'>
          <h5 className='border border-slate-600 text-xl pl-1 text-white bg-desert font-semibold'>Transacciones</h5>
          <table className='w-full overflow-auto'>
            <thead>
              <tr>
                
              </tr>
            </thead>

            <tbody className=''>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Mariela Mendiola</td>
                <td>63435448</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm  font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>

              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>
              <tr className='space-x-3 space-y-3.5'>
                <td>Juan González</td>
                <td>790730</td>
                <td className='text-sm font-semibold text-dingley grid grid-rows-2'>723233<span>↓ Recibido</span></td>
              </tr>

            </tbody>
          </table>
        </div>
          
      </div>
    </div>
  )
}
