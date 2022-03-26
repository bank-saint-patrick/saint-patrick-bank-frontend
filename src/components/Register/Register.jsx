import React from 'react';
import Navbar from '../Navbar';

// Crear un objeto json con usuarios ficticios
let data = [
  {
    dni: "0123445677",
    name: "Ramona",
    lastname: "Pérez Mendiola",
    phone: "(19)3557295",
    product: "crédito AhorraMax",
    email: "rapez08@mymail.com",
    password: "GT56L98m900X2",
  },
];

// Crear una functión para hacer el registro ficticio
function register(dni,name,lastname,phone,product,email,password) {
  
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

  return (
    <div className="wrapper">
      <Navbar />
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
          </div>
        </div>
      </div>
    </div>
  );
}
