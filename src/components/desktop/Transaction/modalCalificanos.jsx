import { useState } from 'react';

const ModalCalificanos = ({ modalCalificanos, setModalCalificanos }) => {
    const califications = [
        {
            id: 1,
            name: 'Muy difícil',
            value: 1,
            emoji: '😣',
        },
        {
            id: 2,
            name: 'Un poco costoso',
            value: 2,
            emoji: '😞',
        },
        {
            id: 3,
            name: 'Neutral',
            value: 3,
            emoji: '😐',
        },
        {
            id: 4,
            name: 'Fácil',
            value: 4,
            emoji: '😀',
        },
        {
            id: 5,
            name: 'Muy fácil',
            value: 5,
            emoji: '😁',
        },
    ];

    const [calification, setCalification] = useState(null);

    return (
        <div className={modalCalificanos ? 'w-full h-full absolute flex items-center justify-center z-50' : 'hidden'}>
            <div className="absolute bg-white w-full lg:w-2/3 h-2/3 md:h-1/3 p-4 rounded-md shadow-md">
                {calification ? (
                    <>
                        <div className="flex flex-col w-full h-full justify-between items-center">
                            <h2 className="text-2xl font-bold">¡Gracias por calificarnos! ✅</h2>
                            <section className="flex flex-col items-center">
                                <p className="text-lg font-bold">
                                    Tu calificación es: <span className="text-blue-stone font-bold">{calification.name}</span>
                                    {calification.emoji}
                                </p>
                                <div className="text-lg font-semibold">Tus valoraciones son muy importantes para nosotros.</div>
                                <p>{calification.name !== 'Muy fácil' ? 'Trabajaremos para seguir mejorando.' : ''}</p>
                            </section>
                            <button
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                onClick={() => {
                                    setCalification(null);
                                    setModalCalificanos(false);
                                }}>
                                Cerrar
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col w-full h-full justify-around">
                            <div className="flex items-center relative">
                                <h2 className="text-2xl font-bold text-blue-stone text-center w-full">Califícanos:</h2>
                                <button
                                    className="bg-transparent absolute top-0 right-0 hover:bg-blue-stone text-blue-stone font-semibold hover:text-white px-4 border border-blue-stone hover:border-transparent rounded"
                                    onClick={() => {
                                        setModalCalificanos(false);
                                    }}>
                                    Cerrar
                                </button>
                            </div>
                            <p className="text-center text-lg pb-4">¿Que tan fácil te resultó hacer la gestión en nuestra plataforma virtual?</p>
                            <section className="flex flex-col items-center md:flex-row w-full justify-around">
                                {califications.map((calification) => (
                                    <article
                                        onClick={() => {
                                            setCalification(calification);
                                        }}
                                        key={calification.id}
                                        className="flex flex-col py-2 cursor-pointer hover:scale-75 transition-all">
                                        <section className="flex">
                                            {[...Array(calification.value)].map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f4c74b   " viewBox="0 0 24 24" stroke="#f4c74b" strokeWidth="2">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                    />
                                                </svg>
                                            ))}
                                        </section>
                                        <p className="text-center font-semibold text-lg p-0 md:pt-4">{calification.name}</p>
                                    </article>
                                ))}
                            </section>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalCalificanos;
