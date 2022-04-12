import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Transaction from './index';

const TransactionsContainer = ({ transactions, url, token, contacts, setModalContacto, setModalTransferencia, setModalBorrarContacto }) => {
    return (
        <div className="flex align-top w-full flex-col ml-3 mt-3 p-3">
            <div className="flex flex-col md:flex-row items-center mb-4 w-full justify-between">
                <div className="flex items-center">
                    <FontAwesomeIcon className="fa-lg" icon={faArrowRightArrowLeft} />
                    <h6 className="text-3xl leading-normal text-emerald-800 font-bold px-4">Transferencias</h6>
                </div>
                <button
                    onClick={() => {
                        setModalTransferencia(true);

                        window.scrollTo(0, 0);
                        document.body.classList.add('overflow-hidden');
                    }}
                    className="bg-cream-can w-max mt-2 py-2 px-4 rounded-2xl font-semibold">
                    Nueva transferencia
                </button>
            </div>

            {/* Transferencias */}

            <section className=" w-full mt-8">
                <h2 className="m-0 text-lg font-semibold">Últimas 3 transferencias </h2>
                <article className="text-sm mx-4">
                    {transactions.map((transaction) => {
                        // show only 3 transactions
                        if (transactions.indexOf(transaction) < 3) {
                            return (
                                <Transaction
                                    key={transaction.transactionID}
                                    url={url}
                                    token={token}
                                    id={transaction.transactionID}
                                    type={transaction.transactionTypeID}
                                    sender={transaction.productIDOrigin}
                                    receptor={transaction.productIDDestination}
                                    number={transaction.productIDDestination}
                                    timestamp={transaction.transactionDate}
                                    ammount={transaction.transactionValue}
                                    // img={transaction.img}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </article>
            </section>

            <hr />

            {/* Contactos */}

            <div className="flex w-full justify-between items-center my-8">
                <h3 className="font-semibold text-lg">Contactos Guardados</h3>
                <div className="flex">
                    <button
                        onClick={() => {
                            setModalContacto(true);

                            window.scrollTo(0, 0);
                            document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-gray-300 w-max py-1 px-4 rounded-2xl font-semibold">
                        Nuevo Contacto
                    </button>
                    <button
                        onClick={() => {
                            // setModalBorrarContacto(true);
                            alert('En progreso...');
                            // window.scrollTo(0, 0);
                            // document.body.classList.add('overflow-hidden');
                        }}
                        className="bg-red-400 ml-2 w-max py-1 px-4 rounded-2xl font-semibold">
                        Borrar Contacto
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row flex-wrap">
                    {contacts.map((contact, index) => {
                        return (
                            <div key={index + 1} className="flex items-center mr-8 my-4">
                                <div className="mr-6 relative">
                                    <img
                                        className="w-10 h-10 object-cover rounded-full"
                                        src={contact.image.length > 0 && contact.image.includes('data') ? contact.image : 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'}
                                        alt=""
                                    />
                                </div>
                                <b className="text-base text-yellow-500">{contact.contactName}</b>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TransactionsContainer;
