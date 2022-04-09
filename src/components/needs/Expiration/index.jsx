import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Expiration = () => {
    const [hora, setHora] = useState({});
    const [expiro, setExpiro] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        const sessionExpiration = JSON.parse(sessionStorage.getItem('session'));

        if (sessionExpiration) {
            const expiration = sessionExpiration.expiration;

            const timer = setInterval(() => {
                const date = new Date(expiration);

                const time = date.getTime();

                const now = new Date().getTime();

                const diff = time - now;

                const minutes = Math.floor(diff / (1000 * 60));

                const seconds = Math.floor(diff / 1000) - minutes * 60;

                setHora({ minutes, seconds });

                if (minutes <= 0 && seconds <= 0) {
                    sessionStorage.removeItem('session');
                    clearInterval(timer);
                    setExpiro(true);
                    navigateTo('/login');
                    window.location.reload();
                }
            }, 1000);

            expiro && toast.info('Su sesión ha expirado, por favor ingrese nuevamente.');
        }
    });

    return (
        <div className="fixed right-0 bottom-0">
            <p className="font-bold text-red-600">
                Sesión activa: {hora.minutes} {hora.minutes !== 0 && 'minutos'} : {hora.seconds} segundos
            </p>
        </div>
    );
};

export default Expiration;
