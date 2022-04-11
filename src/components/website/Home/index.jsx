import Navbar from '../../Navbar';

import indexImg from '../../../assets/images/Group 2.png';
import { Link } from 'react-router-dom';

export default function Home() {
<<<<<<< HEAD
    return (
        <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden">
            <Navbar />

            <div className="pt-28 xl:pt-32 lg:flex items-center relative z-10 container mx-auto">
                <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                    <img tabIndex="0" aria-label="people smiling" className="mx-auto pb-10 lg:p-10" src={indexImg} alt="people smiling" />
                </div>

                <div role="contentinfo" className="w-full lg:w-1/2 lg:mx-8 px-8 h-full">
                    <p tabIndex="0" className="text-blue-stone uppercase font-bold text-xl mb-4">
                        Inicio Bancario
                    </p>
                    <h1 tabIndex="0" className="text-blue-stone text-4xl lg:text-5xl font-black mb-8">
                        Te acompañamos en todo momento
                    </h1>
                    <p tabIndex="0" className="text-lg text-gray-800 font-semibold mb-8">
                        Aprende a usar el sistema de banca en línea desde una computadora, tablet o celular. ¡Si tienes más dudas ponte en contacto con nosotros!
                    </p>
                    <Link to="/login">
                        <button tabIndex="0" className="bg-cream-can p-4 rounded-lg text-xl font-semibold hover:bg-green-900 hover:text-cream-can hover:ring-1 ring-dingley text-blue-stone my-7 lg:px-4 lg:py-3">
                            SÍ, DESEO ASESORAMIENTO
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
=======
  return (
    <div className="wrapper flex-column w-screen h-screen sm:overflow-x-hidden" >
      <Navbar />
      <div className="full-height-conditional grid grid-cols-1 my-3 bg-adult bg-no-repeat" id='adultBg'>
        <section className="container flex flex-col mx-auto items-center">
          <div className='w-full text-center ml-2 mb-1'>
            <h2 className='text-2xl text-dingley mb-3 pl-1 ml-20'>INICIO BANCARIO</h2>
            <hr className='invisible sm:visible md:visible lg:visible xl:visible'></hr>
            <div className='container grid grid-cols-4 bg-no-repeat'>
              <p className='col-span-3 ml-96 mt-10 w-auto py-20 text-lg font-bold sm:ml-80 md:ml-72 lg:ml-96 xl:44 2xl:ml-96 2xl:pl-20' id='paragraph1'>
                Aprende a usar el sistema de banca en línea desde
                una<br></br>computadora, tablet o celular. ¡Si tienes más dudas<br></br>ponte en contacto con nosotros!
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-6.png" alt='arrow not found' className='mt-5 mr-auto ml-auto hover:translate-y-3.5 ease-out duration-75'/>
              </p>
            </div>
          </div>
          
          <div className="flex flex-row bg-cream-can mb-5 p-4 h-96 rounded-sm shadow-lg shadow-slate-600 w-full h-9/11 space-x-1.5 sm:w-9/11 sm:space-x-3 md:w-3/4 md:ml-44 lg:w-3/4 lg:h-80 lg:ml-48 xl:w-2/3 xl:h-80 xl:ml-44 2xl:w-1/2 2xl:h-80 2xl:mb-12">
            <div className="w-2/4 mr-0">
              <img src={logo} alt="logo no hallado" width="24em" />
              <img src={initImg} alt='imagen de sección sin encontrar' className='mt-2 rounded-lg shadow-md shadow-zinc-500' />
            </div>
            <div className="w-2/3 text-center ml-0">
              <h3 className='text-plantation font-bold mt-5 mb-7 text-3xl sm:text-4xl md:text-4xl lg:text-5xl lg:font-semibold xl:text-5xl 2xl:text-6xl 2xl:font-semibold'>BIENVENIDO</h3>
              <p className='mt-4 text-xl text-gray-800 font-semibold' id='paragraph2'>
                ¡Te damos la bienvenida a nuestro Banco<br></br>Saint Patrick!<br></br>
                ¿Quieres que te acompañemos en tu<br></br>primer experiencia?
              </p>
              <button className='bg-plantation rounded-lg px-5 py-1 shadow-sm shadow-zinc-500 text-xl font-semibold hover:bg-green-900 hover:ring-1 ring-dingley text-white my-7 lg:px-4 lg:py-1'>
                SÍ, DESEO ASESORAMIENTO
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e
