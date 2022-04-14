import { useNavigate } from 'react-router-dom';

const Form = ({ setDirection }) => {
    const navigateTo = useNavigate();

    const handleSubmitMap = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        setDirection(data);

        navigateTo('/sucursales/calendario');

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <form onSubmit={handleSubmitMap} className="h-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold underline my-8">¡Empieza tu búsqueda!</h2>
            <div className="flex flex-col sm:flex-row w-full grow items-center">
                <div className="mb-6 w-full sm:w-1/2 px-4">
                    <label htmlFor="calle" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                        Calle
                    </label>
                    <input
                        minLength={4}
                        onChange={(e) => {
                            e.target.value = e.target.value
                                .replace(/[^a-zA-Z0-9 ]/g, '')
                                .toUpperCase()
                                .substring(0, 40);
                        }}
                        type="text"
                        id="calle"
                        name="calle"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Ingresa la calle"
                        required
                    />
                </div>
                <div className="mb-6 w-full sm:w-1/2 px-4">
                    <label htmlFor="localidad" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                        Localidad
                    </label>
                    <input
                        minLength={4}
                        onChange={(e) => {
                            e.target.value = e.target.value
                                .replace(/[^a-zA-Z0-9 ]/g, '')
                                .toUpperCase()
                                .substring(0, 40);
                        }}
                        type="text"
                        id="localidad"
                        name="localidad"
                        placeholder="Ingresa la localidad"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
            </div>
            <div className="mb-6 w-full px-4">
                <label htmlFor="provincia" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                    Provincia
                </label>
                <input
                    minLength={4}
                    onChange={(e) => {
                        e.target.value = e.target.value
                            .replace(/[^a-zA-Z0-9 ]/g, '')
                            .toUpperCase()
                            .substring(0, 40);
                    }}
                    type="text"
                    id="provincia"
                    name="provincia"
                    placeholder="Ingresa la provincia"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                />
            </div>
            <button type="submit" className="text-gray-800 bg-cream-can focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-4">
                Buscar
            </button>
        </form>
    );
};

export default Form;
