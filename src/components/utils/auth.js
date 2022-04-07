const validateSession = () => {
    const session = JSON.parse(sessionStorage.getItem('session'));
    if (!session) {
        window.location.href = '/';
    }

    return session;
};

module.exports = { validateSession };
