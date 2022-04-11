import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import { useState } from 'react';

const ModalContacto = ({ token, url, modalContacto, setModalContacto, contacts, setContacts }) => {
    const [loading, setLoading] = useState(false);

    const sendContact = async (contact) => {
        console.log(contact);

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
            console.log(data);
            // setContacts(contact);
            toast.success(data.message);
            setLoading(false);
        } else {
            console.log(data);
            setLoading(false);
            toast.error('Error:' + data.message);
        }
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        const reader = new FileReader();
        reader.readAsDataURL(data.image);
        reader.onload = (event) => {
            if (data.image.type.match('image.*') && data.image.size < 1000000) {
                data.image = event.target.result;
                sendContact({ ...data, userContactID: 0 });
                loading ? toast.info('Cargando...') : setModalContacto(false);
            } else {
                toast.error('El archivo debe ser una imagen y debe tener un tamaño menor a 1MB');
                e.target.value = '';
            }
        };
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

                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                DNI
                            </label>

                            <input
                                onChange={(e) => {
                                    if (e.target.value.length === 8) {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    } else {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 8);
                                    }
                                }}
                                pattern="[0-9]{8}"
                                placeholder="Número de DNI - 8 dígitos"
                                required
                                name="idUser"
                                className="w-3/4 mx-auto py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone mt-4"
                            />
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

                        <input required placeholder="Imagen" type="file" accept="image/*" name="image" className="py-1 px-4 w-3/4 mx-auto rounded-2xl font-semibold m-4" />
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
