import React from 'react';
import Navbar from '../Navbar';
import Inputs from '../needs/Inputs';

// 'https://www.bbva.com/wp-content/uploads/2020/02/pareja-1920x1180.jpg';
// Crear un objeto json con usuarios ficticios
let data = [
  {
    dni: '0123445677',
    name: 'Ramona',
    lastname: 'Pérez Mendiola',
    phone: '(19)3557295',
    product: 'crédito AhorraMax',
    email: 'rapez08@mymail.com',
    password: 'GT56L98m900X2',
  },
];

// Crear una functión para hacer el registro ficticio

/* function register(dni,name,lastname,phone,product,email,password) {
  
  fetch('http://localhost:3000/api/v1/register', {
    method: 'POST',
    headers: {
      Accept: 'aplication/json',
      'Content-type': 'aplication/json',
    },
    body: {
      dni,
      name,
      lastname,
      phone,
      product,
      email,
      password,
    },
  });
}

  
export default function Register() {
  const [dni, setDni] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitHandler = (ev) => {
    ev.preventDefault();
    let doc = { dni, name, lastname, phone, email, password };
    if (data.filter(regis => {return doc !== regis})) {
      register(dni,name,lastname,phone,email,password);
    };
  };
*/
export default function Register() {
  const [dni, setDni] = React.useState('');
  const [firstname, setFristname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const register = (newCustomer) => {
    data = [...data, newCustomer];
  };

  const validations = (newCustomer) => {
    const response = {
      success: true,
      errors: [],
    };

    if (newCustomer.dni.length === 0) {
      response.errors.push('El campo DNI es obligatorio');
    }
    if (newCustomer.firstname.length === 0) {
      response.errors.push('El campo Nombre es obligatorio');
    }
    if (newCustomer.lastname.length === 0) {
      response.errors.push('El campo Apellido es obligatorio');
    }
    if (newCustomer.phone.length === 0) {
      response.errors.push('El campo Teléfono es obligatorio');
    }
    if (newCustomer.email.length === 0) {
      response.errors.push('El campo Email es obligatorio');
    }
    if (newCustomer.password.length === 0) {
      response.errors.push('El campo Contraseña es obligatorio');
    }

    if (response.errors.length > 0) {
      response.success = false;
    } else {
      delete response.errors;
    }

    return response;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newCustomer = {
      dni,
      firstname,
      lastname,
      phone,
      email,
      password,
    };
    const responseValidation = validations(newCustomer);
    if (responseValidation.success) {
      register(newCustomer);
    } else {
      alert(responseValidation.errors);
    }
  };

  return (
    /*<div className="wrapper flex-column h-screen">
      
      <div className="flex min-h-screen bg-gray-200">
        <div className="grid grid-rows-6 w-screen divide-y-4 divide-solid divide-gray-300 h-96 visible">
          <div className="row-span-5 h-full py-12">
            <form
              className="grid grid-rows-2 gap-1 bg-white w-5/6 h-auto shadow-md shadow-slate-400 mx-5 xs:p-20 sm:mx-14 md:mx-20 lg:mx-24"
              onSubmit={submitHandler}
            >
              <legend className="py-28 h-3/4 text-center text-2xl text-gray-500">Registrarme en la sucursal virtual</legend>
              <ul className="grid grid-rows-5 grid-cols-3 gap-2 mx-3 my-0 sm:grid-rows-5 grid-cols-2 md:grid-rows-3 grid-cols-3 lg:grid-rows-3 grid-cols-3 xl:grid-rows-3 grid-cols-3 2xl:grid-rows-3 grid-cols-3">
                <li className="flex flex-col">
                  <p className="mr-2 px-1">Nombre completo</p>
                  <input
                    type="text"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    value={name}
                    onChange={(ev) => {
                      setName(ev.target.value);
                    }}
                  />
                </li>
                <li className="flex flex-col">
                  <p className="mr-2 px-1">Apellidos completos</p>
                  <input
                    type="text"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      setLastname(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <p className="mx-2 px-1">Número de Identificación</p>
                  <input
                    type="text"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 blur:border-0 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      setDni(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <p className="mx-2 px-1">Teléfono</p>
                  <input
                    type="text"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      setPhone(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <p className="mx-2 px-1">Correo Electrónico</p>
                  <input
                    type="text"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      setEmail(ev.target.value);
                    }}
                  />
                </li>

                <li className=" flex flex-col xs:bg-red-100">
                  <p>Crear contraseña</p>
                  <input
                    type="password"
                    className="bg-yellow-200 h-8 border-2 border-zinc-300 hover:outline hover:outline-offset-2 outline-1 hover:outline-stone-500 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      setPassword(ev.target.value);
                    }}
                  />
                </li>
                <li className="py-5 w-80 col-span-2">
                  <input
                    type="submit"
                    className="bg-plantation rounded-md w-80 h-9 text-yellow-400 cursor-pointer"
                    value="Registrarme"
                  />
                </li>
              </ul>
            </form>
            */
      <div>
        <Navbar />
        <div className="bg-lime-100 full-height-conditional grid grid-cols-2">
          <div
            className="bg-teal-900 justify-center items-center bg-no-repeat bg-center bg-cover"
            id='ilustration'
          />
          <div className="bg-white flex flex-col justify-center px-10">
            <span className="text-plantation text-4xl text-center font-bold mb-2">Regístrate en nuestro<br></br>Banco Saint Patrick</span>
            <hr className="my-5" />
            <p className='text-center text-semibold'>A continuación te solicitamos que completes con tus datos los siguientes casilleros.<br></br>
              ¡Al completarlo hacé click en el botón REGISTRARME!
            </p>
            <form className="text-center px-20 mt-6 mb-6" onSubmit={submitHandler}>
              <div className="flex">
                <Inputs class="flex-col" type="text" label="Nombres" value={firstname} seter={setFristname} placeholder="Ingrese sus nombres" />
                <Inputs class="flex-col" type="text" label="Apellidos" value={lastname} seter={setLastname} placeholder="Ingrese sus apellidos" />
                
                
              </div>
              <div className="flex">
                <Inputs class="flex-col" type="text" label="DNI" value={dni} seter={setDni} placeholder="Ingrese su DNI" />  
                <Inputs class="flex-col" type="text" label="Teléfono" value={phone} seter={setPhone} placeholder="Ingrese sus teléfono" />
              </div>
              <div className="flex">
                <Inputs class="flex-col" type="text" label="Email" value={email} seter={setEmail} placeholder="Ingrese sus email" />
                <Inputs class="flex-col" type="password" label="Contraseña" value={password} seter={setPassword} placeholder="Ingrese su contraseña" />
              </div>
              <button
                type="submit"
                className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold"
              >
                Registrarme
              </button>
            </form>
            <div className="linksActions flex flex-col text-center">
              <a href="/login" className="text-slate-700 text-sm font-normal mb-5">
                Ya tengo una cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
      
  );
}
