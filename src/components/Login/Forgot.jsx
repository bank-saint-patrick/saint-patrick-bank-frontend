import { toast } from 'react-toastify';
import { useState } from 'react';

const ForgotPassword = ({ token, url }) => {
    const [loading, setLoading] = useState(false);

    const update = (userPassword) => {
        setLoading(true);

        /* URL registro */

        const urlForgot = '/Profile/PassUpdate';

        /* Headers para el registro */

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Access-Control-Allow-Origin', '*');
        myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        myHeaders.append('Accept', '*/*');
        myHeaders.append('Authorization', `Bearer ${token}`);

        /* Data en formato JSON */
        const raw = JSON.stringify(userPassword);

        /* Request Options */
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        /* Solicitud POST */
        fetch(url + urlForgot, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status !== 'Error') {
                    toast.success('¡La contraseña se cambió correctamente!');
                    setLoading(false);
                } else {
                    toast.error(`No se pudo cambiar la contraseña, verifique sus datos`);
                    setLoading(false);
                }
            })
            .catch((error) => {
                toast.error('Ocurrió un error: ' + error.message);
                setLoading(false);
            });

        /* Fin de la solicitud POST */
    };

    const validations = (updatePassword) => {
        const response = {
            success: true,
            errors: [],
        };

        if (updatePassword.dni.length === 0) {
            response.errors.push('El campo DNI es obligatorio');
        } else if (updatePassword.dni.length !== 8) {
            response.errors.push('El DNI debe tener 8 dígitos');
        }

        if (updatePassword.currentPassword.length === 0) {
            response.errors.push('El campo Contraseña es obligatorio');
        } else if (updatePassword.currentPassword.length < 8) {
            response.errors.push('La contraseña debe tener al menos 8 caracteres');
        } else if (!/[A-Z]/.test(updatePassword.currentPassword)) {
            response.errors.push('La contraseña debe tener al menos una letra mayúscula');
        } else if (!/[a-z]/.test(updatePassword.currentPassword)) {
            response.errors.push('La contraseña debe tener al menos una letra minúscula');
        } else if (!/[0-9]/.test(updatePassword.currentPassword)) {
            response.errors.push('La contraseña debe tener al menos un número');
        } else if (!/[^a-zA-Z0-9]/.test(updatePassword.currentPassword)) {
            response.errors.push('La contraseña debe tener al menos un caracter especial');
        }

        if (updatePassword.newPassword.length === 0) {
            response.errors.push('El campo Contraseña es obligatorio');
        } else if (updatePassword.newPassword.length < 8) {
            response.errors.push('La contraseña debe tener al menos 8 caracteres');
        } else if (!/[A-Z]/.test(updatePassword.newPassword)) {
            response.errors.push('La contraseña debe tener al menos una letra mayúscula');
        } else if (!/[a-z]/.test(updatePassword.newPassword)) {
            response.errors.push('La contraseña debe tener al menos una letra minúscula');
        } else if (!/[0-9]/.test(updatePassword.newPassword)) {
            response.errors.push('La contraseña debe tener al menos un número');
        } else if (!/[^a-zA-Z0-9]/.test(updatePassword.newPassword)) {
            response.errors.push('La contraseña debe tener al menos un caracter especial');
        }

        if (updatePassword.newPassword === updatePassword.currentPassword) {
            response.errors.push('Las contraseñas no deben ser iguales');
        }

        if (response.errors.length > 0) {
            response.success = false;
        } else {
            delete response.errors;
        }

        return response;
    };

    const handleUpdatePassword = (e) => {
        e.preventDefault();

        const updatePassword = {
            dni: e.target.dni.value,
            currentPassword: e.target.password.value,
            newPassword: e.target.newPassword.value,
        };

        const validation = validations(updatePassword);

        if (validation.success) {
            update(updatePassword);
        } else {
            for (let i = 0; i < validation.errors.length; i++) {
                toast.error(validation.errors[i]);
            }
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center mt-12 mb-8 w-full">
                    <h3 className="text-3xl text-blue-stone underline">Cambia tu contraseña</h3>
                </div>
                <div className="flex justify-center sm:px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full bg-white sm:px-5 px-0 py-5 rounded-lg lg:rounded-l-none">
                            <form onSubmit={handleUpdatePassword} className="px-8 pt-6 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dni">
                                        DNI
                                    </label>
                                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="dni" type="number" placeholder="Ingresa tu DNI" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Contraseña actual
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña anterior"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="newPassword">
                                        Nueva contraseña
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="newPassword"
                                        type="text"
                                        name="newPassword"
                                        placeholder="Ingresa tu nueva contraseña"
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button className="w-full px-4 py-2 font-bold text-blue-stone bg-cream-can rounded-full hover:bg-blue-stone hover:text-cream-can transition-all duration-150 focus:outline-none focus:shadow-outline">
                                        {loading ? 'Cargando...' : 'Cambiar contraseña'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
