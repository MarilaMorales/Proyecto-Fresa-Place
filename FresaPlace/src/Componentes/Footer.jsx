import React, { useState, useEffect } from 'react';
import "../Styles/Footer.css";



const Footer = () => {
    const [message, setMessage] = useState("Bienvenidos a Fresa Place"); //Usar una de las frases de inicio

  useEffect(() => {
    const messages = [
      "Bienvenidos a Fresa Place",
      "Dirigete a Contactenos y has tu pedido Especializado"
    ];

    const intervalId = setInterval(() => {
      setMessage(prevMessage => prevMessage === messages[0] ? messages[1] : messages[0]);
    }, 4000); 



    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);


  }, []);
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>FRESA PLACE</p>
                <div className="socials">
                    <a href="https://www.facebook.com/profile.php?id=61565317138531">Facebook</a>
                    <a href="https://www.instagram.com/fresa_place/">Instagram</a>
                </div>
                <h1 id='mensajeBanner'>{message}</h1>
            </div>
        </footer>
    );
};

export default Footer;
