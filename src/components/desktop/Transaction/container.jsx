import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Transaction from './index';

const TransactionsContainer = ({ transactions, contacts, setModalContacto, setModalTransferencia }) => {
    return (
        <div className="flex align-top w-full flex-col ml-3 mt-3 p-3">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon className="fa-lg" icon={faArrowRightArrowLeft} />
                <h6 className="text-3xl leading-normal text-emerald-800 font-bold px-4">Transferencias</h6>
            </div>

            <div className="flex w-full justify-between items-center mt-8">
                <p className="text-lg font-semibold">Historial de transferencias</p>

                <button
                    onClick={() => {
                        setModalTransferencia(true);

                        window.scrollTo(0, 0);
                        document.body.classList.add('overflow-hidden');
                    }}
                    className="bg-cream-can w-max py-1 px-4 rounded-2xl font-semibold">
                    Nueva transferencia
                </button>
            </div>

            {/* Transferencias */}

            <section className=" w-full mt-8">
                <article className="text-sm">
                    {transactions.map((transaction) => {
                        return (
                            <Transaction
                                key={transaction.id}
                                id={transaction.id}
                                type={transaction.type}
                                receptor={transaction.receptor}
                                number={transaction.number}
                                timestamp={transaction.timestamp}
                                ammount={transaction.ammount}
                                img={transaction.img}
                            />
                        );
                    })}
                </article>
            </section>

            <hr />

            {/* Contactos */}

            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center my-8">
                    <h3 className="font-semibold text-lg">Contactos Guardados</h3>
                    <button
                        onClick={() => {
                            setModalContacto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-gray-300 w-max py-1 px-4 rounded-2xl font-semibold">
                        Nuevo Contacto
                    </button>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex items-center mr-8 my-4">
                            <div className="mr-6 relative">
                                <img className="w-10 h-10 object-cover rounded-full" src={contact.img} alt="" />
                            </div>
                            <b className="text-base text-yellow-500">{contact.name}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionsContainer;
