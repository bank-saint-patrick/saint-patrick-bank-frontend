import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import { useState } from 'react';

const ModalContacto = ({ token, url, modalContacto, setModalContacto, contacts, setContacts, userData }) => {
    const [loading, setLoading] = useState(false);

    const sendContact = async (contact) => {
        setLoading(true);
        const response = await fetch(`${url}/UserContact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(contact),
        });

        const data = await response.json();

        if (data.status === 'Success') {
            setContacts([...contacts, contact]);
            toast.success(data.message);
            setLoading(false);
            setTimeout(() => {
                setModalContacto(false);
                window.location.reload();
            }, 1500);
        } else {
            setLoading(false);
            toast.error('Error:' + data.message);
        }
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        if (Number(data.contactProductID) < 1) {
            toast.error('El número de producto no es válido');
            return;
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(data.image);
            reader.onload = (event) => {
                if (event.target.result !== 'data:') {
                    if (data.image.type.match('image.*') && data.image.size < 1000000) {
                        if (userData) {
                            data.image = event.target.result;
                            sendContact({ ...data, idUser: userData.dni });
                            loading ? toast.info('Cargando...') : setModalContacto(false);
                        } else {
                            toast.error('Error: No se pudo obtener el usuario');
                        }
                    } else {
                        toast.error('El archivo debe ser una imagen y debe tener un tamaño menor a 1MB');
                        e.target.value = '';
                    }
                } else {
                    if (userData) {
                        data.image = 'string';
                        sendContact({ ...data, idUser: userData.dni });
                        loading ? toast.info('Cargando...') : setModalContacto(false);
                    } else {
                        toast.error('Error: No se pudo obtener el usuario');
                    }
                }
            };
        }
    };

    return (
        <div className={modalContacto ? 'absolute z-50 w-full flex justify-center h-[75%] mt-4' : 'hidden'}>
            <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                <div className="flex w-full justify-between">
                    <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Nuevo Contacto</h3>
                    <button
                        onClick={() => {
                            setModalContacto(false);
                            document.body.classList.remove('overflow-hidden');
                        }}
                        className="m-4 mx-8">
                        <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                    </button>
                </div>

                <form className="flex flex-col justify-evenly grow" onSubmit={handleSubmitContact} action="">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                Nombres completos
                            </label>

                            <input placeholder="Nombres completos" required type="text" name="contactName" className="w-3/4 mx-auto py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone mt-4" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-between items-center">
                            <label htmlFor="monto" className="text-lg font-semibold">
                                CBU / CVU / Alias
                            </label>

                            <input placeholder="Nro° para transferir" required type="number" name="contactProductID" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                            Subir Imagen
                        </label>

                        <input placeholder="Imagen" type="file" accept="image/*" name="image" className="py-1 px-4 w-3/4 mx-auto rounded-2xl font-semibold m-4" />
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">{loading ? 'Creando...' : 'Guardar'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalContacto;
