const Mapa = () => {
    return (
        <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99181.33646045618!2d-58.48298468229925!3d-34.61129938332559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2spe!4v1649775935673!5m2!1ses-419!2spe"
            title="Mapa"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            tabIndex={0}
            aria-label="Mapa"></iframe>
    );
};

export default Mapa;
