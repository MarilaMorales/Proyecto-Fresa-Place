import React, { useState, useEffect } from 'react';
import "../Styles/Header.css";

const Header = () => {
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
    <header>
      <h1 id='mensajeBanner'>{message}</h1>
    </header>
  );
};

export default Header;
