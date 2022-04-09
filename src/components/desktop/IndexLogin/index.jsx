import { useEffect, useState } from 'react';
import Loading from './../../needs/Loading/index';

const IndexLogin = ({ url, token }) => {
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            setLoading(true);

            // INICIO DE LA CONEXION CON LA API

            const response = await fetch(`${url}/Profile/GetUser`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            setUserName(data.firstName);

            // FIN DE LA CONEXION CON LA API

            setLoading(false);
        };

        fetchUserName();
    }, [token, url]);

    return (
        <div className="w-full h-full flex justify-center">
            {loading ? (
                <Loading />
            ) : (
                <h1 className="text-3xl mt-8">
                    ¡Bienvenido <b>{userName}</b>!
                </h1>
            )}
        </div>
    );
};

export default IndexLogin;
