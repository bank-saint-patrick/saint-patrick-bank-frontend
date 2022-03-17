import logo from '../presets/logo.jpeg';
import { TodoProvider } from '../context/TodoProvider';
import { useContext } from 'react';

export const Home = () => {
  return (
    <div className="flex min-h-screen">
      <ul className="grid grid-rows-6 grid-cols-6 space-x-0.5 w-screen visible xs:overflow-x-hidden sm:visible md:invisible lg:invisible xl:invisible 2xl:invisible">
        <li className="flex-row bg-gray-100 shadow-xl shadow-slate-300 h-16">
          <button className="rounded-2xl bg-custom-st-patrick-ltgn w-9 h-9 hover:ring-2 ring-zinc-300 mx-2 my-3 outline-1 outline-offset-1">
            <img src="https://img.icons8.com/ios/24/000000/menu--v1.png" className="px-2"/>
          </button>
        </li>
        <li className="bg-gray-100 shadow-xl shadow-slate-300 h-16 col-span-5 grid grid-cols-2 text-sm">
        <a href='/#'><img src={logo} alt="logo no encontrado" width="24em" className='mx-10 my-3' id='app-logo' /></a>
          <h5 className='my-2 brand'><span className='text-custom-st-patrick-yw'>BANCO</span> <span className='text-custom-st-patrick-gn'>SAINT PATRICK</span></h5>
        </li>
        
      </ul>
      <ul className="grid grid-cols-12 grid-rows-3 gap-3 absolute w-11/12 bg-pink-200 mx-6 invisible md:visible overflow-x-hidden gap-5 justify-center space-x-3 pr-5 lg:visible overflow-x-hidden xl:visible 2xl:visible">
        <li className="w-full col-span-3  my-1"><a href="/#" className='flex flex-row text-xs brand py-2 px-1'>BANCO SAINT PATRICK<img src={logo} alt="logo no encontrado" width="33em" className='px-2 mr-2' id='app-logo' /></a></li>
        <li className='w-fit my-3'><a href="/#" className='text-sm p-1'>Inicio Bancario</a></li>
        <li className='w-fit my-3'><a href="/#" className='text-sm'>Beneficios</a></li>
        <li className='w-fit my-3'><a href="/#" className='text-sm md:ml-3'>Cajeros</a></li>
        <li className='w-fit col-span-2 my-3'><a href='/#' className='text-sm p-2 md:ml-1'>Sobre Nosotros</a></li>
        <li className="col-span-4 bg-gray-300 w-fit my-3">
          <div className='flex flex-row p-3'>
            <span className="mr-1 text-sm">Sucursal Virtual</span>
            <button className='bg-custom-st-patrick-ltgn rounded-md'>
              <a href="/#" className='text-custom-st-patrick-yw font-semibold p-1 md:p-2'>Ingresa</a>
            </button>
          </div>
        </li>
      </ul>    
    </div>
  );
};