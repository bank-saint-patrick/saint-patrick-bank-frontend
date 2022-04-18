import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import { useState } from 'react';

const ModalBorrarContacto = ({ token, url, modalBorrarContacto, setModalBorrarContacto, contacts, setContacts }) => {
    const [loading, setLoading] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const sendContact = async (contact) => {
        setLoading(true);
        const response = await fetch(`${url}/UserContact/${contact}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.text();

        if (data === 'Contacto Eliminado') {
            toast.success(data);
            setLoading(false);
            setModalBorrarContacto(false);
            document.body.classList.remove('overflow-hidden');
            setContacts(contacts.filter((contact) => Number(contact.userContactID) !== Number(contactToDelete.userContactID)));
        } else {
            setLoading(false);
            toast.error('Error:' + data.message);
        }
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        if (data.confirmDelete === contactToDelete.contactName) {
            sendContact(contactToDelete.userContactID);
            e.target.reset();
        } else {
            toast.error('Confirmación incorrecta');
            setContactToDelete(null);
            e.target.reset();
        }
    };

    return (
        <div className={modalBorrarContacto ? 'absolute z-50 w-full flex justify-center h-[75%] mt-4' : 'hidden'}>
            <div className="flex flex-col bg-white rounded-lg shadow-lg items-center overflow-auto">
                <div className="flex w-full justify-between">
                    <h3 className="m-8 text-2xl font-semibold border-b-2 border-blue-stone">Eliminar Contacto</h3>
                    <button
                        onClick={() => {
                            setModalBorrarContacto(false);
                            document.body.classList.remove('overflow-hidden');
                        }}
                        className="m-4 mx-8">
                        <FontAwesomeIcon className="fa-xl" icon={faTimes} />
                    </button>
                </div>

                <form className="flex flex-col justify-evenly grow" onSubmit={handleSubmitContact} action="">
                    <div className="flex flex-col w-5/6 mx-auto">
                        <label htmlFor="contactoID" className="text-lg font-semibold">
                            Contacto a borrar
                        </label>
                        <select
                            onChange={(e) => {
                                const contactToDelete = contacts.find((contact) => Number(contact.userContactID) === Number(e.target.value));
                                setContactToDelete(contactToDelete);
                            }}
                            required
                            defaultValue={''}
                            className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full"
                            name="contactoID"
                            id="borrarContacto">
                            <option disabled value="">
                                Selecciona un contacto
                            </option>
                            {contacts.map((contact, index) => {
                                return (
                                    <option key={index + 1} value={contact.userContactID}>
                                        {contact.contactName + ' | nro° de cuenta: ' + contact.contactProductId}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="flex flex-col w-5/6 mx-auto">
                        <label className="text-lg font-semibold" htmlFor="confirmDelete">
                            Confirmar eliminar contacto
                        </label>
                        <input
                            onChange={(e) => {
                                if (e.target.value === contactToDelete.contactName) {
                                    setIsCorrect(true);
                                } else {
                                    setIsCorrect(false);
                                }
                            }}
                            required
                            type="text"
                            className="p-2 rounded-lg my-4 border-2 border-blue-stone w-full"
                            name="confirmDelete"
                            id="confirmDelete"
                            placeholder={contactToDelete ? contactToDelete.contactName : 'Seleccione un contacto'}
                        />
                        <span className="font-semibold text-sm">*Escriba el texto que aparece en el campo</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <button disabled={isCorrect ? false : true} className={isCorrect ? 'bg-red-600 text-white w-max py-1 px-4 rounded-2xl font-semibold' : 'bg-gray-300 text-gray-700 w-max py-1 px-4 rounded-2xl font-semibold'}>
                            {loading ? 'Borrando...' : 'Borrar'}
                        </button>
                        <span className="text-base font-semibold">*Esta acción no se puede deshacer</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalBorrarContacto;
