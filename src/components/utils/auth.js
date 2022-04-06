const validateSession = () => {
<<<<<<< HEAD
  const session = JSON.parse(localStorage.getItem('session'));
  if (!session) {
    window.location.href = '/';
  }

  return session;
};

module.exports = { validateSession };
=======
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) {
        window.location.href = '/';
    }

    return session;
};

module.exports = { validateSession };
>>>>>>> 1f281368acc7dfb00a632a26715d5c7626922d82
