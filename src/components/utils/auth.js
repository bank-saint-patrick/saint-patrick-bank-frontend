const validateSession = () => {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) {
        window.location.href = '/';
    }

    return session;
};

module.exports = { validateSession };
