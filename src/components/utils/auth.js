const validateSession = () => {
<<<<<<< HEAD
    const session = JSON.parse(sessionStorage.getItem('session'));
=======
    const session = JSON.parse(localStorage.getItem('session'));
>>>>>>> 2cd9366d5b48d2a44f99afa87999c54f1d14905e
    if (!session) {
        window.location.href = '/';
    }

    return session;
};

module.exports = { validateSession };
