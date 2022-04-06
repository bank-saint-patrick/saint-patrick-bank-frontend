import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Input from '../needs/Input';
import Desktop from '../desktop/Desktop';
import './login.css';

const backgroundImage = 'https://www.bbva.com/wp-content/uploads/2020/02/pareja-1920x1180.jpg';

// Crear un objeto json con usuarios ficticios
const data = [
  {
    dni: '271368712',
    password: 'qwerty123',
  },
];
const sessionSuccess = {
  token: 'abcdef123456',
  timestamp: Date.now(),
  expiration: '60',
};

export default function Login() {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState({});

  useEffect(() => {
    const sessionStorage = JSON.parse(localStorage.getItem('session'));
    if (sessionStorage) {
      setSession(sessionStorage);
    }
  }, []);

  const login = (user) => {
    const sessionReceive = data.find((_user) => {
      if (_user.dni === user.dni && _user.password === user.password) {
        return true;
      }
      return false;
    });

    if (!sessionReceive) {
      // eslint-disable-next-line no-alert
      alert('Usuario o contraseña incorrectos');
    } else {
      localStorage.setItem('session', JSON.stringify(sessionSuccess));
      setSession(sessionSuccess);
    }
  };

  const validations = (user) => {
    const response = {
      success: true,
      errors: [],
    };

    if (user.dni.length === 0) {
      response.errors.push('El campo DNI es obligatorio');
    }
    if (user.password.length === 0) {
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
    const user = { dni, password };
    const responseValidation = validations(user);

    if (responseValidation.success) {
      login(user);
    } else {
      // eslint-disable-next-line no-alert
      alert(responseValidation.errors);
    }
  };

  if (session !== false && typeof session.token !== 'undefined') {
    return (
      <Desktop />
    );
  }

  return (
    <div className="wrapper flex-column h-screen">
      <Navbar />
      <div className="bg-lime-100 full-height-conditional grid grid-cols-2">
        <div
          className="bg-teal-900 justify-center items-center bg-no-repeat bg-center bg-cover"
          // eslint-disable-next-line object-curly-spacing
          style={{ backgroundImage: `url(${backgroundImage})`}}
        />
        <div className="bg-white flex flex-col justify-center px-10">
          <span className="text-plantation text-4xl text-center font-bold mb-2">Bienvenido a tu</span>
          <span className="text-plantation text-4xl text-center font-light mb-4">banca en línea</span>
          <hr className="my-5" />
          <form className="text-center px-20 mb-6" onSubmit={submitHandler}>
            <Input class="flex-col" type="text" label="DNI" value={dni} seter={setDni} placeholder="Ingrese su DNI" />
            <Input class="flex-col" type="password" label="Contraseña" value={password} seter={setPassword} placeholder="Ingrese su contraseña" />
            <button
              type="submit"
              className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold"
            >
              Ingresar a tu banca
            </button>
          </form>
          <div className="linksActions flex flex-col text-center">
            <a href="/" className="text-slate-700 text-sm font-normal mb-5">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="/register" className="text-slate-700 text-sm font-normal">
              ¿Aun no estás registrado?
              <span className="text-teal-700 text-base font-semibold"> registrarme</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
