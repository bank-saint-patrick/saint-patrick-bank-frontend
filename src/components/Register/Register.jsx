import React from "react";
import { Navbar } from "../Navbar";
import logo from "../../presets/logo.jpeg";
// import "./login.css";

// Crear un objeto json con usuarios ficticios
let data = [
  {
    dni: "0123445677",
    name: "Ramona",
    lastname: "Pérez Mendiola",
    email: "rapez08@mymail.com",
    password: "GT56L98m900X2",
  },
];

// Crear una functión para hacer el registro ficticio
/*function toDoRegisterFake() {
  data.find();
}
*/

export const Register = () => {
  // llamar a la función del registro
  // const [registerArr, setRegisterArr] = React.useState(toDoRegisterFake());
  const submitHandler = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:3000/api/v1/register", {
      method: "POST",
      headers: {
        Accept: "aplication/json",
        "Content-type": "aplication/json",
      },
      body: JSON.stringify({ dni: dni, name: name, lastname: lastname, phone: phone, password: password }),
    });
  };
  const [dni, setDni] = React.useState(0);
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [productNm, setProductNm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="wrapper">
      <Navbar />
      <div className="flex min-h-screen bg-gray-200">
        <div className="grid grid-rows-6 w-screen divide-y-4 divide-solid divide-gray-300 h-96 visible">
          <div className="grid grid-cols-4 bg-white text-sm px-3 py-2">
            <div className="flex inline-block mx-4 my-2 col-span-4" id="register_brand">
              <span className="text-custom-st-patrick-yw py-1">BANCO</span>
              <span className="text-custom-st-patrick-gn ml-1 mr-2 py-1 font-semibold">SAINT PATRICK</span>
              <a href="/login" className="ml-1">
                <img src={logo} alt="logo no encontrado" width="27em" className="pb-1" id="app-logo" />
              </a>
            </div>
          </div>
          <div className="row-span-5 h-full py-12">
            <form
              className="grid grid-rows-2 gap-1 bg-white w-5/6 h-auto shadow-md shadow-slate-400 mx-5 xs:p-20 sm:mx-14 md:mx-20 lg:mx-24"
              onSubmit={submitHandler}
            >
              <legend className="py-28 h-3/4 text-center text-2xl text-gray-500">Registrarme en la sucursal virtual</legend>
              <ul className="grid grid-rows-5 grid-cols-3 gap-2 mx-3 my-0 sm:grid-rows-5 grid-cols-2 md:grid-rows-3 grid-cols-3 lg:grid-rows-3 grid-cols-3 xl:grid-rows-3 grid-cols-3 2xl:grid-rows-3 grid-cols-3">
                <li className="flex flex-col">
                  <label htmlFor="fullnameLogup" className="mr-2 px-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="fullnameLogup"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    value={name}
                    onChange={(ev) => {
                      console.log(name);
                      setName(ev.target.value);
                    }}
                  />
                </li>
                <li className="flex flex-col">
                  <label className="mr-2 px-1">Apellidos completos</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(lastname);
                      setLastname(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <label className="mx-2 px-1">Número de Identificación</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(dni);
                      setDni(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <label className="mx-2 px-1">Teléfono</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(phone);
                      setPhone(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <label className="mx-2 px-1">Número de producto</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(productNm);
                      setProductNm(ev.target.value);
                    }}
                  />
                </li>
                <li className=" flex flex-col">
                  <label className="mx-2 px-1">Correo Electrónico</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(email);
                      setEmail(ev.target.value);
                    }}
                  />
                </li>

                <li className=" flex flex-col xs:bg-red-100">
                  <label>Crear contraseña</label>
                  <input
                    type="text"
                    className="bg-custom-st-patrick-yw h-8 rounded-md w-18 sm:w-38 md:w-56"
                    onChange={(ev) => {
                      console.log(password);
                      setPassword(ev.target.value);
                    }}
                  />
                </li>
                <li className="py-5 w-80 col-span-2">
                  <input
                    type="submit"
                    className="bg-custom-st-patrick-gn rounded-md w-80 h-9 text-white cursor-pointer"
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
};
