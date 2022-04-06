import React from 'react';
import Navbar from '../Navbar';
import Input from '../needs/Input';

// Crear un objeto json con usuarios ficticios
let data = [
    {
        dni: '0123445677',
        firstName: 'Ramona',
        lastName: 'Pérez Mendiola',
        email: 'rapez08@mymail.com',
        phoneNumber: '(19)3557295',
        password: 'GT56L98m900X2',
    },
];

export default function Register() {
<<<<<<< HEAD
    const [dni, setDni] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');

    const register = (newCustomer) => {
        data = [...data, newCustomer];
=======
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
>>>>>>> 1f281368acc7dfb00a632a26715d5c7626922d82
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

        data.filter((customer) => {
            if (customer.dni === newCustomer.dni) {
                response.errors.push('El DNI ya existe');
            }
            if (customer.email === newCustomer.email) {
                response.errors.push('El Email ya existe');
            }

            return false;
        });

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
        <div className="wrapper flex-column h-screen">
            <Navbar />
            <div className="bg-lime-100 full-height-conditional grid grid-cols-2">
                <div className="bg-teal-900 justify-center items-center bg-no-repeat bg-center bg-cover" id="ilustration" />
                <div className="bg-white flex flex-col justify-center px-10">
                    <span className="text-plantation text-4xl text-center font-bold mb-2">
                        Regístrate en nuestro<br></br>Banco Saint Patrick
                    </span>
                    <hr className="my-5" />
                    <p className="text-center text-semibold">
                        A continuación te solicitamos que completes con tus datos los siguientes casilleros.<br></br>
                        ¡Al completarlo hacé click en el botón REGISTRARME!
                    </p>
                    <form className="text-center px-20 mt-6 mb-6" onSubmit={submitHandler}>
                        <div className="flex">
                            <Input class="flex-col" type="text" label="Nombres" value={firstname} seter={setFirstname} placeholder="Ingrese sus nombres" />
                            <Input class="flex-col" type="text" label="Apellidos" value={lastname} seter={setLastname} placeholder="Ingrese sus apellidos" />
                        </div>
                        <div className="flex">
                            <Input class="flex-col" type="text" label="DNI" value={dni} seter={setDni} placeholder="Ingrese su DNI" />
                            <Input class="flex-col" type="text" label="Teléfono" value={phone} seter={setPhone} placeholder="Ingrese sus teléfono" />
                        </div>
                        <div className="flex">
                            <Input class="flex-col" type="text" label="Email" value={email} seter={setEmail} placeholder="Ingrese sus email" />
                            <Input class="flex-col" type="password" label="Contraseña" value={password} seter={setPassword} placeholder="Ingrese su contraseña" />
                        </div>
                        <button
                            type="submit"
                            className="boton bg-plantation border-2 border-white hover:bg-white hover:border-2 hover:border-teal-700 text-white hover:text-teal-700 hover:font-semibold mx-auto mt-5 w-3/4 md:w-1/2 p-1 rounded-xl py-3 font-bold">
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
