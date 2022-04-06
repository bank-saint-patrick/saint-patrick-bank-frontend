import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalContacto = ({ modalContacto, setModalContacto, contacts, setContacts }) => {
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

                <form
                    className="flex flex-col justify-evenly grow"
                    onSubmit={(e) => {
                        e.preventDefault();

                        const data = Object.fromEntries(new FormData(e.target).entries());

                        const reader = new FileReader();

                        reader.readAsDataURL(data.img);

                        reader.onload = (e) => {
                            data.img = e.target.result;
                            const contact = { ...data, id: contacts.length + 1 };
                            setContacts([...contacts, contact]);
                        };
                    }}
                    action="">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                                Nombres completos
                            </label>

                            <input placeholder="Nombres completos" required type="text" name="name" className="w-3/4 mx-auto py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone mt-4" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mt-3 text-center" htmlFor="">
                            Subir Imagen
                        </label>

                        <input placeholder="Imagen" required type="file" name="img" className="py-1 px-4 w-3/4 mx-auto rounded-2xl font-semibold m-4" />
                    </div>

                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-between items-center">
                            <label htmlFor="monto" className="text-lg font-semibold">
                                CBU / CVU / Alias
                            </label>

                            <input placeholder="CBU/CVU/Alias" required type="number" name="cbu" className="w-full py-1 px-4 rounded-2xl font-semibold border-2 border-blue-stone m-4" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalContacto;
