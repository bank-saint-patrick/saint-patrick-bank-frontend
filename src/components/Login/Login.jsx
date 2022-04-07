import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';
import Input from '../needs/Input';
import Desktop from '../desktop/Desktop';
import './login.css';

import { toast } from 'react-toastify';

const backgroundImage = 'https://www.bbva.com/wp-content/uploads/2020/02/pareja-1920x1180.jpg';

export default function Login() {
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState({});

    useEffect(() => {
        const sessionStorageGet = JSON.parse(sessionStorage.getItem('session'));
        if (sessionStorageGet) {
            setSession(sessionStorage);
        }
    }, []);

    const login = (user) => {
        /* URL registro */

        const url = 'http://ec2-3-139-57-252.us-east-2.compute.amazonaws.com:5000/api/Authenticate/login';

        /* Headers para el registro */

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Access-Control-Allow-Origin', '*');
        myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        myHeaders.append('Accept', '*/*');

        /* Data en formato JSON */
        const raw = JSON.stringify(user);

        /* Request Options */
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        /* Solicitud POST */
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.token) {
                    toast.success('¡Inicio de sesión exitoso!');
                    setSession(result);
                    const sessionAuth = {
                        token: result.token,
                        timestamp: Date.now(),
                        expiration: '60',
                    };
                    sessionStorage.setItem('session', JSON.stringify(sessionAuth));
                } else {
                    toast.error(`No se pudo iniciar sesión verifique sus datos`);
                }
            })
            .catch((error) => toast.error(error.message));
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
            alert(responseValidation.errors);
        }
    };

    if (session.token) {
        return <Desktop />;
    }

    return (
        <div className="wrapper flex-column h-screen">
            <Navbar />
            <div className="bg-lime-100 full-height-conditional flex w-full">
                <div className="hidden md:block md:w-1/2 bg-teal-900 justify-center items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }} />

                <div className="bg-white flex flex-col w-full md:w-1/2 justify-center px-10">
                    <span className="text-plantation text-4xl text-center font-bold mb-2">Bienvenido a tu</span>
                    <span className="text-plantation text-4xl text-center font-light mb-4">banca en línea</span>
                    <hr className="my-5" />
                    <form className="text-center lg:px-20 mb-6" onSubmit={submitHandler}>
                        <Input class="flex-col" type="text" label="DNI" value={dni} seter={setDni} placeholder="Ingrese su DNI" />
                        <Input class="flex-col" type="password" label="Contraseña" value={password} seter={setPassword} placeholder="Ingrese su contraseña" />
                        <button
                            type="submit"
                            className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold">
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
