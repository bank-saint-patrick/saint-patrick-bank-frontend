import React from 'react'
import iconCreditCards from '../../../assets/images/icon-credit-cards.png';


export default function Product(props) {

  const { id, name, numberProduct, balance, productSelected, setProductSelected } = props

  const selected = productSelected === id ? true : false
  const classSelected = selected ? 'bg-white h-44 max-h-72 ring-1 ring-dingley' : 'bg-gray-100 max-h-72'
  const textSelected = selected ? 'Producto seleccionado ' : ''

  const handleClickProduct = () => {
    setProductSelected(id)
  }

  return (
    <div>
      <div className='flex flex-col justify-content-stretch items-center bg-gray-100 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row'>
        
        <div className='w-1/3 sm:w-10/12 md:w-8/12 md:mr-2 lg:w-9/12 xl:w-10/12 2xl:w-full 3xl:w-96'>
          <div onClick={() => handleClickProduct(id)} className={`${classSelected} rounded border shadow-lg shadow-slate-400 p-4 h-44 transition ease-in-out delay-75 hover:translate-x-1 hover:-translate-y-1.5 justify-self-start mb-4 cursor-pointer`}>
            <div className="pb-1 mb-1">
              <span className="font-bold text-gray-500">{name}</span><br />
            </div>
            <div className="flex justify-between items-center">
              <div className='grid gid-cols-2 space-y-7'>
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

        
      </div>
    </div>
  )
}
