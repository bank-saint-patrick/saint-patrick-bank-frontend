import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Calendario = ({ direction, setFechaSeleccionada, setConfirmacion }) => {
    /* Hooks */

    const [fecha, setFecha] = useState({
        fecha: '',
        horario: '',
    });
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);

    const navigateTo = useNavigate();

    /* Funciones */

    const getMonthName = (month) => {
        switch (month) {
            case 0:
                return 'Enero';
            case 1:
                return 'Febrero';
            case 2:
                return 'Marzo';
            case 3:
                return 'Abril';
            case 4:
                return 'Mayo';
            case 5:
                return 'Junio';
            case 6:
                return 'Julio';
            case 7:
                return 'Agosto';
            case 8:
                return 'Septiembre';
            case 9:
                return 'Octubre';
            case 10:
                return 'Noviembre';
            case 11:
                return 'Diciembre';
            default:
                return 'Error';
        }
    };

    /* Extracción de datos */

    const horarios = [];

    for (let i = 9; i < 15; i++) {
        horarios.push(
            {
                id: i,
                horario: `${i}:00 a ${i}:30`,
            },
            {
                id: i + 1,
                horario: `${i}:30 a ${i + 1}:00`,
            }
        );
    }

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    /* Seleccionar fecha y horario */

    const handleSelectDay = (index) => {
        setSelectedDay(index);
        setSelectedHour(null);

        const nameOfDay = new Date(year, month, index).toLocaleString('es-ES', { weekday: 'long' });
        setFecha({ fecha: `${nameOfDay} ${index} de ${getMonthName(month).toLowerCase()} del ${year}` });
    };

    const handleSelectHorario = (horario) => {
        setSelectedHour(horario.horario);

        setFecha({
            fecha: fecha.fecha,
            horario: horario.horario,
        });
    };

    const confirmarFecha = () => {
        const session = JSON.parse(sessionStorage.getItem('session'));

        if (fecha.fecha && fecha.horario) {
            if (session) {
                toast.success(`Fecha seleccionada: ${fecha.fecha} a las ${fecha.horario}`);
                setConfirmacion(true);
                setFechaSeleccionada(fecha);
            } else {
                toast.error('Debes iniciar sesión para poder agendar una cita');
                navigateTo('/login');
            }
        } else {
            toast.error('Debes seleccionar una fecha');
        }
    };

    return (
        <>
            <section>
                <h2 className="text-3xl text-center font-bold py-8 pb-16">Mostrando los horarios de la sucursal más cercana</h2>
            </section>

            <div className="flex flex-col md:flex-row items-center border-b pb-8 border-gray-100">
                <h2 className="text-xl whitespace-nowrap text-center font-bold">Dirección ingresada:</h2>
                <section className="w-full px-12 m-8 md:m-0 flex flex-col md:flex-row items-center justify-around">
                    <p className="text-xl flex flex-col w-full items-center py-4 md:block md:py-2 lg:w-auto">
                        Calle: <b className="font-bold text-blue-stone">{direction.calle ? direction.calle : 'Sin datos'}</b>
                    </p>
                    <p className="text-xl flex flex-col w-full items-center py-4 md:block md:py-2 lg:w-auto">
                        Localidad: <b className="font-bold text-blue-stone">{direction.localidad ? direction.localidad : 'Sin datos'}</b>
                    </p>
                    <p className="text-xl flex flex-col w-full items-center py-4 md:block md:py-2 lg:w-auto">
                        Provincia: <b className="font-bold text-blue-stone">{direction.provincia ? direction.provincia : 'Sin datos'}</b>
                    </p>
                </section>
            </div>

            <div className="flex flex-col md:flex-row items-center border-t border-indigo-800">
                <h2 className="text-xl whitespace-nowrap text-center font-bold pt-8 md:pt-0">Sucursal más cercana:</h2>
                <section className="w-full py-12 flex items-center justify-around">
                    <p className="text-xl font-semibold">
                        Banco Saint Patrick Sede - <b className="font-bold text-indigo-500 border-b-2 border-indigo-500">{direction.localidad ? direction.localidad + ' Norte' : 'Central'}</b>
                    </p>
                </section>
            </div>

            <section className="w-full">
                <h2 className="text-3xl text-center font-bold py-8 pt-16">¡Selecciona una fecha y horario!</h2>{' '}
                <div className="flex flex-col items-center justify-center">
                    <span className="p-8 font-semibold text-blue-stone text-xl text-center inline-block w-full">
                        Seleccionado: <b className="text-indigo-600">{fecha ? fecha.fecha : 'Selecciona una fecha'}</b> - Horario <b className="text-indigo-600">{fecha.horario}</b>
                    </span>

                    <button onClick={confirmarFecha} className="text-xl font-bold p-3 rounded-md bg-blue-stone text-white">
                        Confirmar
                    </button>
                </div>
            </section>

            <div className="flex items-end justify-center py-8 px-4">
                <div className="2xl:w-1/3 xl:w-1/2 lg:w-3/5 sm:w-4/5 w-full shadow-lg">
                    <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t">
                        <div className="px-4 flex items-center justify-between">
                            <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                                {getMonthName(month)} {year}
                            </h1>
                        </div>
                        <div className="flex items-center justify-between pt-12 overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="grid grid-cols-7">
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Dom</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Lun</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Mar</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Mie</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Jue</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Vie</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="w-full flex justify-center">
                                                <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Sab</p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="grid grid-cols-7 w-full">
                                        {Array(firstDay > 0 ? firstDay : 0)
                                            .fill(0)
                                            .map((_, index) => (
                                                <td key={index} className="pt-6">
                                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                                </td>
                                            ))}

                                        {Array(daysInMonth)
                                            .fill(0)
                                            .map((_, index) => (
                                                <td
                                                    onClick={() => {
                                                        handleSelectDay(index + 1);
                                                    }}
                                                    key={index}
                                                    className={selectedDay === index + 1 ? 'rounded-full bg-indigo-600' : ''}>
                                                    <div className="py-5 cursor-pointer flex w-full justify-center">
                                                        <p className={selectedDay === index + 1 ? 'text-2xl font-bold text-center text-white' : 'text-2xl font-bold text-center text-gray-600 dark:text-gray-100'}>{index + 1}</p>
                                                    </div>
                                                </td>
                                            ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    <h2 className="text-2xl text-center font-bold h-1/6 flex items-center justify-center">Selecciona un horario</h2>
                    <div className="grid grid-cols-2 grid-rows-6 h-5/6">
                        {horarios.map((horario, index) => (
                            <div
                                key={index}
                                className={`${selectedHour === horario.horario ? 'bg-blue-stone text-white' : 'bg-gray-200 text-gray-600'} p-4 rounded-md cursor-pointer`}
                                onClick={() => {
                                    handleSelectHorario(horario);
                                }}>
                                <p className="text-2xl font-bold text-center">{horario.horario}</p>

                                <p className="text-xl font-bold text-center">{selectedHour === horario.horario ? 'Seleccionado' : 'Disponible'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Calendario);
